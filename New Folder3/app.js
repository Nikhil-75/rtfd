**************************const express = require('express');
const app = express();
const dbConnect = require('./mongodb')

app.use(express.json())

app.post('/', async (req,resp)=> {

    //user datab
   let data = await dbConnect("userprofile", req.body);   // users
   console.log(data)
   console.log(req.body) //** 
   resp.json({
    data:data})
})

  //userprofile data
app.post('/userprofile', async (req,resp)=> {
    let data = await dbConnect("userprofile",req.body);  //*
console.log(data)
console.log(req.body)  //** 
resp.json({
    data:data
})

}) 



app.listen(4000, ()=>console.log("server is up"));