import Controller from '../lib/Controller';
import * as Helpers from '../lib/helpers';
import nunjucks from 'nunjucks';

//read templates from dist directory
nunjucks.configure('./dist');

export default class HelloController extends Controller {
	toString(cb) {
		nunjucks.render('index.html', Helpers.getRequestNames(this.context), (err, html) => {
			if (err){
				return cb(err, null);
			}

			cb(null, html);
		})
	}
}
