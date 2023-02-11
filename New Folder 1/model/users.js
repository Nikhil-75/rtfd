const {MongoClient} = require("mongodb"); 
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "users"

const insert = async (collectionName, data)=>{
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    return await collection.insertOne(data)

}
try {
    await collection.insertOne({_id: 1});
    await collection.insertOne({_id: 1});
} catch (error) {
    if(error instanceof MongoServerError) {
        console.log(Error);
    }
    throw error;
    }
}
}
module.exports = insert