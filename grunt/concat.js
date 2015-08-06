'use strict';

module.exports = {
	release: {
      src: ['<%= dirs.source %>/js/*.js'],
      dest: '<%= dirs.release %>/js/built.js',
    },
};