const inputBox = document.querySelector("#inputBox");
const time = document.querySelector("#time");
const addBtn = document.querySelector("#addBtn");
const morning = document.querySelector("#morning");
const afternoon = document.querySelector("#afternoon");
const night = document.querySelector("#night");
const miniList = document.querySelectorAll(".miniList");

function addList() {
  const list = document.createElement("li");
  const listTime = document.createElement("li");
  let timeValue = time.value;
  let inputboxValue = inputBox.value;

  listTime.innerText = `${timeValue}`;
  list.innerText = `${inputboxValue}`;
  // 왜,, html상에서는 Morning인데 console하면 morning으로 뜰까?
  if (timeValue == "morning") {
    if (morning.childElementCount === 0) {
      morning.appendChild(listTime);
    }
    morning.appendChild(list);
  } else if (timeValue == "afternoon") {
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
  listTime.classList.add("suvtitle");
  inputBox.value = "";
  inputBox.focus();
}

addBtn.addEventListener("click", () => {
  if (inputBox.value.trim() == "") {
    return;
  }
  addList();
});
