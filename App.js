var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var path = require('path');

var arr = [];
var i = 0;
app.use(bodyParser());
app.use(express.json());


app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+"/Site/index.html"));
})

app.post('/postScore', function(req,res){
    //res.sendFile(path.join(__dirname+"/Site/highScore.html"))
    arr[i] = req.body;
    res.json({
        arr
    });
    
    i +=1;
})
app.listen(5000, function(){

    console.log("Server running, port 5000");

});