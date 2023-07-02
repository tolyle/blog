import sty from './index.css';
import logo from '@/assets/logo.png';
import { Outlet, NavLink } from 'umi';
import { Col, Row, Button } from 'antd';
import $ from 'jquery';
import { Helmet } from 'umi';
import { useEffect } from 'react'


export default function Layout() {

  useEffect(() => {

    $("#id1").on('click', () => {
      $("#id2").toggleClass(sty.open);
    })

  }, []);
  function componentDidMount() {
    console.log('componentDidMount')
  }
  const fun1 = function () {
    alert(1)
  }
  return (
    <div className="application">
      <Helmet>
        <script id="LA_COLLECT" src="//sdk.51.la/js-sdk-pro.min.js?id=3F0jKPFdPEYMn3mi&ck=3F0jKPFdPEYMn3mi&autoTrack=true&hashMode=true"></script>
      </Helmet>
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



        <ul className={sty.menu}>
          <li title="home"><a href="#" id="id1" className={`${sty.menuButton} ${sty.home} `}>menu</a></li>
          <li className={sty.menuTitle}>Bob Wang</li>
        </ul>

        <ul id='id2' className={sty.menuBar} >
          <li><a href="#" className={sty.menuButton}>Menu</a></li>
          <li><a href="/">照片</a></li>
          <li><a href="/about">关于我</a></li>
          <li><a href="/linkme">联系方式</a></li>
        </ul>





        <Outlet />
        <div style={{ textAlign: 'center', paddingTop: `80px`, paddingBottom: `80px`, background: `#0e232d` }}>
          <div style={{ marginTop: `10px`, color: '#aea194', fontSize: `16px` }}>Made by Bob Wang</div>
          <div style={{ marginTop: `15px`, color: '#6a828b', fontSize: `14px` }}>2023 - ALL RIGHTS RESERVED - BOB WANG</div>
          <div style={{ marginTop: `15px`, color: '#6a828b', fontSize: `14px` }}>
            <a href="http://beian.miit.gov.cn" style={{ marginTop: `15px`, color: '#6a828b', fontSize: `14px` }}>
              粤ICP备2023049153号
            </a>
          </div>
        </div>

      </div></div>
  );
}
