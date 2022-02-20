const inputBox = document.querySelector("#inputBox");
const time = document.querySelector("#time");
const addBtn = document.querySelector("#addBtn");
const morning = document.querySelector("#morning");
const afternoon = document.querySelector("#afternoon");
const night = document.querySelector("#night");
const miniList = document.querySelectorAll(".miniList");
const clearDate = document.querySelector("#clearDate");
const finishBtn = document.querySelector("#finishBtn");

function addList() {
  if (inputBox.value.trim() == "") {
    return;
  }

  const list = document.createElement("li");
  const listTime = document.createElement("li");
  let timeValue = time.value;
  let inputboxValue = inputBox.value;

  listTime.innerText = `${timeValue}`;
  list.innerHTML = `<input type="checkbox" name="listValue" id="${inputboxValue} onclick(checking())">${inputboxValue}`;
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
  list.classList.add("list");
  inputBox.value = "";
  inputBox.focus();

  let listCount = document.querySelectorAll(".list").length;
  if (listCount == 1) {
    const finishBtn = document.createElement("button");
    finishBtn.innerText = "Finish";
    finishBtn.id = "finishBtn";
    clearDate.appendChild(finishBtn);
  }
}
// object.onkeypress = function(){myScript};
// object.addEventListener("keypress", myScript);
inputBox.addEventListener("keypress", (e) => {
  //keycode 가 아니라 keyCode
  if (e.keyCode == 13) {
    addList();
  }
});

addBtn.addEventListener("click", () => {
  addList();
});

function checking() {
  let listChecked = document.getElementById(`${inputBox}`).checked;
  if (listChecked == true) {
    console.log(listChecked);
    list.style.textDecoration = "line-through";
  }
}

finishBtn.addEventListener("click", () => {
  alert("Finish your list?");
});
