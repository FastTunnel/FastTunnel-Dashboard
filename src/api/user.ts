import { request } from '@/utils/request';
import type { CardListResult, ListResult } from '@/api/model/listModel';

const Api = {
  Login: '/Account/GetToken',
};

export function login(data) {
  return request.post<String>({
    url: Api.Login,
    data,
  });
}
