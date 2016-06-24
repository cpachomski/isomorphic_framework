import Hapi from 'hapi';
import nunjucks from 'nunjucks';
import Application from './lib/Application';
import HelloController from './controllers/HelloController';

//create server
const server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: 8000
});


const app = new Application({
	'/hello/{name*}': HelloController
}, {
	server: server
})


app.start();

