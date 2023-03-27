import sty from './index.module.css';
import logo from '@/assets/logo.png';
import { Outlet, NavLink } from 'umi';

export default function Layout() {
  return (
    <div className={sty.box}>
      <div className={sty.headerBox}>
        <div className={sty.headerLeft}>
          <img src={logo} className={sty.logo} />
        </div>
        <div className={sty.headerRight}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${sty.navLink} ${sty.navLinkActive}` : sty.navLink
            }
          >
            首页
          </NavLink>
          <NavLink
            to="/test"
            className={({ isActive }) =>
              isActive ? `${sty.navLink} ${sty.navLinkActive}` : sty.navLink
            }
          >
            测试
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${sty.navLink} ${sty.navLinkActive}` : sty.navLink
            }
          >
            关于
          </NavLink>
        </div>
      </div>
      <div className={sty.fixedPadding}></div>
      <Outlet />
    </div>
  );
}
