var app = require("../app");
var expect = require('chai').expect

describe('app.js', function() {
  describe('helloWorld()', function() {
    it('should output \'Hello World\' to console', function() {
      let consoleOutput = []
      const mockedConsoleLog = output => consoleOutput.push(output)
      console.log = mockedConsoleLog

      app.helloWorld();

      expect(consoleOutput).to.contain('Hello World')
    });
  });
});