/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 *
 * EXAMPLE
 * trimProperties({ name: '  jane  ' }) // returns a new object { name: 'jane' }
 */
function trimProperties(obj) {
  // ✨ implement
  const newObj = {}
  for (key in obj){
    newObj[key] = obj[key].trim()
  }
  return newObj
}
console.log("1> trimProperties:", trimProperties({ foo: '  foo ', bar: 'bar ', baz: ' baz' }))
/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed
 *
 * EXAMPLE
 * trimPropertiesMutation({ name: '  jane  ' }) // returns the object mutated in place { name: 'jane' }
 */
function trimPropertiesMutation(obj) {
  // ✨ implement
  for (key in obj){
    obj[key] = obj[key].trim()
  }
  return obj
}
console.log("2> trimPropertiesMutation:", trimPropertiesMutation({ name: '  jane  ' }))
/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of objects { integer: 1 }
 * @param {object[]} integers - an array of objects
 * @returns {number} - the largest integer
 *
 * EXAMPLE
 * findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]) // returns 3
 */
function findLargestInteger(integers) {
  // ✨ implement
  let largest = 0
  integers.map( integer=>{
    for(key in integer){
      // console.log(integer[key])
      if(largest < integer[key]){
        largest = integer[key]
      }
    }
  })
  return largest
}
console.log("3> findLargestInteger:", findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]))


class Counter {
  /**
   * [Exercise 4A] Counter creates a counter
   * @param {number} initialNumber - the initial state of the count
   */
  constructor(initialNumber) {
    // ✨ initialize whatever properties are needed
    this.number = initialNumber
    this.result = 0
  }

  /**
   * [Exercise 4B] Counter.prototype.countDown counts down to zero
   * @returns {number} - the next count, does not go below zero
   *
   * EXAMPLE
   * const counter = new Counter(3)
   * counter.countDown() // returns 3
   * counter.countDown() // returns 2
   * counter.countDown() // returns 1
   * counter.countDown() // returns 0
   * counter.countDown() // returns 0
   */
  countDown() {
    // ✨ implement
    this.result = this.number
    if(this.result != 0){
      this.number = this.number -1
    }
    return this.result
  }
}
const counter = new Counter(3)
console.log("4> 1-Counter:", counter.countDown())
console.log("4> 2-Counter:", counter.countDown())
console.log("4> 3-Counter:", counter.countDown())
console.log("4> 4-Counter:", counter.countDown())
console.log("4> 5-Counter:", counter.countDown())
console.log("4> 6-Counter:", counter.countDown())
class Seasons {
  /**
   * [Exercise 5A] Seasons creates a seasons object
   */
  constructor() {
    // ✨ initialize whatever properties are needed
    this.currentSeason = ''
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"
   *
   * EXAMPLE
   * const seasons = new Seasons()
   * seasons.next() // returns "summer"
   * seasons.next() // returns "fall"
   * seasons.next() // returns "winter"
   * seasons.next() // returns "spring"
   * seasons.next() // returns "summer"
   */
  next() {
    // ✨ implement
    if(this.currentSeason===''){ return this.currentSeason = 'summer'}
    else if(this.currentSeason==='summer'){return this.currentSeason = 'fall'}
    else if(this.currentSeason==='fall'){return this.currentSeason = 'winter'}
    else if(this.currentSeason==='winter'){return this.currentSeason = 'spring'}
    else if(this.currentSeason==='spring'){return this.currentSeason = 'summer'}
  }
}
const seasons = new Seasons()
console.log("5> 1-Seasons:", seasons.next())
console.log("5> 2-Seasons:", seasons.next())
console.log("5> 3-Seasons:", seasons.next())
console.log("5> 4-Seasons:", seasons.next())
console.log("5> 5-Seasons:", seasons.next())


class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.odometer = 0 // car initilizes with zero miles
    this.tank = tankSize // car initiazes full of gas
    // ✨ initialize whatever other properties are needed    this.name = name
    this.mpg = mpg
    this.candrive = this.tank * this.mpg

  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(100) // returns 100
   * focus.drive(100) // returns 200
   * focus.drive(100) // returns 300
   * focus.drive(200) // returns 500
   * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
   */
  drive(distance) {
    // ✨ implement
    const maxDistance = this.tank * this.mpg
    if(maxDistance >= distance){
      // this.candrive = this.candrive - distance
      this.tank = this.tank - (distance/this.mpg)
      this.odometer = this.odometer + distance
      
    }else if(maxDistance < distance) {
      this.tank = 0
      this.odometer = this.odometer + maxDistance
    }
    return this.odometer 
  }

  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(600) // returns 600
   * focus.drive(1) // returns 600 (no distance driven as tank is empty)
   * focus.refuel(99) // returns 600 (tank only holds 20)
   */
  refuel(gallons) {
    // ✨ implement
    if(this.tank + gallons <= 20){
      this.tank = this.tank + gallons
    }else {
      this.tank = 20
    }
    return this.tank
  }
}

const focus = new Car('focus', 20, 30)
console.log("6> 1-drive car:", focus.drive(600))
console.log("6> refuel car:", focus.refuel(20))
console.log("6> 1-drive car:", focus.drive(100))
console.log("6> 1-drive car:", focus.drive(600))
console.log("6> 1-drive car:", focus.drive(600))
console.log("6> refuel car:", focus.refuel(20))
console.log("6> 1-drive car:", focus.drive(100))

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 */
function isEvenNumberAsync(number) {
  // ✨ implement
  return number%2 ? false : true
}
console.log("7> the number 2 to test for evenness is ", isEvenNumberAsync(2))
console.log("7> the number 3 to test for evenness is ", isEvenNumberAsync(3))
module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
