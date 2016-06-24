export default class Controller {

	constructor(context) {
		this.context = context;
	}

	index(app, req, res, cb) {
		cb(null);
	}

	toString(cb){
		cb(null, 'success');
	}
}
