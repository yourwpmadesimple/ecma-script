const display = document.querySelector('#root')
const delay = (seconds) =>
  new Promise((resolve) =>
    setTimeout(resolve, seconds * 1000)
  );
delay(1).then(() => display.innerHTML += `<h1>5</h1>`)
delay(2).then(() => display.innerHTML += `<h1>4</h1>`)
delay(3).then(() => display.innerHTML += `<h1>3</h1>`)
delay(4).then(() => display.innerHTML += `<h1>2</h1>`)
delay(5).then(() => display.innerHTML += `<h1>1</h1>`)
delay(6).then(() => display.innerHTML = '<h1>Action</h1>')