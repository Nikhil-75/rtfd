const{MongoClient, Collection} = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "userprofile" //*

const insert = async (collectionName, data)=>{
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collections(collectionName);
    return await Collection.insertOne(data)
    return await Collection.find(data)


}



module.exports = insert