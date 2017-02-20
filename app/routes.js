module.exports = class Routes {
    constructor(logger){
        this.logger = logger;
        this.logger.info('route created');
    }

    Root(req, res, next){
        this.logger.info('Root route with request '+req);
        res.send('Root here');
    }

    Api(req, res, next){
        this.logger.info('Api Route with request '+req);
        res.send('Api here');
    }

    View(req, res, next){
        this.logger.info('View Route with request '+req);
        res.send('View here');
    }
}
