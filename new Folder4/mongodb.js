const {MongoClient} = require("mongodb"); 
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "userprofile"  //*

const insert = async (collectionName, data)=>{
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    return await collection.insertOne(data)

}

module.exports = insert