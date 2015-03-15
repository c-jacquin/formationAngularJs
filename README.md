##Requirement

- install NodeJS
- open a terminal and type:

sudo npm install -g bower

sudo npm install-g gulp


remove the sudo if you are on windows

you can now download the or checkout the repository via git

Here's what you get out of the box :

  - Gulp
  - Karma
  - Protractor
  - Sample code demonstrating how to test AngularJS components and apps
  - Sample directives
  - Sample Services
  - JSHint
  - Live Reload (using browser plugin)
  - UI Router with nested views
  - ngMaterial
  - No need to add a script tag in your index.html for every JavaScript file you write

##setup

- open a terminal go in the directory of the project and type:
npm install
bower install

to start work type gulp in the terminal and let's go, your code will be linted, build and tested at each modification.
 
##Useful gulp tasks

  - dev (default) - runs dev server, watches for changes, and tdd (livereload)
  - tdd - karma with watchers
  - buidDist - concat minify and move source file to dist directory
  - serveDist - run a static server wich serve the dist files