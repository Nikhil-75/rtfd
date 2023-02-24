const dbConnect = require('./model/mongodb');
const express = require('express');
const app = express();
app.use(express.json())
const port = 8080;
const router = require("./router/routes");

app.use(router)

app.listen(port, () => {
    console.log(`server is up on port ${port}`)
  })



 
















  