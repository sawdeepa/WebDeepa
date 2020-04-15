const express=require("express");
const https= require("https");
const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html")});

app.post("/",function(req,res)
{const query= req.body.cityName;
  const apikey="8985ff6240d4b6c3c1d1eebdf8db2ded";

  const url=  "https://api.openweathermap.org/data/2.5/find?q="+query+"&appid="+apikey+"";

  https.get(url,function(response){
    //console.log(response);
    response.on("data",function(data){
      const weatherData= JSON.parse(data)
      const temp=weatherData.list[0].main.temp
      const humidity=weatherData.list[0].main.humidity
      const icon=weatherData.list[0].weather[0].icon
    //  const imageurl="https://api.openweathermap.org/img/wn/"+icon+"@2x.png";
      //res.write("<img src"+imageurl+ ">");
      res.write("<p>humidity is "+ humidity +"<p>");
      res.write("The temperature is " + temp +"<p>");
      res.send()
    });
  });
//  res.send("Server is up and running")

});
app.listen(3000,function(){
  console.log("Server started at port 3000");
})
