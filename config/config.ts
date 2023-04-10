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
});
