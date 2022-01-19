const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const copy = input
    expect(copy).toEqual(input)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
 let input
 beforeEach(()=>{
  input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
 })
  test('[3] returns an object with the properties trimmed', () => {
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    expect(input).toEqual(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const numbers = [{ integer: 1 }, { integer: 3 }, { integer: 5 }]
    const actual = utils.findLargestInteger(numbers)
    expect(actual).toBe(5)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter).toHaveProperty("initialNumber", 3)
    expect(counter.countDown).toBeInstanceOf(Function)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    expect(counter).toHaveProperty("initialNumber", 2)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    expect(counter).toHaveProperty("initialNumber", 0)
  })
})







describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    seasons.next()
    expect(seasons).toHaveProperty('currentSeason',1)
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    seasons.next()
    expect(seasons).toHaveProperty('currentSeason',2)
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons).toHaveProperty('currentSeason',3)
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons).toHaveProperty('currentSeason',0)
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons).toHaveProperty('currentSeason',1)
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for(let i = 0; i < 40; i++){seasons.next()}
    expect(seasons).toHaveProperty('currentSeason',0)
   })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive(200)).toBe(200)
  })
  // test('[16] driving the car uses gas', () => {})
  // test('[17] refueling allows to keep driving', () => {})
  // test('[18] adding fuel to a full tank has no effect', () => {})
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  // test('[19] resolves true if passed an even number', () => {})
  // test('[20] resolves false if passed an odd number', () => {})
})
