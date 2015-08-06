'use strict';

module.exports = {
  release: {
    files: [
      {
        expand: true,
        cwd: '<%= dirs.source %>',
        src: [
          'images/*',
          'index.html'
        ],
        dest: '<%= dirs.release %>',
        filter: 'isFile'
      }
    ]
  }
};