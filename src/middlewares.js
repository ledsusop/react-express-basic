module.exports = class MiddleWare {
    constructor(logger){
        this.logger = logger;
        this.logger.info('middleware class created');
    }

    inspectParam(req, res, next){

        this.logger.info('inspecting params of request');

        for ( const key of Object.keys(req.query) ) {
             this.logger.info("FOUND query param: "+key+" with value "+req.query[key]);
        }

        next();
    }
}
