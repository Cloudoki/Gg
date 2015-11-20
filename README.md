# Grunt-donderstarter
Base for static front-end development using grunt, sass and bower

## Features
- Grunt;
- Bower to manage dependencies;
- CSS pre-compile through SASS;
- JShint;
- SASS and JS minification and concatenation;

## Requirements
- [nodejs](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Install
Install the dependencies with `npm install` or `sudo npm install`. Then just run `grunt`.

## Grunt tasks
- **grunt** will build the files inside the /dist folder and perform a watch. You are ready to start developing
- **grunt build** will build the files inside the /dist folder. No watcher.
- **grunt clean** will clean the dist folder
- **grunt release** will do the same build but with a js uglify in the end