import request from '@/lib/request';
import sys from '../../config/sys';

export async function queryPhotos(page: number) {
  return request.get(`/api/admin/photoList?currentPage=${page}`).then((data) => {
    return data;
  });
}
