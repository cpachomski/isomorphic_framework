import Hapi from 'hapi';
import nunjucks from 'nunjucks';

import * as Helpers from './helpers';

//read templates from dist directory
nunjucks.configure('./dist');

//create server
const server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: 8000
});

//add test route
server.route({
	method: 'GET',
	path: '/hello/{name*}',
	handler: (req, res) => {
		nunjucks.render('index.html', Helpers.getRequestNames(req), (err, html) => {
			res(html);
		});
	}
});


server.start();

