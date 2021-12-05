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

class SemiTruck extends Vehicle{
  constructor(){
    super("Semi Truck", 18)
  }
}

class MailTruck extends Vehicle {
  constructor () {
    super("Mail Truck", 4)
  }
}

let heavyEquipmentSemi = new SemiTruck()
heavyEquipmentSemi.describeYourself()

let mailTruck = new MailTruck()
mailTruck.describeYourself()