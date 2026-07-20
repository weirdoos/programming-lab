

const card = document.querySelector(".card")

console.log(card.dataset.topic);
console.log(card.hasAttribute("data-state"));



console.log(card.dataset.state);
console.log(card.hasAttribute("data-state"));

const button = document.querySelector("#change-button") 

card.addEventListener("click", (event) => {
  console.log("Card target:", event.target);
  console.log("Card currentTarget:", event.currentTarget);
});

button.addEventListener("click", (event) => {

    console.log("Type:", event.type);
    console.log("Target:", event.target);
    console.log("Current target:", event.currentTarget);


    card.classList.toggle("highlighted")
    console.log(card.classList.contains("highlighted"))

    const text = document.createElement('p');
    text.textContent = 'card class was changed'
    text.classList.add('status-message')
    card.append(text)
});

const controls = document.querySelector("#controls");

controls.addEventListener("click", (event) => {
  console.log("Target:", event.target);
  console.log("Current target:", event.currentTarget);
});

inventory.addEventListener("click", (event) => {
  if (!event.target.matches("button")) {
    return;
  }

  console.log(event.target.dataset.item);
});


const nameForm = document.querySelector("#name-form");
const nameInput = document.querySelector("#name-input");
const formOutput = document.querySelector("#form-output");

nameForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();

  if (name === "") {
    formOutput.textContent = "Enter your name.";
    return;
  }

  formOutput.textContent = `Hello, ${name}!`;
  formOutput.innerHTML = `<strong>Hello! ${name} <strong>`;
  nameInput.value = "";
});

nameInput.addEventListener("input", (event) => {
  console.log("input:", event.target.value);
});

nameInput.addEventListener("change", (event) => {
  console.log("change:", event.target.value);
});

nameInput.addEventListener("keydown", (event) => {
  console.log("keydown:", event.key);
});

