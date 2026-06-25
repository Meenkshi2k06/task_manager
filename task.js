var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

function addTask() {
  var task = taskInput.value;

  if (task == "") {
    alert("Please enter a task");
    return;
  }

  var li = document.createElement("li");

  var completeButton = document.createElement("button");
  completeButton.innerText = "Complete";

  completeButton.onclick = function () {
    li.style.textDecoration = "line-through";
  };

  var deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";

  deleteButton.onclick = function () {
    taskList.removeChild(li);
  };

  li.innerText = task + " ";

  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  taskList.appendChild(li);

  taskInput.value = "";
}

taskInput.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    addTask();
  }
});
