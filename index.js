
const express = require('express');
const path=require("path")
const { createProxyMiddleware } = require('http-proxy-middleware');
const options = {
        target: 'http://182.92.214.148/', 
        changeOrigin: true,           
        ws: true,                     
    };
const app = express();
app.use(express.static(path.join(__dirname, './build/')));
app.use('/api', createProxyMiddleware(options));
app.listen(8000);