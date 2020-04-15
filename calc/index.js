const express = require("express");
const bodyParser= require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var numa= Number(req.body.numa);
  var numb=Number(req.body.numb);
  var rsult= numa+numb;
res.send("The result is "+ rsult);
});

app.listen(3000,function(){
  console.log("Server is running at port 3000");
});
