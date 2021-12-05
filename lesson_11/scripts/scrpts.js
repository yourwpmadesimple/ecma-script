const daytime = {
  breakfast: "Oatmeal",
  luch: "Peanut Butter and Jelly"
}

const nighttime = "Mac and Cheese"

const backpackingMeals = {
  ...daytime, // properties in
  nighttime
}
console.log(backpackingMeals)