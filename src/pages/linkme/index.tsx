import { Col, Row, Image } from 'antd';
import { FormattedMessage } from 'umi';
import css from './index.css';
import email from '@/assets/email.png';
import ins from '@/assets/instagram.png';
import wechat from '@/assets/wechat.png';

import { Helmet } from 'umi';

export default () => {
  return (
    <div className="application">
      {/* <Helmet>
        <title>我的摄影-联系我</title>
      </Helmet> */}
      <div className={css.box} style={{ marginTop: '30px' }}>
        <div className={css.title}>
          <FormattedMessage id="chat" />
        </div>
        <div className={css.icons}>
          <div style={{ textAlign: `center`, display: `flex`, justifyContent: `center` }}>
            <div className={css.iconBorder}>
              <div>
                <img className={css.icon} src={email} alt="EMAIL" />
              </div>
              <div className={css.iconTitle}>
                <FormattedMessage id="email" />
              </div>
              <div>hi@bobjoy.com</div>
            </div>

            <div className={css.iconBorder}>
              <div>
                <img className={css.icon} src={ins} alt="instagram" />
              </div>
              <div className={css.iconTitle}>
                <FormattedMessage id="instagram" />
              </div>
              <div>@onmybob</div>
            </div>

            <div className={css.iconBorder}>
              <div>
                <img className={css.icon} src={wechat} alt="Wechat" />
              </div>
              <div className={css.iconTitle}>
                <FormattedMessage id="wechat" />
              </div>
              <div>bobjoy</div>
            </div>
          </div>
        </div>
        <div style={{ clear: `both` }}></div>
      </div>
    </div>
  );
};
