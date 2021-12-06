const display = document.querySelector("#root")
const spacePeople = () => {
  return new Promise((resolves, rejects) => {
    const api = "//api.open-notify.org/astros.json";
    const request = new XMLHttpRequest()
    request.open("GET", api)
    request.onload = () => {
      if (request.status === 200) {
        resolves(JSON.parse(request.response));
      } else {
        rejects(Error(request.statusText))
      }
    };
    request.onerror = err => console.log("This is the error message: ", err)
    request.send()
  });
};

// Outputthe results
spacePeople().then((spaceData) => {
  let names = spaceData.people;
  names.map(astronaut => {
    console.log(astronaut)
    let nameList = `
    <p>
    <strong>${astronaut.name.toUpperCase()}</strong> flew on the <strong>${astronaut.craft}</strong> aircraft
    </p>
    <hr />
    `
    display.innerHTML += nameList
  })
})