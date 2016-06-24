import Hapi from 'hapi';
import nunjucks from 'nunjucks';
import Application from './lib/Application';
import HelloController from './controllers/HelloController';

//read templates from dist directory
nunjucks.configure('./dist');


//create server
const server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: 8000
});


const app = new Application({
	'/hello/{name*}': HelloController
}, {
	server: server,
	document: function (app, controller, req, res, body, cb) {
		nunjucks.render('./index.html', { body: body }, (err, html) => {
			if(err) {
				return cb(err, null);
			}

			cb(null, html);
		})
	}
})


app.start();

