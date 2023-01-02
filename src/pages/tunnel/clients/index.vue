<template>
  <div>
    <t-card class="list-card-container"
      ><h1>客户端</h1>
      <t-table
        :expand-on-row-click="true"
        :expand-icon="true"
        :data="data"
        :columns="COLUMNS"
        :row-key="rowKey"
        vertical-align="top"
        :hover="true"
        :pagination="pagination"
        :loading="dataLoading"
        @page-change="rehandlePageChange"
        @change="rehandleChange"
      >
        <template #expandedRow="{ row }">
          <h3>网站（Web）</h3>
          <t-space direction="vertical">
            <t-list :split="true">
              <t-list-item v-for="(web, index) in row.webInfos" :key="index"
                >{{ web.webConfig.subDomain }}=> {{ web.webConfig.localIp }}: {{ web.webConfig.localPort }}
              </t-list-item>
            </t-list>
          </t-space>
          <h3>端口转发（Forward）</h3>
          <t-space direction="vertical">
            <t-list :split="true">
              <t-list-item v-for="(forward, index) in row.forwardInfos" :key="index">
                {{ forward.sshConfig.remotePort }}=> {{ forward.sshConfig.localIp }}:
                {{ forward.sshConfig.localPort }}
              </t-list-item>
            </t-list></t-space
          >
        </template>
      </t-table></t-card
    >
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { getClients } from '@/api/list';
import { COLUMNS } from './constants';

const data = ref([]);
const pagination = ref({
  defaultPageSize: 20,
  total: 0,
  defaultCurrent: 1,
});

const dataLoading = ref(false);
const fetchData = async () => {
  dataLoading.value = true;
  try {
    const res = await getClients();
    data.value = res;
    pagination.value = {
      ...pagination.value,
      total: res.length,
    };
  } catch (e) {
    console.log(e);
  } finally {
    dataLoading.value = false;
  }
};

const router = useRouter();

const rowKey = 'index';

const rehandlePageChange = (curr, pageInfo) => {
  console.log('分页变化', curr, pageInfo);
};
const rehandleChange = (changeParams, triggerAndData) => {
  console.log('统一Change', changeParams, triggerAndData);
};
const handleClickDetail = () => {
  router.push('/detail/base');
};

onMounted(() => {
  fetchData();
});
</script>
