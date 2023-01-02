<template>
  <t-row :gutter="[16, 16]">
    <t-col :xs="6" :xl="3">
      <t-card
        title="在线客户端"
        :style="{ height: '168px' }"
        :class="{ 'dashboard-item': true, 'dashboard-item--main-color': false }"
      >
        <div class="dashboard-item-top">
          <span>{{ onlineCount }}</span>
        </div>
        <div class="dashboard-item-left">
          <span :style="{ marginTop: `-24px` }">
            <server-icon />
          </span>
        </div>
      </t-card>
    </t-col>

    <t-col :xs="6" :xl="3">
      <t-card
        title="请求队列数"
        :style="{ height: '168px' }"
        :class="{ 'dashboard-item': true, 'dashboard-item--main-color': false }"
      >
        <div class="dashboard-item-top">
          <span>{{ responseCount }}</span>
        </div>
        <div class="dashboard-item-left">
          <span :style="{ marginTop: `-24px` }"> <time-icon /></span>
        </div> </t-card
    ></t-col>
  </t-row>
</template>

<script lang="ts">
export default {
  name: 'DashboardBase',
};
</script>

<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue';
import { ServerIcon, TimeIcon, SwapIcon } from 'tdesign-icons-vue-next';
import { useSettingStore } from '@/store';
import { getResponseTempList, getClients } from '@/api/list';

const store = useSettingStore();
const onlineCount = ref(0);
const responseCount = ref(0);

const fetchData = async () => {
  const res = await getResponseTempList();
  responseCount.value = res.count;

  const clients = await getClients();
  onlineCount.value = clients.length;
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="less" scoped>
.dashboard-item {
  padding: 8px;

  :deep(.t-card__footer) {
    padding-top: 0;
  }

  :deep(.t-card__title) {
    font-size: 14px;
    font-weight: 500;
  }

  :deep(.t-card__body) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    position: relative;
  }

  &:hover {
    cursor: pointer;
  }

  &-top {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    > span {
      display: inline-block;
      color: var(--td-text-color-primary);
      font-size: 36px;
      line-height: 44px;
    }
  }

  &-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    > .t-icon {
      cursor: pointer;
    }
  }

  &-block {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 22px;
    color: var(--td-text-color-placeholder);
  }

  &-trend {
    margin-left: 8px;
  }

  &-left {
    position: absolute;
    top: 0;
    right: 32px;

    > span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 56px;
      background: var(--td-brand-color-1);
      border-radius: 50%;

      .t-icon {
        font-size: 24px;
        color: var(--td-brand-color);
      }
    }
  }

  // 针对第一个卡片需要反色处理
  &--main-color {
    background: var(--td-brand-color);
    color: var(--td-text-color-primary);

    :deep(.t-card__title),
    .dashboard-item-top span,
    .dashboard-item-bottom {
      color: var(--td-text-color-anti);
    }

    .dashboard-item-block {
      color: var(--td-text-color-anti);
      opacity: 0.6;
    }

    .dashboard-item-bottom {
      color: var(--td-text-color-anti);
    }
  }
}
</style>
