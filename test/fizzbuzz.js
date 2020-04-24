const fizzbuzz = require('../src/fizzbuzz')

const MAPPING = {
  3: 'fizz',
  5: 'buzz',
  7: 'hello',
  11: 'goodbye'
}

describe('fizz', () => {
  test('buzz', () => {
    const msgs = fizzbuzz(21, MAPPING)
    expect(msgs[0]).toBe(1)
    expect(msgs[2]).toBe(MAPPING[3])
    expect(msgs[4]).toBe(MAPPING[5])
    expect(msgs[6]).toBe(MAPPING[7])
    expect(msgs[10]).toBe(MAPPING[11])
    expect(msgs[14]).toBe(`${MAPPING[3]}${MAPPING[5]}`)
    expect(msgs[15]).toBe(16)
    expect(msgs[20]).toBe(`${MAPPING[3]}${MAPPING[7]}`)
  })

  test('all factors', () => {
    expect(fizzbuzz(110, MAPPING)).toMatchSnapshot()
  })
})
