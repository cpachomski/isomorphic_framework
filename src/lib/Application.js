export default class Application {

	constructor (routes, options) {
		this.server = options.server,
		this.document = options.document,
		this.registerRoutes(routes);
	}

	registerRoutes(routes) {
		for (let path in routes) {
			this.addRoute(path, routes[path]);
		}
	}

	addRoute(path, Controller) {
		this.server.route({
			path: path,
			method: 'GET',
			handler: (req, res) => {
				const controller = new Controller({
					query: req.query,
					params: req.params
				});

				controller.index(this, req, res, (err) => {
					if(err) {
						return res(err);
					}

					controller.toString((err, html) => {
						if(err) {
							return res(err);
						}

						this.document(this, controller, req, res, html, function(err, html) {
							if(err) {
								return res(err);
							}

							res(html);
						});
					});
				});
			}
		});
	}

	start() {
		this.server.start();
	}
}