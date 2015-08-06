'use strict';

module.exports = {
	release: [
		'<%= dirs.release %>'
	],
	js: [
		'<%= dirs.release %>/js/*.js'
	],
	rest: [
		'<%= dirs.release %>*.html',
		'<%= dirs.release %>/images'
	]
};