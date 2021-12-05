class Vehicle {
  constructor (description, wheels = 4) {
    this.description = description
    this.wheels = wheels
    console.log(this.description)
  }
  describeYourself() {
    console.log(`I am a ${this.description} with ${this.wheels} wheels`)
  }
}
let describe = new Vehicle('Corvette', 10)
describe.describeYourself()