import { countCharacters } from './index'

test('count characters in list', () => {
  expect(countCharacters(['', 'aasd', '123!@#'])).toEqual(10)
  expect(countCharacters([''])).toEqual(0)
  expect(countCharacters(['1234 6789'])).toEqual(9)
  expect(countCharacters([])).toEqual(0)
})
