import { Button, Input, Tag, Space } from 'antd';
import css from './index.css';
import { PlusOutlined } from '@ant-design/icons';
import { InboxOutlined } from '@ant-design/icons';
import { message, Popconfirm, Upload, Divider, Table, Card, Col, Row, Image } from 'antd';
import request from '@/lib/request';
import { useEffect, useState } from 'react';
import * as adminApi from '@/services/admin';

export default () => {
  const [data, setData] = useState([] as any[]);
  const [num, setNum] = useState(Number);
  const [currentPage, setCurrentPage] = useState();

  useEffect(() => {
    let dataList = adminApi.queryPhotos(1);

    dataList
      .then((res: any[]) => {
        res.data.records.forEach((element: any) => {
          element.key = element.id;
        });

        setNum(res.data.total);

        setData(res.data.records);
      })
      .catch((err: any) => {
        console.log('err = ', err);
      });
  }, []);

  const changeSearch = (page: any) => {
    console.log(page);
    setCurrentPage(page);
    let dataList = adminApi.queryPhotos(page);

    dataList
      .then((res: any[]) => {
        res.data.records.forEach((element: any) => {
          console.log('res = ', element);
          element.key = element.id;
        });

        setNum(res.data.total);
        setData(res.data.records);
      })
      .catch((err: any) => {
        console.log('err = ', err);
      });
  };

  const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      key: 'index',
      render: (text: any, record: any, index: any) => {
        return `${index + 1}`;
      },
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '城市',
      dataIndex: 'photoCity',
      key: 'photoCity',
      width: 150,
    },
    {
      title: '景点',
      dataIndex: 'photoTouristSpot',
      key: 'photoTouristSpot',
      width: 300,
    },
    {
      title: 'Tag',
      dataIndex: 'tags',
      key: 'tags',
      width: 300,
      render: (_: any, record: any) => (
        <Space size="middle">
          <Tag color="#108ee9">{record.tags}</Tag>
        </Space>
      ),
    },
    {
      title: '缩略图',
      width: 150,
      dataIndex: 'photoTouristSpot',
      key: 'photoTouristSpot',
      render: (_: any, record: any) => (
        <Space size="middle">
          <Image height={40} src={record.thumbnailUrl} />
        </Space>
      ),
    },
    {
      title: '操作',
      dataIndex: 'operation',
      width: 100,
      textWrap: 'word-break',
      ellipsis: true,
      key: 'operation',
      render: (_: any, record: any) => (
        <span>
          <Popconfirm
            title="确定删除吗?"
            onConfirm={() => {
              confirm(record, data);
            }}
          >
            <a>删除</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  const confirm = (record: any, data: any) => {
    adminApi.deleteById(record.id).then((res: any[]) => {
      if ((res.code = 200)) {
        message.success('删除成功');
        //data.filter((item: any) => item.id !== record.id);
        let s = data.filter((item: any) => {
          return item.id !== record.id;
        });

        setData(s);
        setNum(num - 1);
      } else {
        message.error(res.message);
      }
    });
  };

  return (
    <div className={css.box} style={{ marginTop: '30px' }}>
      <p color="#f50">
        当前数据库中共有 <span className={[css.tipColor, css.fontBold].join(' ')}>{num}</span> 张照片，<span className={[css.tipColor, css.fontBold].join(' ')}>{num}</span> 条博客信息。
      </p>
      <Divider />

      <Table columns={columns} pagination={{ showSizeChanger: false, current: currentPage, total: num, pageSize: 10, onChange: (page) => changeSearch(page) }} dataSource={data} />
    </div>
  );
};
