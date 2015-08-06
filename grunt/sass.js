'use strict';

module.exports = {
    dist: {                            
      options: {                       
        style: 'expanded'
      },
      files: {                         
        '<%= dirs.release %>/css/main.css': '<%= dirs.source %>/css/main.scss',
      }
    }
};