import { Button, Input, Tag, Space } from 'antd';
import css from './index.css';
import { PlusOutlined } from '@ant-design/icons';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, Divider, Table } from 'antd';
import request from '@/lib/request';
import { useEffect, useState } from 'react';
import * as adminApi from '@/services/admin';

const num = 200;

let dataSource = [
  {
    key: '1',
    title: '这是一个神奇的地方',
    tags: '旅游 / 人像',
    photoTime: '2023-11-10 22:55',
    location: '中国 / 深圳 / 香蜜湖',
    brand: 'SONY',
    model: 'A7RM3',
    lensModel: '55',
    exif: '大小:23M,光圈:F1.2,焦距:44MM, ISO:900, 白平衡:自动',
    createTime: '2023-11-10 22:55',
    aaa: '2023-11-10 22:55',
  },
];

const columns = [
  {
    title: '照片标题',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '标签',
    dataIndex: 'tags',
    key: 'tags',
  },
  {
    title: '拍摄时间',
    dataIndex: 'photoTime',
    key: 'photoTime',
  },
  {
    title: '拍摄地点',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: '相机品牌',
    dataIndex: 'brand',
    key: 'brand',
  },
  {
    title: '相机型号',
    dataIndex: 'model',
    key: 'model',
  },
  {
    title: '镜头型号',
    dataIndex: 'lensModel',
    key: 'lensModel',
  },
  {
    title: 'EXIF',
    dataIndex: 'exif',
    key: 'exif',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: '操作',
    key: 'action',
    width: 200,
    render: (_, item) => (
      <Space size="small">
        <a href={item.key}>缩略图</a>
        <a href={item.key}>原图</a>
        <a href={item.key}>修改</a>
        <a href={item.key}>删除</a>
      </Space>
    ),
  },
];

export default () => {
  const [data, setData] = useState([] as any[]);
  useEffect(() => {
    let dataList = adminApi.queryPhotos(0);
    dataList
      .then((res: any[]) => {
        res.data.page.data.forEach((element: any) => {
          console.log('res = ', element);
          element.key = element.id;
        });

        setData(res.data.page.data);
      })
      .catch((err: any) => {
        console.log('err = ', err);
      });
  }, []);

  return (
    <div className={css.box} style={{ marginTop: '30px' }}>
      <p color="#f50">
        当前数据库中共有 <span className={[css.tipColor, css.fontBold].join(' ')}>{num}</span> 张照片，<span className={[css.tipColor, css.fontBold].join(' ')}>{num}</span> 条博客信息。
      </p>
      <Divider />
      <Table dataSource={data} columns={columns} />
    </div>
  );
};
