const inputBox = document.querySelector("#inputBox");
const time = document.querySelector("#time");
const addBtn = document.querySelector("#addBtn");
const listBox = document.querySelector("#listBox");
const morning = document.querySelector("#morning");
const afternoon = document.querySelector("#afternoon");
const night = document.querySelector("#night");

addBtn.addEventListener("click", () => {
  const list = document.createElement("li");
  list.innerText = `${inputBox.value}`;
  if (time.value == "Morning") {
    morning.appendChild(list);
  } else if (time.value == "Afternoon") {
    afternoon.appendChild(list);
  } else {
    night.appendChild(list);
  }
  inputBox.value = "";
  inputBox.focus();
});
