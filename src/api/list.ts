import { request } from '@/utils/request';
import type { CardListResult, ListResult } from '@/api/model/listModel';
import type { TunnelClient } from '@/api/model/tunnelClient';

const Api = {
  WebList: '/system/GetAllWebList',
  ForwardList: '/system/GetAllForwardList',
  ClientList: '/system/Clients',
  ResponseTempList: '/system/getResponseTempList',
};

export function getWebList() {
  return request.get<ListResult>({
    url: Api.WebList,
  });
}

export function getForwardList() {
  return request.get<ListResult>({
    url: Api.ForwardList,
  });
}

export function getClients() {
  return request.get<Array<TunnelClient>>({
    url: Api.ClientList,
  });
}

export function getResponseTempList() {
  return request.get<ListResult>({
    url: Api.ResponseTempList,
  });
}
