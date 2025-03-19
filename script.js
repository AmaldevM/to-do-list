*const addBtn = document.getElementById("add-btn");
let itemList = document.querySelector(".todo-items-list");
let itemInput = document.getElementById("todo-input");

let activityArray = [];

const buildUl = () => {
  itemList.textContent = "";

  activityArray.forEach((activities, index) => {
    let list = document.createElement("li");

    let span = document.createElement("span");
    span.innerHTML = activities;

    // Create Edit Button
    let editBtn = document.createElement("i");
    editBtn.classList.add("fas", "fa-edit"); // FontAwesome Edit Icon
    editBtn.style.cssText =
      "cursor: pointer; font-size: 18px; color: black; margin-right: 10px ; padding-left: 500px";

    // Create Delete Button
    let deleteBtn = document.createElement("i");
    deleteBtn.classList.add("fas", "fa-trash"); // FontAwesome Trash Icon
    deleteBtn.style.cssText = "cursor: pointer; font-size: 18px; color: black; padding:0px 10px";

    // Edit functionality
    editBtn.addEventListener("click", () => {
      let updatedValue = prompt("Edit your activity:", activities);
      if (updatedValue !== null && updatedValue.trim() !== "") {
        activityArray[index] = updatedValue.trim();
        buildUl(); 
      }
    });
    //DELETE Functionality
    deleteBtn.addEventListener("click", () => {
    activityArray.splice(index,1);
    buildUl();
   })

    // Append elements to the list item
    list.append(span, editBtn, deleteBtn);
    itemList.appendChild(list);
  });

  itemInput.value = "";
  itemInput.focus();
};

// Function to add item
const addItem = () => {
  let inputValue = itemInput.value.trim();

  if (!inputValue) {
    alert("Oops! Enter an activity.");
  } else {
    activityArray.push(inputValue);
    buildUl();
  }
};

// Event listener for button click
addBtn.addEventListener("click", addItem);

// Event listener for Enter key press
itemInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addItem();
  }
});
