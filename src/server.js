import express from 'express';
import bunyan from 'bunyan';
import Routes from './routes';
import MiddleWare from './middlewares';
import path from 'path';

var server = express();
var log = bunyan.createLogger({name:'react-express-basic'});

var routes = new Routes(log);
var middleWares = new MiddleWare(log);

server.use('/assets', express.static(path.join(__dirname, 'assets')));

server.get('/',routes.Root.bind(routes));
server.get('/api', middleWares.inspectParam.bind(middleWares), routes.Api.bind(routes));
server.get('/view', middleWares.inspectParam.bind(middleWares), routes.View.bind(routes));

server.listen(3000,function(){
    log.info(' APPLICATION STARTED AND LISTENING AT PORT 3000')
})