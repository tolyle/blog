import { Select, Input } from 'antd';
import $ from 'jquery';
import { useDebounceFn, useSetState } from 'ahooks';
import { css } from '@emotion/css';
import { querySelectList } from '@/services/item';
import { Helmet, Outlet, FormattedMessage, setLocale, getLocale, useLocation, history, useModel } from 'umi';
import { useEffect } from 'react';
import sty from './index.less';

const menuList = [
  {
    name: 'photos',
    path: '/',
  },
  {
    name: 'about',
    path: '/about',
  },
  {
    name: 'linkme',
    path: '/linkme',
  },
  {
    name: 'publish',
    path: '/photos',
  },
  {
    name: 'management',
    path: '/admin/list',
  },
];

const cls = css`
  .ant-select-selection-item {
    color: #fff !important;
    line-height:40px !important;
  }
  .ant-select-selector {
    //border: 1px solid #14222d !important;
    background-color: #1e3442 !important;
    border-radius:1;
    height:40px !important;
    
    
   }
  
  .ant-input-affix-wrapper{
    height:40px;
    border: none !important;

  }
  .ant-select-arrow {
    color: #fff;
  }
  .ant-input-group-addon {
    border: 1px solid #14222d !important;
   
  }
  .ant-btn.ant-btn-icon-only {
    transform: translateY(-1px);
  }
`;

export default function Layout() {
  const { loadMoreData } = useModel('item');

  const [state, setState] = useSetState({
    selectList: [],
  });

  const { selectList } = state;

  const { pathname } = useLocation();

  // 获取下拉列表
  const getSelectList = async () => {
    const res = await querySelectList({});
    if (res.code === 200) {
      const { data } = res;
      setState({
        selectList: data || [],
      });
    }
  };

  // 防抖搜索
  const { run } = useDebounceFn(
    (k: string) => {
      loadMoreData({ key: k, currentPage: 1, isSearch: true });
    },
    {
      wait: 500,
    },
  );

  useEffect(() => {
    $('#id1').on('click', () => {
      $('#id2').toggleClass(sty.open);
    });

    // setting default language
    const lang = navigator.language;
    if (lang === 'zh-CN') {
      setLocale('zh-CN');
    } else {
      setLocale('en-US');
    }

    // get select list
    getSelectList();
  }, []);

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
                {menuList.map((item) => (
                  <ul className={sty.menuLink}>
                    <li>
                      <a
                        className={pathname === item.path ? sty.hasLine : null}
                        onClick={() => {
                          history.push(item.path);
                        }}
                      >
                        <FormattedMessage id={item.name} />
                      </a>
                    </li>
                  </ul>
                ))}
                <div style={{ marginLeft: 200 }}>
                  {pathname === '/' && (
                    <Input.Search
                      className={cls}
                      placeholder="搜索"
                      style={{ borderRadius: 4, marginRight: 24, width: 520 }}
                      onChange={(e) => {
                        run(e.target.value);
                      }}
                      allowClear
                      addonBefore={
                        <Select
                          defaultValue="all"
                          style={{ width: 130, }}
                          onChange={(v) => {
                            loadMoreData({ tag: v, currentPage: 1, isSearch: true });
                          }}
                        >
                          <Select.Option key="all" value="all">
                            <FormattedMessage id="all" />
                          </Select.Option>
                          {Array.isArray(selectList) &&
                            selectList.map((item: Record<string, any>) => (
                              <Select.Option key={item.tagName} value={item.tagName}>
                                <FormattedMessage id={item.tagName} />
                              </Select.Option>
                            ))}
                        </Select>
                      }
                    />
                  )}
                </div>
              </div>

              <div className={sty.headerRight}>
                {/* 选择语言功能如果不需要，可以自行删除 
                <Select
                  defaultValue={getLocale()}
                  placeholder="选择语言"
                  style={{ width: 100 }}
                  onChange={(v) => {
                    setLocale(v, false);
                  }}
                >
                  <Select.Option key="zh-CN" value="zh-CN">
                    中文
                  </Select.Option>
                  <Select.Option key="en-US" value="en-US">
                    English
                  </Select.Option>
                </Select>
*/}

              </div>
            </div>
          </div>

          <div className={sty.fixedPadding}></div>
        </div>

        <ul className={sty.menu}>
          <li title="home">
            <a href="#" id="id1" className={`${sty.menuButton} ${sty.home} `}>
              menu
            </a>
          </li>
          <li className={sty.menuTitle}>Bob Wang</li>
        </ul>

        <ul id="id2" className={sty.menuBar}>
          <li>
            <a href="#" className={sty.menuButton}>
              Menu
            </a>
          </li>
          <li>
            <a href="/">照片</a>
          </li>
          <li>
            <a href="/about">关于我</a>
          </li>
          <li>
            <a href="/linkme">联系方式</a>
          </li>
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
      </div>
    </div>
  );
}
