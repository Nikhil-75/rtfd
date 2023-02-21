const express = require('express');
const app = express();
const dbConnect = require('./mongodb')

app.use(express.json())

/*********************1**************************** */
app.post('/', async (req,resp)=> {


   let data = await dbConnect("userdata", req.body);  
   console.log(data)
   //console.log(req.body) 
   resp.json({
    data:data})
})

/********************************2************************************ */  

app.post('/userdataprofile',async(req,res)=>{
    let data = await dbConnect("userdataprofile",req.body);
    console.log(data)
    // console.log(req.body)
    res.json({data:data})
})

/*********************************3************************************ */

app.get('/userdataprofile',async(req,res)=>{
    let data = await dbConnect("",req.body);
    console.log(data)


   try {
    let arr = [];
    let result = await (await getAllUser("userdataprofile")).find().toArray();
    result.forEach((e) => {
      function calculate_age(dob) {
        var age
        var today = new Date();
        var birthday=Date(req.body.DOB)
          var age = today.getFullYear() - birthday.getFullYear();
          var m = today.getMonth() - birthday.getMonth();
          if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
              age--;
          }
          console.log("getage ", age);
      }
      let today = calculate_age(new Date(element.dob));
      arr.push(today);
    });
    console.log(arr);
    let average = Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
    console.log(average);
   } catch(error) {
    console.log(error);
   }

   res.json({data:data})
});

/*******************************************4************************************** */


app.get('/userdataprofile',async(req,res)=>{
  let data = await dbConnect("",req.body);
  console.log(data)
  let arr = [];
  let age = await (await getAllUser("userdataprofile"))
  const query = { age: { $not: { $gt: 5 }}};
  const cursor = myColl.find(query);
  await cursor.forEach(console.dir);


  res.json({data:data})
})
