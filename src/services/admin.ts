import request from '@/lib/request';
import sys from '../../config/sys';

export async function queryPhotos(page: number) {
  return request.get(`/api/admin/photoList?currentPage=${page}`).then((data) => {
    return data;
  });
}

export async function savePhoto(formDate: FormData) {
  return request
    .post(`/api/admin/addPhoto`, {
      data: formDate, //上传进度事件的回调函数
    })
    .then((res) => {
      return res;
    });
}

export async function click(id: number) {
  return request.post(`/api/admin/click`, { data: { id: id } });
}

export async function deleteById(id: number) {
  return request.delete(`/api/admin/deleteById`, { data: { id: id } }).then((res) => {
    return res;
  });
}
