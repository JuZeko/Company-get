 const express = require('express');
 const axios = require('axios');
 const app = express();

 app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

 app.get('/company',(req,res)=>{
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
  var data;
    axios
    .get("https://finnhub.io/api/v1/stock/candle?symbol="
     + req.query.name +"&resolution=1&from=" + req.query.unixFromDate +"&to=" + req.query.unixToDate +  "&token=cbvqih2ad3idf21il3b0")
    .then((result) => {
     data = result.data;
     res.send(data)
    })
    .catch((err) => {
      console.log(err);
    });
 });



 const port =  process.env.PORT || 3000;

 app.listen(3000, ()=> console.log('Listening on port 3000'))