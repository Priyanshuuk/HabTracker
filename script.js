function additem() {
  const newtask = document.getElementById("taskadd").value;
  document.getElementById("task-list").innerHTML +=  `<li><input type="checkbox" onclick="performtask(this.checked, this)" /> ${newtask}</li>`

    document.getElementById("taskadd").value = ""; // Clear the input field after adding the task
}

function performtask(flag , checkbox){
  
            if (flag) {
    checkbox.parentElement.style.textDecoration = "line-through";
  } else {
    checkbox.parentElement.style.textDecoration = "none";
  }
}