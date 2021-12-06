const display = document.querySelector("#root");
const login = "yourwpmadesimple";
const url = `//api.github.com/users/${login}`;

const githubRequest = async () => {
  const response = await fetch(url);
  const json = await response.json();
  const membershipDate = new Date(json.created_at).toDateString('en-US')

  console.log(json)
  let content = `
  <div style="max-width:400px;">
  <img style="float:right; width:150px; height:150px;" src="${json.avatar_url}">
  <h2>Name: ${json.name}</h2>
  <h3>Company: ${json.company}</h3>
  <h4>Member Since: ${membershipDate}</h4>
  </div>
  `
  console.log(content)
  display.innerHTML += content

}
githubRequest()