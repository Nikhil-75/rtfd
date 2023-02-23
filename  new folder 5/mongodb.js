const {MongoClient} = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const client =  new MongoClient(url);

const dbName ="userdata"

const db = async()=>{
    await client.connect();
    return client.db(dbName);
console.log('database connected')
}

module.exports = db;