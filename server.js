//express web server
const express = require('express');
const dotenv = require("dotenv")

const app = express();
dotenv.config()

app.get('/', (req, res) => {
  res.send("Now?");
});

const port = 3000;
 
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});

////////////////////////////////////////////////////

// const { MongoClient } = require("mongodb");

// // Replace the uri string with your connection string.
// const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster-cse341.mld9ozr.mongodb.net/`;
// const client = new MongoClient(uri);

// async function run() {
//   try {
//     const database = client.db('sample_mflix');
//     const movies = database.collection('movies');

//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await movies.findOne(query);

//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);