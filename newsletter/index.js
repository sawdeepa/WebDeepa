const express=require("express");
const request= require("request");
const bodyParser=require("body-parser");
const https=require("https");

const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
res.sendFile(__dirname+"/SignUp.html")});

app.post("/",function(req,res)
{

  var fn=req.body.fname;
  var ln=req.body.lname;
  var email=req.body.email;
  console.log(email);
res.send("Server is up and running"+email)

/*var data =
{members:[{email_address:email,
status:"Subscribed",
merge_fields:{FNAME: firstName,
LNAME: lastName}}]
};
 var jsonData=JSON.stringify(data);
 const url="https://usX.api.mailchimp.com/3.0/lists"+ListIdkey;
 const options={
 method:"POST",
 auth:"deesaw:apikey"
};
const request= https.request(url,options,function(response){
 if(response.statusCode===200)
 {res.sendFile(__dirname + "Success.html")
}else {
  {res.sendFile(__dirname + "Failure.html")}
}
response.on("data",function(data){
 console.log(JSON.parse(data));
})
})
request.write(jsonData);
request.end();

app.post("/failure",function(req,res){
  res.redirect("/");
}) */

});
app.listen(process.env.PORT||3000,function(){
  console.log("Server started at port 3000");
})

//API ID---00009999999999999999
//Listid-8676756757
