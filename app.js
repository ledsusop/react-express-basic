var express = require('express');
var bunyan = require('bunyan');

var app = express();
var log = bunyan.createLogger({name:'react-express-basic'});

app.get('/',function(req,res){
    res.send('Nothing here');
})

app.get('/api',function(req,res){
    res.send('APIs here');
})

app.get('/view',function(req,res){
    res.send('LPs here');
})

app.listen(3000,function(){
    log.info(' APPLICATION STARTED AND LISTENING AT PORT 3000')
})