const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const display = document.getElementById("output");

// GET Local Text file data
button1.addEventListener("click", getText);

function getText(e) {
  fetch("data.txt")
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
      output.innerHTML = data;
    })
    .catch((err) => {
      console.log(err);
    });

  e.preventDefault();
}

// Get local json file
button2.addEventListener("click", getJson);

function getJson(e) {
  fetch("posts.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = "";

      data.map((post) => {
        output += `<li>${post.title}</li>`;
      });
      display.innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });

  e.preventDefault();
}

// Get API
button3.addEventListener("click", getExt);

function getExt(e) {
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = "";

      data.map((user) => {
        output += `
      <li>${user.login}</li>
      <img src="${user.avatar_url}" alt="">
      `;
      });
      display.innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });

  e.preventDefault();
}
