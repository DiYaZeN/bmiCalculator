const express= require('express');
const bodyparser=require('body-parser');
const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({extended: true}));

app.post('/', function(req, res){
    var weight= Number(req.body.weight);
    var height= Number(req.body.height);
    var bmi= weight/(height*height);
    res.send("Your calulated BMI is "+bmi);
});

app.get('/', function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.listen(port, function(){
    console.log("Connected on"+port);
});