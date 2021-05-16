const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require("path");
const db = require ('./config/keys').mongoURI;


const items = require("./routes/item");
const app = express();
app.use(cors());
app.use(bodyParser.json());

//use Routes
app.use('/items',items);

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.resolve(_dirname,"client/build")));
  app.get('*',(req,res) => {
   res.sendFile(path.resolve(__dirname, 'client', 'build' , 'index.html'));
  });
}
//app.get('/items',(req,res)=> res.send("Hello to shopping list"))

const PORT = process.env.PORT || 5000;

//connect to mongodb
mongoose
.connect(db, {useNewUrlParser: true, useUnifiedTopology: true })
.then (()=> console.log("connect to mongoDB"))
.catch((error) => console.log(`an error has occured : ${error}`))


/*app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://localhost:3000");
    next();
});*/
//run server
app.listen (PORT,()=> console.log(`listening to server on port ${PORT}`))
