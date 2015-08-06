'use strict';

module.exports = {
  options: {
    banner: "/*!\n <%= pkg.description %>\n @author: <%= pkg.author %>\n @email: <%= pkg.email %>\n @url: <%= pkg.homepage %>\n @version: <%= pkg.version %>\n*/\n"
  },
  main: {
    files: {
        '<%= dirs.release %>/js/built.min.js': ['<%= dirs.release %>/js/built.js']
      }
  }
};