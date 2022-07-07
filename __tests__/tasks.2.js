const rewire = require("rewire")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('2. Array Item', () => {
    test('thirdElement variable should exist', () => {
      const solution = rewire("../solution")
      const thirdElement = solution.__get__("thirdElement")
      expect(thirdElement).toBeDefined()
    })
    test('thirdElement variable should have value of third array item', () => {
      const solution = rewire("../solution")
      const myArray = solution.__get__("myArray")
      const thirdElement = solution.__get__("thirdElement")
      expect(thirdElement).toBe(myArray[2])
    })
    test('thirdElement variable is logged', () => {
      const solution = rewire("../solution")
      const thirdElement = solution.__get__("thirdElement")
      require('../solution');
      expect(consoleSpy).toHaveBeenCalledWith(thirdElement);
    })
})