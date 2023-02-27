const express = require('express');
const mongoose = require("mongoose");
const routers = require('./routers/routes');
const mongoDB = 'mongodb://127.0.0.1:27017';

const app = express();

app.use(express.json())

app.use('/user',routers)

const port = 8082;

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(mongoDB);
    console.log('data is connected')
}
app.use(routers)





app.listen(port, () => {
    console.log(`server is up on port ${port}`)
})