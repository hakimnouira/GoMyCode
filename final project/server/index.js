const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const port=3363
const {userrouter}=require("./rooters/userrouter")
const cors = require('cors')
app.use(cookieParser());
app.use(express.json());

app.use(cors({
    origin :"http://localhost:3000",
    credentials:true,
    optionsSuccessStatus:200
}))

app.use('/',userrouter);

app.listen(port,() => {

console.log(`http://localhost:${port}`," server ye5dem ")
})
