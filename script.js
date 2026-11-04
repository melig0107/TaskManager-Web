// TaskManager Web - Módulo de Tareas
// Integrante B: Daniela Aidee Roman Arevalo
document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  let tasks = [];

  function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.className = 'task-item';
      li.innerHTML = `<span>${task.text}</span>`;
      taskList.appendChild(li);
    });
  }

  function addTask(text) {
    if (!text.trim()) return;
    tasks.push({ id: Date.now(), text: text.trim(), completed: false });
    renderTasks();
  }

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(taskInput.value);
    taskInput.value = '';
  });
});