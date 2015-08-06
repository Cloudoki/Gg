'use strict';

/* Balance processes */
module.exports = {
	release: ['newer:copy:release', 'newer:concat:release', 'newer:sass'],
	test: ['newer:jshint:beforeconcat']
}