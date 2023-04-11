import waterfall from '@/components/waterfall/index';
import { queryItems } from '@/services/item';
import { useEffect, useState } from 'react';
import notification from 'ant-design-vue/es/notification';
import 'ant-design-vue/dist/antd.css';

export default () => {
  const [page, setPage] = useState(1);

  console.log(page);

  // notification.config({
  //   placement: 'bottomRight',
  //   bottom: 500,
  //   duration: 3,
  //   rtl: true,
  // });

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
