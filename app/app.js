var express = require('express');
var bunyan = require('bunyan');
var Routes = require('./routes');
var MiddleWare = require('./middlewares');

var app = express();
var log = bunyan.createLogger({name:'react-express-basic'});

var routes = new Routes(log);
var middleWares = new MiddleWare(log);

app.get('/',routes.Root.bind(routes));
app.get('/api', middleWares.inspectParam.bind(middleWares), routes.Api.bind(routes));
app.get('/view', middleWares.inspectParam.bind(middleWares), routes.View.bind(routes));

app.listen(3000,function(){
    log.info(' APPLICATION STARTED AND LISTENING AT PORT 3000')
})