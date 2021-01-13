var express = require('express');
var app = express();
console.log("Hello World");
require('dotenv').config();
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  })
  app.get('/json',function(req,res){
     if (process.env.MESSAGE_STYLE === "uppercase"){
      res.json(
        {"message":"HELLO JSON"}
        )
      } else {
        res.json(
          {"message":"Hello json"        }
        )
      }
      })
  app.use(express.static(__dirname +"/public"));
  app.use(__dirname +"/public", express.static)
  
  
  
  app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
  }, 
  (req, res) => {
    res.send({
      time: req.time
    });
  }
  );
  




































 module.exports = app;
