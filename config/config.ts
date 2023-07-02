import { defineConfig } from 'umi';
import routes from './routes';
import defaultSettings from './defaultSettings';
import CompressionPlugin from 'compression-webpack-plugin';
import webpackPlugin from './plugin';

const production = process.env.NODE_ENV === 'prod';

export default defineConfig({
  ...defaultSettings,
  // 打包时移除 console
  // extraBabelPlugins: [production ? 'transform-remove-console' : ''],
  //extraBabelPlugins: ['transform-remove-console'],
  //chainWebpack: webpackPlugin,

  chainWebpack(config, { env, webpack }) {
    //   //gzip压缩
    config.plugin('compression-webpack-plugin').use(new CompressionPlugin({ algorithm: 'gzip', test: new RegExp('\\.(js|css)$'), threshold: 10240, minRatio: 0.6, deleteOriginalAssets: false }));
  },
  // chainWebpack: ((config: any) => {
  //   config.plugin('compression-webpack-plugin').use(
  //     new CompressionPlugin({
  //       algorithm: 'gzip',
  //       test: new RegExp('\\.(js|css)$'),
  //       threshold: 1024,
  //       minRatio: 0.8,
  //       deleteOriginalAssets: true,
  //     }),
  //   );
  // }) as any,

  // externals: {
  //   react: 'window.React',
  //   'react-dom': 'window.ReactDOM',
  // },
  headScripts: [],

  plugins: ['@umijs/plugins/dist/antd'],
  routes: routes,
  metas: [
    { name: 'keywords', content: '王东杰,旅游照片,高清照片,照片原图,照片exif' },
    { name: 'description', content: '王东杰出生在中国，硕士毕业于英国，具有15年后端程序开发和技术管理经验，热爱科技技术与视觉传达和令人兴奋的故事，总是以新鲜、创新和极简的方式追求理想的结果。' },
  ],
  npmClient: 'pnpm',
  antd: {
    dark: false,
  },

  proxy: {
    '/api': {
      // 接口根路径
      target: 'http://118.126.88.185:8090', // 接口服务器域名
      changeOrigin: true, // 开启跨域
      pathRewrite: {
        // 路径重写规则
        '^/api': '', // 将 /api 替换为空字符串
      },
    },
  },
});
