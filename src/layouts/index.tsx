import sty from './index.css';
import logo from '@/assets/logo.png';
import { Outlet, NavLink } from 'umi';
import { Col, Row } from 'antd';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

document.write("<script>!function(p){\"use strict\";!function(t){var s=window,e=document,i=p,c=\"\".concat(\"https:\"===e.location.protocol?\"https://\":\"http://\",\"sdk.51.la/js-sdk-pro.min.js\"),n=e.createElement(\"script\"),r=e.getElementsByTagName(\"script\")[0];n.type=\"text/javascript\",n.setAttribute(\"charset\",\"UTF-8\"),n.async=!0,n.src=c,n.id=\"LA_COLLECT\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:\"3F0jKPFdPEYMn3mi\",ck:\"3F0jKPFdPEYMn3mi\"});</script>")


const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a   href="/">
        照片
      </a>
    ),
    
  },
  {
    key: '2',
    label: (
      <a   href="/about">
        关于我
      </a>
    ),
    
  },
  
];


export default function Layout() {
  return (
    <div className={sty.box}>
      
      <div className={sty.web}>
      
          <div className={sty.headerBox}>
            <div className={sty.headerBoxWrap}>
              <div className={sty.headerLeft}>
                <NavLink to="/" className={({ isActive }) => (isActive ? `${sty.navLink} ${sty.navLinkActive}` : sty.navLink)}>
                  照片
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? `${sty.navLink} ${sty.navLinkActive}` : sty.navLink)}>
                  关于我
                </NavLink>
                <NavLink to="/linkme" className={({ isActive }) => (isActive ? `${sty.navLink} ${sty.navLinkActive}` : sty.navLink)}>
                  联系方式
                </NavLink>
                <NavLink to="/photos" className={({ isActive }) => (isActive ? `${sty.navLink} ${sty.navLinkActive}` : sty.navLink)}>
                  发布
                </NavLink>
                <NavLink to="/admin/list" className={({ isActive }) => (isActive ? `${sty.navLink} ${sty.navLinkActive}` : sty.navLink)}>
                  管理
                </NavLink>
              </div>

              <div className={sty.headerRight} style={{ display: 'none' }}>
                <img src={logo} className={sty.logo} />
              </div>
            </div>
          </div>
          <div className={sty.fixedPadding}></div>
      </div>


      <div className={sty.mobile}>
         
      <Row >
    <Col xs={2}  style={{textAlign:`center`,width:`56px`, lineHeight:`56px`,display:`inline-block`}}>

      <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      <img src={logo} className={sty.logo} />
      </Space>
    </a>
  </Dropdown>
    
    </Col>
    <Col xs={20}  style={{textAlign:`center`,width:`56px`, lineHeight:`56px`,display:`inline-block`, fontSize:`16px`}}>
      Bob Wang
    </Col>
    <Col xs={2}  >
    </Col>
  </Row>
        
        
      </div>
      <Outlet />
      <div style={{ textAlign: 'center', paddingTop: `80px`, paddingBottom: `80px`,background:`#0e232d`}}>
        <div style={{ marginTop: `10px`, color: '#aea194', fontSize: `16px` }}>Made by Bob Wang</div>
        <div style={{ marginTop: `15px`, color: '#6a828b', fontSize: `14px` }}>2023 - ALL RIGHTS RESERVED - BOB WANG</div>
        <div style={{ marginTop: `15px`, color: '#6a828b', fontSize: `14px` }}>
          <a href="http://beian.miit.gov.cn" style={{ marginTop: `15px`, color: '#6a828b', fontSize: `14px` }}>
            粤ICP备2023049153号
          </a>
        </div>
      </div>
    </div>
  );
}
