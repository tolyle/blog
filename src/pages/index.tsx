import waterfall from '@/components/waterfall/index';
import { queryItems } from '@/services/item';
import { useEffect, useState } from 'react';
import { notification } from 'antd';

import request from 'umi-request';

export default () => {
  const [page, setPage] = useState(1);

  console.log('www');

  // notification.config({
  //   placement: 'bottomRight',
  //   bottom: 500,
  //   duration: 3,
  //   rtl: true,
  // });

  request
    .get('http://www.baidu.com')
    .then(function (response: any) {
      console.log(response);
    })
    .catch(function (error: any) {
      console.log(error);
    });

  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });

  const photoData = queryItems(page);
  const view = waterfall(photoData);

  return view;
};
