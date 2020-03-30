import express, { json } from 'express';

import './database/ConnectionDB';

import routes from './routes';

class Server {
	constructor() {
		this.server = express();

		this.middlewares();
		this.routes();
		this.upServer();
	}

	upServer() {
		return this.server.listen(3333);
	}

	middlewares() {
		return this.server.use(json());
	}

	routes() {
		return this.server.use(routes);
	}
}

export default new Server().server;
