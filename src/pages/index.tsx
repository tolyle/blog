import waterfall from '@/components/waterfall/index';

import { setToken } from '@/lib/token';
import { IToken } from '@/lib/interface';

export default () => {
  const tk: IToken = {
    token: 'asdfasdfasdfasdfasdf',
    id: 23,
    clentIp: '127.0.0.1',
    lastUpdate: new Date(),
  };
  setToken(tk);

  // notification.config({
  //   placement: 'bottomRight',
  //   bottom: 500,
  //   duration: 3,
  //   rtl: true,
  // });

  // notification.open({
  //   message: 'Notification Title',
  //   description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  //   onClick: () => {
  //     console.log('Notification Clicked!');
  //   },
  // });

  const view = waterfall();

  return view;
};
