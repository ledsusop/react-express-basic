import request from 'request';

module.exports = class ContentService {
    constructor(logger){
        this.logger = logger;
        this.logger.info('content service instantiated');
    }

    getContent(params, callback){
        request.get('http://google.com',callback)
    }
}
