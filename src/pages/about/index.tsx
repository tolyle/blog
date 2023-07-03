import { Col, Row, Image } from 'antd';
import { FormattedMessage } from 'umi';
import css from './index.css';
import me from '@/assets/me2.jpg';

export default () => {
  return (
    <div className={css.box} style={{ marginTop: '56px' }}>
      <Row className={css.web}>
        <Col span={12}>
          <div className={css.item}>
            <div className={css.title}>
              <FormattedMessage id="aboutme" />
            </div>
            <div className={css.content}>
              <FormattedMessage id="description_1" />
              <br />
              <br />
              <FormattedMessage id="description_2" /> <br /> ​<br />
              <FormattedMessage id="description_3" />
              <br />
            </div>
          </div>
        </Col>
        <Col span={12} className={css.bImg}></Col>
      </Row>

      <Row className={css.mobile}>
        <div className={css.mobileBg}></div>
        <div>
          <div className={css.mobileTitle}>
            <FormattedMessage id="aboutme" />
          </div>
          <div className={css.mobileContent}>
            <FormattedMessage id="description_1" />
            <br />
            <FormattedMessage id="description_2" /> <br />
            <FormattedMessage id="description_3" />
          </div>
        </div>
      </Row>
    </div>
  );
};
