const inputBox = document.querySelector("#inputBox");
const time = document.querySelector("#time");
const addBtn = document.querySelector("#addBtn");
const morning = document.querySelector("#morning");
const afternoon = document.querySelector("#afternoon");
const night = document.querySelector("#night");
const miniList = document.querySelectorAll(".miniList");

function addList() {
  const list = document.createElement("li");
  const listTime = document.createElement("div");
  listTime.innerText = `${time.value}`;
  list.innerText = `${inputBox.value}`;
  if (time.value == "Morning") {
    if (morning.childElementCount === 0) {
      morning.appendChild(listTime);
    }
    morning.appendChild(list);
  } else if (time.value == "Afternoon") {
    if (afternoon.childElementCount === 0) {
      afternoon.appendChild(listTime);
    }
    afternoon.appendChild(list);
  } else {
    if (night.childElementCount === 0) {
      night.appendChild(listTime);
    }
    night.appendChild(list);
  }
  inputBox.value = "";
  inputBox.focus();
}

addBtn.addEventListener("click", () => {
  if (inputBox.value.trim() == "") {
    return;
  }
  addList();
});
