// let studentList = function(students) {
//   console.log(students)
// }
// studentList(["A", "B", "C"])

let studentList = students => console.log(students)
studentList([ "A", "B", "C" ])

let list = [ "apple", "banna", "cherry" ];
let students = `
<ul>
${list.map((item) => {
  return `<li> ${item} </li>`
})}
</ul>
`;
console.log(students)
