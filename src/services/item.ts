import request from '@/lib/request';
import sys from '../../config/sys';

export async function queryItems(page: number) {
  return request.get(`/index?currentPage=${page}`).then((data) => {
    return data;
  });
}

/**
 * 获取图片列表
 * @param params
 * @returns
 */
export async function queryImageList(params: Record<string, any>) {
  const response = await request(`/index`, {
    method: 'GET',
    params,
  });
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

/**
 * 获取图片列表
 * @param params
 * @returns
 */
export async function querySelectList(params: Record<string, any>) {
  return request(`/tags`, {
    method: 'GET',
    params,
  });
}
