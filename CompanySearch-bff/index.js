 const express = require('express');
 const axios = require('axios');
 const app = express();
 const { MongoClient } = require('mongodb');
 const dotenv = require("dotenv")


 dotenv.config({path:'./config.env'})
 
let dbPassword = process.env.DB_PASSWORD;

 app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

async function main(){
  const uri = "mongodb+srv://Juzeko:" + dbPassword + "@cluster0.q8xgdw8.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  await client.connect();

  try{
    await client.connect();
  } catch(e) {
    console.log(e + "You have to send my your ip to add you to list for Mongo atlas ")
  }
  finally{
    await client.close();
  }
}

const uri = "mongodb+srv://Juzeko:" + dbPassword + "@cluster0.q8xgdw8.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);


async function run(userAction) {
  main().catch(console.error)
  try {
    const database = client.db("company_get-user_actions");
    const insertToMongoDb = database.collection("userActions");

    const doc = {
      name: userAction,
      time:new Date(Date.now()).toISOString()
    }

    const result = await insertToMongoDb.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    
  }
}


 app.get('/company',(req,res)=>{ 
//  run("Get company" + req.query.name)  commented because you don't have a password to my mongoDb collection and your ip is not added to the list of allowed Ip's 

  var data;
    axios
    .get("https://finnhub.io/api/v1/stock/profile2?symbol=" + req.query.name + "&token=cbvqih2ad3idf21il3b0")
    .then((result) => {
     data = result.data;
     console.log(data);
     res.send(data)
    })
    .catch((err) => {
      console.log(err);
    });
 });

 app.get('/stock',(req,res)=>{

  // run("Get stocks for " + req.query.name) commented because you don't have a password to my mongoDb collection and your ip is not added to the list of allowed Ip's 
  var data;
    axios
    .get("https://finnhub.io/api/v1/stock/candle?symbol="
     + req.query.name +"&resolution=1&from=" + req.query.unixFromDate +"&to=" + req.query.unixToDate +  "&token=cbvqih2ad3idf21il3b0")
    .then((result) => {
     data = result.data;
     console.log(data); 
     res.send(data)
    })
    .catch((err) => {
      console.log(err);
    });
 });

 const port =  process.env.PORT || 3000;

 app.listen(3000, ()=> console.log('Listening on port 3000'))