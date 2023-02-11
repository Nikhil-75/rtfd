const dbConnect = require('./mongodb');
const express = require('express');
const app = express();

app.use(express.json())
/*const insertData=async ()=>{
    let data = await dbConnect();
    let result = await data.insert(
        [
            {
             fname:'rohit',
              lname:'sharma', 
              email:'abd123@gmail.com',
              password:'hdbsubd222@'   
            }
        ]
    )
} */

app.post('/', async (req,resp)=> {

   let data = await dbConnect("users", req.body);
   // console.log(req.body
   resp.json(data)
})

app.listen(5000);