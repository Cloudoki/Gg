'use strict';

module.exports = {
		jsupdate: {
        options: {
          cwd: '<%= dirs.source %>',
          event: ['changed', 'added']
        },
        files: ['js/*.js'],
        tasks: ['concurrent:test', 'concurrent:release', 'uglify', 'jshint:afterconcat']
  	},
    jsdelete: {
        options: {
          cwd: '<%= dirs.source %>',
          event: ['deleted']
        },
        files: ['js/*.js'],
        tasks: ['clean:js', 'concurrent:test', 'concurrent:release', 'uglify', 'jshint:afterconcat']
    },
    restupdate: {
    	options: {
        cwd: '<%= dirs.source %>',
        event: ['changed', 'added']
      },
        files: ['css/*.scss', '*.html', 'images/*'],
        tasks: ['concurrent:release']
  	},
    restdelete: {
      options: {
        cwd: '<%= dirs.source %>',
        event: ['deleted']
      },
        files: ['*.html', 'images/*'],
        tasks: ['clean:rest', 'concurrent:release']
    }
}