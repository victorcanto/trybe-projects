const newTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const createTaskBtn = document.getElementById('criar-tarefa');

createTaskBtn.addEventListener('click', () => {
  function addNewTask() {
    const taskListItem = document.createElement('li');
    taskListItem.innerHTML = newTask.value;
    taskList.appendChild(taskListItem);
  }
  addNewTask();
  clearEntry();
  changeItemBackground();
});

function clearEntry() {
  newTask.value = '';
}
// clearEntry();

function changeItemBackground() {
  const tasks = document.querySelectorAll('li');
  tasks.forEach((task) => {
    task.addEventListener('click', (event) => {
      for (let index = 0; index < tasks.length; index += 1) {
        tasks[index].style.backgroundColor = 'transparent';
      }
      event.target.style.backgroundColor = 'rgb(128,128,128)';
    });
  });
}
