import Hapi from 'hapi';
import nunjucks from 'nunjucks';

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
	path: '/hello/{fname}/{lname}',
	handler: (req, res) => {
		nunjucks.render('index.html', {
			fname: req.params.fname,
			lname: req.params.lname
		}, (err, html) => {
			res(html);
		});
	}
});


server.start();

