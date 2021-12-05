const vacation = {
  destination: "Chile",
  travelers: 2,
  activity: "skiing",
  cost: "so much"
}

function marketing({ destination, activity }) {
  return `Come to ${destination} and enjoy some ${activity}`
}
console.log(marketing(vacation))
document.querySelector('#root').innerHTML = marketing(vacation)

const sandwich = {
  title: "Reuben",
  price: 7,
  description: "A classic",
  ingredients: [
    "bread",
    "corned beef",
    "dressing",
    "sauerkraut",
    "cheese"
  ]
};
const { title, price } = sandwich;
console.log(title)