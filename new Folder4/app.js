const express = require('express');
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

//************************************************************** */
// average of all user age

app.get('/age', async (req,resp)=> {
    let data = await dbConnect("userprofile",req.body);
console.log(data,
    "==========>")
// console.log(req.body)
//******** *********************************************************************/
getAge = (dob) => {
    this.dob = req.body;
    var today = new Date();
    var birthday = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if(m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

//resp.status(200).json({age: getAge})

resp.json({
    data:data
})
})



app.listen(4000, ()=>console.log("server is up"));