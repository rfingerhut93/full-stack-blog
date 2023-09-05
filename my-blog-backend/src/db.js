import { MongoClient } from "mongodb";

let db;

async function connectToDb(cb){
    const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.mhr2urv.mongodb.net/`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ssl: true, // Enable SSL/TLS
        tlsAllowInvalidHostnames: true,);
    await client.connect();
    db = client.db('react-blog-db');
    cb();
}
export {db, connectToDb};