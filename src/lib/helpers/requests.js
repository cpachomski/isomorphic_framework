
export function getRequestNames(req) {
	//defaults
	let name = {
		fname: 'Rick',
		lname: 'Sanchez'
	};

	let nameParts = req.params.name ? req.params.name.split('/') : [];

	name.fname = (nameParts[0] || req.query.fname) || name.fname;
	name.lname = (nameParts[1] || req.query.lname) || name.lname;

	return name;
}