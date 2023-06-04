const qS = (el) => document.querySelector(el);
const cE = (el) => document.createElement(el);

const newTastBtnEl = qS(".addNewTask");
const clearTasksEl = qS(".clearTasks");
const inputTasksEl = qS(".insertTask");
const wrapperTodoEl = qS(".wrapperTodo");

newTastBtnEl.addEventListener("click", () => {
  let paragraph = document.createElement("p");
  paragraph.innerText = inputTasksEl.value;
  wrapperTodoEl.appendChild(paragraph);
  inputTasksEl.value = "";
  clearTasksEl.addEventListener("click", () => {
    wrapperTodoEl.removeChild(paragraph);
  });
});
