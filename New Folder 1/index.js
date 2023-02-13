const dbConnect = require('./model/users');
const express = require('express');
const app = express();

app.use(express.json())

app.post('/', async (req,resp)=> {

   let data = await dbConnect("users", req.body);
   // console.log(req.body
   resp.json(data)
})

app.listen(5000, ()=>console.log("server is up"));