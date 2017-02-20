import template from './template';
import App from './app';
import React from 'react';
import { renderToString } from 'react-dom/server';

module.exports = class Routes {

    constructor(logger){
        this.logger = logger;
        this.logger.info('route created');
    }

    Root(req, res, next){
        this.logger.info('Root route called');
        res.send('Root here');
    }

    Api(req, res, next){
        this.logger.info('Api Route called');
        res.send('Api here');
    }

    View(req, res, next){
        this.logger.info('View Route with called');
        const initialState = { };
        const appString = renderToString(<App{...initialState}/>);

        res.send(template({
            body: appString,
            title: 'Hello World from the server',
            initialState: JSON.stringify(initialState)
        }));

    }
}
