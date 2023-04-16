import request from '@/lib/request';
import sys from '../../config/sys';

export async function queryItems(page: number) {
  return request.get(`/items?page=${page}`).then((data) => {
    return data;
  });
}
