import { PrimaryTableCol, TableRowData } from 'tdesign-vue-next';

export const COLUMNS: PrimaryTableCol<TableRowData>[] = [
  {
    title: 'IP',
    align: 'left',
    width: 300,
    colKey: 'remoteIpAddress',
  },
  {
    title: '开始时间',
    colKey: 'startTime',
  },
];
