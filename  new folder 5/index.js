const express = require('express');
const app = express();

app.use(express.json())
const userCon = require('./controller')

app.use((req,res,next)=>{
    console.log(req.path)
    next()
})


/*** */

const port = 8080;

app.use(express.json())

app.post('/',userCon.getData)

app.post('/userdataprofile',userCon.getDob)
 
app.get('/userdataprofile',userCon.getAvg)

app.listen(port, () => {
    console.log(`server is up on port ${port}`)
  })






  