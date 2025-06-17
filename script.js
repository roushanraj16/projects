function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("form-status");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    status.textContent = "Please fill all fields.";
    status.style.color = "red";
    return;
  }

  if (!emailPattern.test(email)) {
    status.textContent = "Invalid email format.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Form submitted successfully!";
  status.style.color = "green";

  // Clear form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const task = document.createElement("div");
  task.className = "task";

  const span = document.createElement("span");
  span.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.innerHTML = "❌";
  delBtn.onclick = () => task.remove();

  task.appendChild(span);
  task.appendChild(delBtn);
  taskList.appendChild(task);

  taskInput.value = "";
}
