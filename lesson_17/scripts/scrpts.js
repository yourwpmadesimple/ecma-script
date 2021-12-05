let yell = "woo! ";

let party = yell.repeat(10)
document.querySelector('#root').innerHTML = party

// console.log(party)
let meow = "meow "
let cat = {
  meow(times) {
    console.log(meow.repeat(times))
  },
  purr(times) {
    console.log("prrr ".repeat(times))
  },
  snore(times) {
    console.log("Zzzz... ".repeat(times))
  }
};

cat.meow(4)
cat.purr(3)
cat.snore(5)