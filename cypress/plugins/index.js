// import * as resolve from 'resolve';
const cucumber = require('cypress-cucumber-preprocessor').default;
const resolve = require('resolve');

const config = (on, config) => {
  on("file:preprocessor", cucumber({
    typescript: resolve.sync("typescript")
  }));
  return config;
}

module.exports = config
