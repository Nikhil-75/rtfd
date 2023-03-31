const express = require('express');
const mongoose = require("mongoose");
const routers = require('./routers/routes');
const { DB } = require('./config');


const app = express();
/*app.use((req,res,next)=>{
    req.test = 1;
    next()
})*/
app.use(express.json())
app.use(express.static('public/uploads'))

app.use('/user', routers)

const port = 8082;

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(DB);
    console.log('data is connected')
}
app.use(routers)
app.listen(port, () => {
    console.log(`server is up on port ${port}`)
})