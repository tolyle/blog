import { Col, Row, Image } from 'antd';
import css from './index.css';
import me from '@/assets/me2.jpg';

export default () => {
  return (
    <div className={css.box} style={{ marginTop: '30px' }}>
      <Row>
        <Col span={12}>
          <div className={css.item}>
            <div className={css.title}>关于我</div>
            <div className={css.content}>
              Bob Wang来自于中国的深圳，中文名为王东杰，具有15年后端程序开发和技术管理经验，热爱科技技术与视觉传达和令人兴奋的故事，总是以新鲜、创新和极简的方式追求理想的结果。
              <br />
              <br />
              出生在中国，硕士毕业于英国。在儿时，便喜欢上了计算机，从那以后踏上了程序开发之路，擅长于前后端程序开发，可以独立完成前后端程序开发、数据库设计、程序测试、部署，并且具有产品经理思维，2019年被深圳市评选为领军人才。{' '}
              <br /> ​<br />
              虽然代码给人感觉枯燥无味，但是当用代码来完成一项功能的时候，总是会给人一种成就感。
              到目前为止，王东杰在第三方支付行业工作已有10年，曾就职过北京易宝支付有限公司、中汇电子支付有限公司、深圳前海移联科技有限公司等。
              <br />
            </div>
          </div>
        </Col>
        <Col span={12} style={{ backgroundImage: `url(${me})`, backgroundSize: `100% ` }}></Col>
      </Row>
    </div>
  );
};
