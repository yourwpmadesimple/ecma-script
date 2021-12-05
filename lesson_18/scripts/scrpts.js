function add(x = 5, y = 10) {
  console.log(x + y)
}
add()

function haveFun(activityName = 'Skiing', time = 8) {
  console.log(`Today I will go ${activityName} for ${time} hours`)
}
haveFun('Biking', 12)
haveFun('Boating')