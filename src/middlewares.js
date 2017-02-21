module.exports = class MiddleWare {
    constructor(logger){
        this.logger = logger;
        this.logger.info('middleware class created');
    }

    inspectParam(req, res, next){

        this.logger.info('inspecting params of request');

        var queryParamsNames = [];
        var queryParamValues = [];
        var userName = 'Guest'

        for ( const key of Object.keys(req.query) ) {
             queryParamsNames.push(key);
             queryParamValues.push(req.query[key]);

             if (key == "userName"){
                 userName = req.query[key];
             }

             this.logger.info("FOUND query param: "+key+" with value "+req.query[key]);
        }

        req.queryParamNames = queryParamsNames;
        req.queryParamValues = queryParamValues;
        req.user = userName;

        next();
    }
}
