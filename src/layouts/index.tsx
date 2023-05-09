import sty from './index.css';
import logo from '@/assets/logo.png';
import { Outlet, NavLink } from 'umi';

export default function Layout() {
  return (
    <div className={sty.box}>
      <div className={sty.headerBox}>
        <div className={sty.headerBoxWrap}>
          <div className={sty.headerLeft}>
            <img src={logo} className={sty.logo} />
          </div>
          <div className={sty.headerRight}>
            <NavLink to="/" className={({ isActive }) => (isActive ? `${sty.navLink} ${sty.navLinkActive}` : sty.navLink)}>
              首页
            </NavLink>
            <NavLink to="/photos" className={({ isActive }) => (isActive ? `${sty.navLink} ${sty.navLinkActive}` : sty.navLink)}>
              照片
            </NavLink>
            <NavLink to="/admin/list" className={({ isActive }) => (isActive ? `${sty.navLink} ${sty.navLinkActive}` : sty.navLink)}>
              关于
            </NavLink>
          </div>
        </div>
      </div>
      <div className={sty.fixedPadding}></div>
      <Outlet />
    </div>
  );
}
