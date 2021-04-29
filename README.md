# Rollup Build Tool

A simple, no frills build tool for creating single-file JS bundles for AB test platforms.

## Features
- **Minifies and bundles code**
- **Allows ES6 imports**
- **Continuous "watch" mode**
- **Supports latest ES6 syntax**
- **Extensible with es2015+ Babel plugins**
- **Can handle large experiment code that would otherwise break in Optimizely**


## Installation

Install rollup globally with `npm install rollup --global`

Install all the package.json dependencies with: `npm install`

After installing the packages, run this command in the project directory to start the build:
`npm start`

Rollup will run and bundle code into the `dist` directory. This bundle can be copied and
pasted into the Optimizely custom code editor for each variation.

The rollup configuration file is set up to watch for any code changes and rebuild the
files, however this can be disabled by removing `--watch` from the `package.json` `start`
script. 

Babel plugins can be added to the plugins array. See the list of available ES6 plugins
[here](https://babeljs.io/docs/en/plugins).

Commonly used utilities are included as its own package
[here](https://www.npmjs.com/package/clearhead-utilities). 

## Plugins
The following is a list of plugins this tool uses:

  - `rollup-plugin-babel` - Babel transpiler
  - `rollup-plugin-html` - HTML imports
  - `rollup-plugin-delete`- Cleans dist folder
  - `@rollup/plugin-alias` - Allows `@` path alias
  - `rollup-plugin-styles` - SCSS use
  - `rollup-plugin-banner` - Adds `jshint` comments to build
  - `rollup-plugin-commonjs` - CommonJS syntax
  - `rollup-plugin-terser` - Minification
  - `rollup-plugin-node-resolve` - Locates modules w/  `require`