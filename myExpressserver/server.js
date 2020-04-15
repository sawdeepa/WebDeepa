const express= require("express");
const app=express();

app.get("/",function(req,res){
  console.log(req);
  res.send("<h1>Helloworld</h1>")
});

app.get("/deepa",function(req,res){

  res.send("This is deepa saw .");
});

app.get("/about",function(req,res){

  res.send("I love working out .");
});

app.get("/contact",function(req,res){

  res.send("Contact me at sawdeepa@gmail.com");
});



app.listen(3000,function(){
  console.log("Server started on port 3000");
});
