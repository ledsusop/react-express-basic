import template from './template';
import App from './app';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import ContentService from './app/service/contentService'

module.exports = class Routes {

    constructor(logger){
        this.logger = logger;
        this.logger.info('route created');
        this.contentService = new ContentService(this.logger);
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

        var that = this;

        this.contentService.getContent(req.query,function(error,response,body){

            if (!error && response.statusCode == 200) {

                that.logger.info("Content service Request sucessful "+body);

                //you can retrieve values passed by a middleware here and pass to the component
                // or you can also parse the content of the response
                var initialState = {};
                //parametrized css based on the request
                initialState.cssFile = '/assets/bundle.css'

                initialState.headerContent = '<h1>Hello '+(req.user||"Guest")+'</h1>';

                var listContentKeys = req.queryParamNames||[];
                var listContentValues = req.queryParamValues||[];
                var items = [];
                for (let i = 0; i < listContentKeys.length; i++) {
                  items.push('<li>'+listContentKeys[i]+' : '+listContentValues[i]+'</li>');
                }
                initialState.mainContent = '<ul>'+items.join("")+'</ul>';

                const appString = renderToStaticMarkup(<App{...initialState}/>);


                res.send(template({
                    body: appString,
                    title: 'Success',
                    initialState: JSON.stringify(initialState)
                }));


            }else{
                that.logger.error(error);
                res.send(renderToString(template({
                    body: 'error',
                    title: 'Error',
                    initialState: JSON.stringify(initialState)
                })));
            }

        })

    }
}
