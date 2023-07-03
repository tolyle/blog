import request from '@/lib/request';
import sys from '../../config/sys';

export async function queryItems(page: number) {
  return request.get(`/index?currentPage=${page}`).then((data) => {
    return data;
  });
}

export async function queryImageList(page: number) {
  const response = await request.get(`/index?currentPage=${page}`);
  if (response.code === 200) {
    const { data = [], hasNext, total } = response.data || {};
    return {
      list: data as any[],
      hasNext,
      total: Number(total),
    };
  }
  return {
    list: [],
    hasNext: false,
    total: 0,
  };
}
