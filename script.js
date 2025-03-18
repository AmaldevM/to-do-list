const addBtn = document.getElementById("add-btn");
let itemList = document.querySelector(".todo-items-list");
let itemInput = document.getElementById("todo-input");

let activityArray = [];

const buildUl = () => {
  itemList.textContent = ""; // Clear existing list items
  activityArray.forEach((activities) => {
    let list = document.createElement("li");
    list.style.cssText = "animation-name: slideIn";

    let span = document.createElement("span");
    span.innerHTML = activities;

    // Append only the text (No buttons)
    list.append(span);
    itemList.appendChild(list);
  });

  itemInput.value = ""; // Clear input field after adding
  itemInput.focus(); // Keep focus on input
};

// Add new activity
addBtn.addEventListener("click", () => {
  let inputValue = itemInput.value.trim();

  if (!inputValue) {
    alert("Oops! Enter an activity.");
  } else {
    activityArray.push(inputValue); 
    buildUl(); 
  }
});
