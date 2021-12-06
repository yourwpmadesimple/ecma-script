let display = document.querySelector('#root')
let apiUrl = "//api.open-notify.org/astros.json"

let getSpacePeople = () =>
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      let people = data.people
      console.log(people)
      people.map(astronaut => {
        let astronautName = astronaut.name
        let astronautAirCraft = astronaut.craft
        let content = `
        <p>
        <strong>${astronautName.toUpperCase()}</strong> 
        flew on the <strong>${astronautAirCraft.toUpperCase()}</strong> spacecraft
        </p>
        <hr />`

        display.innerHTML += content
      })
    })


getSpacePeople()