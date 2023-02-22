const express = require('express');
const app = express();
const dbConnect = require('./mongodb')
const port = 8080;

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
  const db = await dbConnect();
  const userdataProfile= db.collection('userdataprofile')
  const data = await userdataProfile.insertOne(req.body);

  console.log(data)
  

  try {
    let arr = [];
    const result = await userdataProfile.find().toArray();
    console.log(result);
    result.forEach((e) => {
    function calculate_age(dob) {
    var age
    var today = new Date();
    var birthday=Date(req.body.DOB)
    var age = today.getFullYear(0) - birthday.getFullYear(0);
    var m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
    }
    console.log("getage ", age);
    }
    let today = calculate_age(new Date(e.dob));
    arr.push(today);
    });
    console.log(arr,'============================....................');
    let average = Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
    console.log(average);
    } catch(error) {
    console.log(error);
    }
    res.json({data:data})
    }); 
    
 /********************************4*********************************************** */   

 app.get('/userdataprofile',async(req,res)=>{

  const db = await dbConnect();
  async function userDelete() {
    try {

    const database = client.db("userdata");
    const data = database.collection("userdataprofile");
   console.log(data)
  

    const result = await userdataProfile.find().toArray();


    const dob = await userprofile.deleteOne();

      
      if (result.deletedCount > 25) {
        console.log("Successfully deleted data.");
      } else {
        console.log("result");
      }
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
    res.json({data:data})
    }); 



    
app.listen(port, () => {
  console.log(`server is up on port ${port}`)
})

  

