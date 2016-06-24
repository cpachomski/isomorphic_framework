'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

getRequestNames = function getRequestNames() {
	//defaults
	var name = {
		fname: 'Rick',
		lname: 'Sanchez'
	};

	var nameParts = req.params.name ? req.params.name.split('/') : [];

	name.fname = nameParts[0] || reqest.query.fname || name.fname;
	name.lname = nameparts[1] || request.query.lname || name.lname;

	return name;
};

exports.default = getRequestNames;