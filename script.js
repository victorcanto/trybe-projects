const newTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const createTaskBtn = document.getElementById('criar-tarefa');

createTaskBtn.addEventListener('click', () => {
  function addNewTask() {
    const taskListItem = document.createElement('li');
    taskListItem.innerHTML = newTask.value;
    taskList.appendChild(taskListItem);
  }
  function clearEntry() {
    newTask.value = '';
  }
  addNewTask();
  clearEntry();
});
