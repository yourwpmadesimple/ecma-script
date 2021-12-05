// let studentList = function(students) {
//   console.log(students)
// }
// studentList(["A", "B", "C"])

let studentList = students => console.log(students)
studentList([ "A", "B", "C" ])

let list = [ "apple", "banna", "cherry" ];
let root = document.querySelector("#root")
let students = `
<ul>
${list.map((item) => {
  return `<li> ${item} </li>`
}).join(" ")}
</ul>
`;
console.log(students)
root.innerHTML = students
