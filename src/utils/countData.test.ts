import { countCharacters } from './index'

describe('Тестирование методов', () => {
  test('Счетчик символов в массиве строк', () => {
    expect(countCharacters(['', 'aasd', '123!@#'])).toEqual(10)
    expect(countCharacters([''])).toEqual(0)
    expect(countCharacters(['1234 6789'])).toEqual(9)
    expect(countCharacters([])).toEqual(0)
  })
})
