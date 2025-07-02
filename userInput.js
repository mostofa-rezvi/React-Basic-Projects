const userName = document.getElementById("userName");
const display = document.getElementById("display");

const inputHandler = e => {
  display.innerHTML = e.target.value;
}

userName.addEventListener("input", inputHandler);