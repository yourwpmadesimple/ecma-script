
let display = document.querySelector('#root')
let person = {
  name: "Ariana",
  hobbies: [ "bike", "hike", "swim" ],
  printHobbies: function () {
    this.hobbies.map(hobby => {
      let personActivity = `<li>${person.name} likes to ${hobby}</li>`;
      display.innerHTML += personActivity
    })
  }
};

person.printHobbies()

