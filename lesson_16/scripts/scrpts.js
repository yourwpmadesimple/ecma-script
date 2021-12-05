let attendance = {
  _list: [],
  set addName(name) {
    this._list.push(name)
  },
  get list() {
    return this._list.join(" | ")
  }
};

attendance.addName = [ ("Wayne Hatter"), ("Joanne Wally") ]
console.log(attendance.list)

class Hike {
  constructor (distance, pace) {
    this.distance = distance
    this.pace = pace
  }
  get lengthInHours() {
    return `Traveling ${this.distance} miles at ${this.pace} miles per hour will take you ${this.calcLength().toFixed(2)} hours`
  }
  calcLength() {
    return this.distance / this.pace
  }
}

const mtTallac = new Hike(10, 45)
console.log(mtTallac.lengthInHours)