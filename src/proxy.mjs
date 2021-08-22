import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';

// Create Express Server
const app = express();

// Cors
app.use(cors());

// Configuration
const PORT = 3333;
const HOST = 'localhost';
const API_SERVICE_URL = 'https://api.deezer.com/';

// Proxy endpoints
app.get(
  '/chart/tracks',
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
  })
);

app.get(
  '/search',
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
  })
);

app.get(
  '/search/track',
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
  })
);

app.get(
  '/search/artist',
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
  })
);

app.get(
  '/search/album',
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
  })
);

app.get(
  '/search/podcast',
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
  })
);

app.get(
  '/search/playlist',
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
  })
);

app.get(
  '/search/radio',
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
  })
);

app.get(
  '/genre',
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
  })
);

app.listen(PORT, HOST, () => {});
