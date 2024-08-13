// setupProxy.js
import { RequestHandler, createProxyMiddleware } from 'http-proxy-middleware';

// eslint-disable-next-line no-unused-vars
export default (app: { use: (arg0: string[] | string, arg1: RequestHandler) => void }) => {
  // auth 포함 하위 route에 대해서는 localhost:5000/v1을 domain으로 하여 proxy설정
  app.use(
    '/api/v1',
    createProxyMiddleware({
      target: 'http://localhost:8081/',
      changeOrigin: true,
    }),
  );
};
