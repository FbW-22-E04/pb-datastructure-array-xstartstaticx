const rewire = require("rewire")


beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('1. Array', () => {
    test('array variable should exist', () => {
      const solution = rewire("../solution")
      const myArray = solution.__get__("myArray")
      expect(myArray).toBeDefined()
    })
    test('array variable should be Array', () => {
      const solution = rewire("../solution")
      const myArray = solution.__get__("myArray")
      expect(Array.isArray(myArray)).toBe(true)
    })
    test('array variable should have 5 items', () => {
      const solution = rewire("../solution")
      const myArray = solution.__get__("myArray")
      expect(myArray.length).toBe(5)
    })
    test('array variable is logged', () => {
      const solution = rewire("../solution")
      const myArray = solution.__get__("myArray")
      require('../solution');
      expect(consoleSpy).toHaveBeenCalledWith(myArray);
    })
})