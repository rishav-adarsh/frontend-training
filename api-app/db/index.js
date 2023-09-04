const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require('mongoose');
const uri = process.env.DB_URI;

async function run() {
    const client = await mongoose.connect(uri);
    client.connection.db = "ProductsDB";
    console.log("Successfully connected to DB");
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     const database = client.db("testDB");
//     const data = database.collection("demo");
//     // await data.insertOne({ id: 1, name: "test", email:"test@email.com" });
//     // Send a ping to confirm a successful connection
//     // await client.db("admin").command({ ping: 1 });
//     // console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
module.exports = run;
