export default [
  { path: '/', component: 'index' },
  { path: '/photos', component: 'photo/index', title: '后台管理' },
  { path: '/admin/list', component: 'admin/index', title: '后台管理' },
  { path: '/about', component: 'about' },
  { path: '/linkme', component: 'linkme' },

  // {
  //   path: '/admin/home',
  //   name: '首页',
  //   icon: 'dashboard',
  //   component: './Home',
  // },
  // {
  //   path: '/admin/manage',
  //   name: '文章管理',
  //   icon: 'form',
  //   routes: [
  //     {
  //       path: '/admin/manage/article',
  //       name: '文章管理',
  //       component: './ArticleManage/Article',
  //     },
  //     {
  //       path: '/admin/manage/category',
  //       name: '分类管理',
  //       component: './ArticleManage/Category',
  //     },
  //     {
  //       path: '/admin/manage/tag',
  //       name: '标签管理',
  //       component: './ArticleManage/Tag',
  //     },
  //   ],
  // },
];
