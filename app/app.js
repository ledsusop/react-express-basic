var express = require('express');
var bunyan = require('bunyan');
var Routes = require('./routes');
var _ = require('underscore');

var app = express();
var log = bunyan.createLogger({name:'react-express-basic'});

var routes = new Routes(log);
_.bindAll(routes);

app.get('/',routes.Root);
app.get('/api',routes.Api);
app.get('/view',routes.View);

app.listen(3000,function(){
    log.info(' APPLICATION STARTED AND LISTENING AT PORT 3000')
})