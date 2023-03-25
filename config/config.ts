import { defineConfig } from "umi";
import routes from '../routes'

export default defineConfig({
  plugins: ['@umijs/plugins/dist/antd'],
  
  routes: routes,
  npmClient: 'pnpm',
  antd:{
    dark:false
  }
});
