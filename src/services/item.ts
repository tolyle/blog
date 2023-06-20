import request from '@/lib/request';
import sys from '../../config/sys';

export async function queryItems(page: number) {
  return request.get(`/index?currentPage=${page}`).then((data) => {
    return data;
  });
}
