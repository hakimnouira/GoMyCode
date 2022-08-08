const express = require('express')
const app = express()
const port = 3363
const cookieParser = require('cookie-parser')
const { createProxyMiddleware } = require('http-proxy-middleware');
const {userrouter}=require("./rooters/userrouter")

const cors = require('cors')
app.use(cookieParser());
app.use(express.json());
// app.use(
//     '/',
//     createProxyMiddleware({
//       target: 'http://localhost:3000',
//       changeOrigin: false,
//     })
//   );
app.use(cors({
    origin :"http://localhost:3000",
    credentials:true,
    optionsSuccessStatus:200
}))

app.use('/',userrouter);



app.listen(port,() => {

console.log(`http://localhost:${port}`," server ya3ml 66 kif ")
})
