const dbConnect =  require('../model/mongodb')

console.log(dbConnect,"data is suss")


exports.getData = async (req,resp)=> {
  
    let data = await dbConnect("userdata", req.body);  
   // console.log(data)
    console.log(req.body) 
    resp.json({
     data:data})
 }



exports.getDob =  async(req,res)=>{
  
    let data = await dbConnect("userdataprofile",req.body);
    console.log(data)
    // console.log(req.body)
    res.json({data:data})
}


exports.getAvg = async(req,res)=> {


  console.log('=============================')
  //const db = await dbConnect("aprofile").find()
  
  const db = await dbConnect();
    const userdata= db.collection('userdataprofile')
     const data = await userdata.find();
  //const userdata= db.collection('userdataprofile')
  //const data = await userdata.find();

  console.log(data,'=================')



    /*const db = await dbConnect();
    const userdata= db.collection('userdataprofile')
     const data = await userdata.find();
  
    console.log(data,'=================')*/

    try{
        const arr = [];
        const result = await userdata.find().toArray();
        result.forEach((element) => {
          function calculate_age(dob) {
            var diff_ms = Date.now() - dob.getTime();
            var age_dt = new Date(diff_ms);
            return Math.abs(age_dt.getUTCFullYear() - 1970);
          }
          let x = calculate_age(new Date(element.dob));
          arr.push(x);
        });
        console.log(arr);
        let average = Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
        console.log(average);
    } catch(error) {
      console.log(error);
    }

    res.json({data:data})
}
    
        /*return res.status(200).json({
          status: "data fetch successfully from userProfile ",
          average_age: average,
        });*/
    
    
    