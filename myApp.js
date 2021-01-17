var express = require('express');
var app = express();
var bodyParser = require('body-parser')
console.log("Hello World");
require('dotenv').config();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

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

  app.get('/:word/echo', (req,res) => {
      res.json({ echo: req.params.word})
  });

  app.get('/name', (req,res)=> {
      res.json({name: req.query.first + " " + req.query.last})
  })

  app.post('/name',(req,res)=> {
    res.json({name: req.body.first + " " + req.body.last})
 })




































 module.exports = app;
