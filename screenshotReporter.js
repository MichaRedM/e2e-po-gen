// From https://gist.github.com/jlouros/190d654850f8e2ed7b51ed6267f30400
/* eslint import/no-extraneous-dependencies: ["off"] */
/* eslint func-names: ["off"] */
/* global browser */

/**
 * Jasmine reporter used to take screenshots every time a test fails
 * on your 'protractor.conf.js' (Protractor configuration file)
 * include a reference to this file `const ScreenshotReporter = require('./screenshotReporter.js');`
 * and hook it up inside 'onPrepare()' `jasmine.getEnv().addReporter(new ScreenshotReporter('reports/e2e-failures'));`
 */

const mkdirp = require('mkdirp');
const fs = require('fs');
const path = require('path');
const moment = require('moment');
const ScreenshotReporter = function (dir_) {
  const dir = (dir_ || '/tmp/protractorss/');

  // base function to take a screenshot -- change path as needed
  const screenshot = (testDescription) => {
    // set file name
    const fname = `${moment().format('YYYYDDMMhhmmss')}_e2e_${testDescription.replace(/\s/g, '_')}.png`;
    // make sure the directory exists
    mkdirp(dir);
    // take screenshot
    browser.takeScreenshot().then((png) => {
      // save the taken screenshot
      const stream = fs.createWriteStream(path.join(dir, fname));
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });
  };

  this.specDone = (result) => {
    // for each test failure
    if (result.failedExpectations && result.failedExpectations.length > 0) {
      screenshot(result.fullName, 'end');
    }
  };
};

module.exports = ScreenshotReporter;