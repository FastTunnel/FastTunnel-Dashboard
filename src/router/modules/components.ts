import Layout from '@/layouts/index.vue';
import ListIcon from '@/assets/assets-slide-list.svg';

export default [
  {
    path: '/list',
    name: 'list',
    component: Layout,
    redirect: '/tunnel/forward',
    meta: { title: '隧道管理', icon: ListIcon },
    children: [
      {
        path: 'clients',
        name: 'clients',
        component: () => import('@/pages/tunnel/clients/index.vue'),
        meta: { title: '客户端', roleCode: 'base' },
      },
      {
        path: 'forwards',
        name: 'forwards',
        component: () => import('@/pages/tunnel/forward/index.vue'),
        meta: { title: '端口转发', roleCode: 'base' },
      },
      {
        path: 'webs',
        name: 'webs',
        component: () => import('@/pages/tunnel/http/index.vue'),
        meta: { title: 'Web', roleCode: 'base' },
      },
    ],
  },
];
