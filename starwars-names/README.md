# egghead-kentcdodds-how-to-write-an-open-source-javascript-library
As per Kent C Dodds' Egghead Course: https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-introduction

## Objectives
* Create a simple "micro library" that allows node or the browser to call into the library and retrieve a list of names, or a random selection of names, using a simple public API
* Publish the library to npm
* Create a full test suite using Karma, Mocha and Chai
* Set up continuous integration
* Add ES6 support using Babel
* Integrate WebPack

## So Far
* Create account on npm
* Set some local npm settings (author, email, url, save-exact=true)
* Run npm init to create package.json
* Create index.js and .json file containing names of Star Wars characters
* Add 2 methods to our main module (index.js): "all" and "random". We take our first dependency on another npm module: unique-random-array.
* Add chai and mocha, so we can create a basic test (index.spec.js)
* 