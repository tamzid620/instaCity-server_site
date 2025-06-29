const express = require('express')
require('dotenv').config();
const app = express()
const port = process.env.PORT ;


const DB_USERNAME = process.env.DB_USERNAME ;
const DB_PASSWORD = process.env.DB_PASSWORD ;
const DB_NAME = process.env.DB_NAME ;

const { MongoClient, ServerApiVersion } = require('mongodb');

// const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.qtemx5j.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;
const uri = `mongodb+srv://LoyalMeal:${DB_PASSWORD}@cluster0.qe0e7ik.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0` ;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

//  Basic System Run Portal --------------------------------------------------------
app.get('/', (req, res) => {
  res.send('Loyality system connected !')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
