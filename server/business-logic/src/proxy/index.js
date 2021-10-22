import { Router } from 'express';
import {
  createProxyMiddleware,
  responseInterceptor,
} from 'http-proxy-middleware';

const router = Router();

router.use(
  createProxyMiddleware({
    target: 'http://business-logic:4000/graphql',
    // target: 'https://d32sldu7btg2uy.cloudfront.net/graphql',
    pathRewrite: { '^/proxy': '' },
    changeOrigin: true, // for vhosted sites

    selfHandleResponse: true, // res.end() will be called internally by responseInterceptor()

    onProxyRes: responseInterceptor(
      async (responseBuffer, proxyRes, req, res) => {
        // log original request and proxied request info
        const exchange = `[DEBUG] ${req.method} ${req.path} -> ${proxyRes.req.protocol}//${proxyRes.req.host}${proxyRes.req.path} [${proxyRes.statusCode}]`;
        console.log(exchange); // [DEBUG] GET / -> http://www.example.com [200]

        // log complete response
        const response = responseBuffer.toString('utf8');
        console.log(response); // log response body
        // const responsehex = responseBuffer.toString('hex');
        // console.log(responsehex); // log response body

        return responseBuffer;
      }
    ),
  })
);

export default router;
