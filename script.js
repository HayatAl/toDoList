const input = document.getElementById("input-box");
const list = document.getElementById("list-contineer");
const button_add = document.getElementById("input-button");

const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

button_add.addEventListener("click", () => {
  console.log("work");
  if (input.value.trim() === "") {
    alert("أرجو كتابة المهمه ");
    return;
  } else {
    const li = document.createElement("li");
    li.innerHTML = `
    <label>
     
      <span>${input.value.trim()}</span>
       <input  type="checkbox">
    </label>
    <span class="edit-btn">Edit</span>
    <span class="delete-btn">Delete</span>
    `;
    list.appendChild(li);
    input.value = "";
    updateCounters();

    const checkbox = li.querySelector("input");
    const editBtn = li.querySelector(".edit-btn");
    const taskSpan = li.querySelector("span");
    const deleteBtn = li.querySelector(".delete-btn");
    checkbox.addEventListener("click", () => {
      console.log("checked");
      li.classList.toggle("completed", checkbox.checked);
      updateCounters();
    });
    editBtn.addEventListener("click", () => {
      const updet = prompt("حدث المهمه ", taskSpan.textContent);
      if (updet !== null) {
        taskSpan.textContent = updet;
        list.classList.remove("completed");
        checkbox.checked = false;
        updateCounters();
      }
    });

    deleteBtn.addEventListener("click", () => {
      li.remove();
      updateCounters();
    });
  }
});
function updateCounters() {
  const completedTasks = document.querySelectorAll(".completed").length;
  const uncompleted_counter =
    document.querySelectorAll("li:not(.completed)").length;
  completedCounter.textContent = completedTasks;
  uncompletedCounter.textContent = uncompleted_counter;
}
