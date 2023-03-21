import yayJpg from '../assets/yay.jpg';
import React from 'antd'
import { DatePicker } from 'antd';

export default function HomePage() {
  return (
    <div>
      <h2>Yay!ss thisthist  Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
        <DatePicker/>
      </p>
      <p>
        To gets started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
