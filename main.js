const inputBox = document.querySelector("#inputBox");
const time = document.querySelector("#time");
const addBtn = document.querySelector("#addBtn");
const morning = document.querySelector("#morning");
const afternoon = document.querySelector("#afternoon");
const night = document.querySelector("#night");
const miniList = document.querySelectorAll(".miniList");
const clearDate = document.querySelector("#clearDate");
let finishBtn = document.getElementById("finishBtn");

function addList() {
  if (inputBox.value.trim() == "") {
    return;
  }

  const list = document.createElement("li");
  const listTime = document.createElement("li");

  const chkbox = document.createElement("input");
  chkbox.type = "checkbox";
  chkbox.classList("chkbox");

  let timeValue = time.value;
  let inputboxValue = inputBox.value;

  listTime.innerText = `${timeValue}`;
  list.innerHTML = `${inputboxValue} `;

  let timeList = document.getElementById(`${timeValue}`);
  if (timeList.childElementCount == 0) {
    timeList.appendChild(listTime);
  }
  timeList.appendChild(chkbox);
  timeList.appendChild(list);

  listTime.classList.add("suvtitle");
  list.classList.add("list");
  inputBox.value = "";
  inputBox.focus();

  let listCount = document.querySelectorAll(".list").length;
  if (listCount == 1) {
    finishBtn.style.display = "block";
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

//왜 이건 안되지
// addBtn.addEventListener("click",addList());

addBtn.addEventListener("click", () => {
  addList();
});

document.getElementById(`${inputboxValue}`).addEventListener("click", () => {
  checking();
});

function checking() {
  if (document.getElementById(`${inputboxValue}`).checked == true) {
    list.style.textDecoration = "line-through";
  } else {
    return;
  }
}

finishBtn.addEventListener("click", () => {
  console.log("work");
});
