const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
//Database Name
const dbName = 'userdata';

async function main(userdata) {
    await client.connect();
    //console.log('Connected successfully to serve');
    const db = client.db(dbName);
    console.log('Connected successfully to serve');
    const collection = db.collection('userdataprofile');
    return db.collection(userdata);
}
//const db=require("./db")


/***************************** */



