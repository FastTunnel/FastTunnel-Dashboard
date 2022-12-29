export interface ListResult {
  count: number;
  rows: Array<ListModel>;
}

export interface ListModel {
  LocalIp: string;
  LocalPort: number;
}

export interface CardListResult {
  list: Array<CardList>;
}

export interface CardList {
  banner: string;
  description: string;
  index: number;
  isSetup: boolean;
  name: string;
  type: number;
}
