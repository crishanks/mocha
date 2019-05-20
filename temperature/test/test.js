const convert = require('../app.js');
const assert = require('assert');

describe('Temperature Conversion', () => {
  describe('celsiusToFahrenheit', () => {
    it('should convert -40 celsius to -40 fahrenheit', () => {
      assert.equal(-40, convert.celsiusToFahrenheit(-40))
    });
    it('should convert 0 celsius to 32 fahrenheit', () => {
      assert.equal(32, convert.celsiusToFahrenheit(0));
    });
    it('should return undefined if no temperature is input', () => {
      assert.equal(undefined, convert.celsiusToFahrenheit(''));
    });
  });
  // describe('fahrenheitToCelsius', () => {
  //   it()
  // })
  
})