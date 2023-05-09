import { defineConfig } from 'umi';
import routes from './routes';
import defaultSettings from './defaultSettings';

export default defineConfig({
  favicons: ['https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg'],
  plugins: ['@umijs/plugins/dist/antd'],

  routes: routes,
  npmClient: 'pnpm',
  antd: {
    dark: false,
  },
  proxy: {
    '/api': {
      // 接口根路径
      target: 'http://tolyle.com', // 接口服务器域名
      changeOrigin: true, // 开启跨域
      pathRewrite: {
        // 路径重写规则
        '^/api': '', // 将 /api 替换为空字符串
      },
    },
  },
});
