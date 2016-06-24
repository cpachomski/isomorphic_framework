'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getRequestNames = getRequestNames;
function getRequestNames(req) {
	//defaults
	var name = {
		fname: 'Rick',
		lname: 'Sanchez'
	};

	var nameParts = req.params.name ? req.params.name.split('/') : [];

	name.fname = nameParts[0] || req.query.fname || name.fname;
	name.lname = nameParts[1] || req.query.lname || name.lname;

	return name;
}