import { PrimaryTableCol, TableRowData } from 'tdesign-vue-next';

export const COLUMNS: PrimaryTableCol<TableRowData>[] = [
  {
    title: 'key',
    width: 200,
    ellipsis: true,
    colKey: 'key',
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
