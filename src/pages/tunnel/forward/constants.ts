import { PrimaryTableCol, TableRowData } from 'tdesign-vue-next';

export const COLUMNS: PrimaryTableCol<TableRowData>[] = [
  {
    title: 'remotePort',
    width: 200,
    ellipsis: true,
    colKey: 'remotePort',
  },
  {
    title: 'localIp',
    align: 'left',
    width: 300,
    colKey: 'localIp',
  },
  {
    title: 'localPort',
    width: 200,
    ellipsis: true,
    colKey: 'localPort',
  },
];
