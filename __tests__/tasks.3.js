const rewire = require("rewire")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('3. Array Item Reassignment', () => {
    test('4th element should have new value', () => {
      const solution = rewire("../solution")
      const myArray = solution.__get__("myArray")
      expect(myArray[3]).toBe("fourth element")
    })
    test('array variable is logged', () => {
      const solution = rewire("../solution")
      const myArray = solution.__get__("myArray")
      require('../solution');
      expect(consoleSpy).toHaveBeenCalledWith(myArray);
    })
})