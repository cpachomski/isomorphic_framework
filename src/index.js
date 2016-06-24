import Hapi from 'hapi';
import nunjucks from 'nunjucks';
import Application from './lib/Application';
import Controller from './lib/Controller';
import * as Helpers from './lib/helpers';

//read templates from dist directory
nunjucks.configure('./dist');

//create server
const server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: 8000
});


const app = new Application({
	'/': Controller
}, {
	server: server
})


app.start();

