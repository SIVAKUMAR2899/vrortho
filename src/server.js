const express = require("express");
const cors = require("cors");
const morgan =require("morgan");
const router = require('./routes/routes')
const bodyParser =require("body-parser");
const serverless = require("serverless-http")

const config = require('../vrortho/models/index');

const PORT = process.env.PORT || 5000

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("gamer");
});

app.use('/.netlify/functions/api', router)

app.listen(PORT,()=>{
    console.log('server is running');
});

module.exports = app;
module.exports.handler = serverless(app);