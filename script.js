// TaskManager Web - Módulo de Tareas Completo
// Integrante B: Daniela Aidee Roman Arevalo
document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  const emptyState = document.getElementById('empty-state');
  const totalTasksSpan = document.getElementById('total-tasks');
  const completedTasksSpan = document.getElementById('completed-tasks');

  let tasks = JSON.parse(localStorage.getItem('tasks_app')) || [];

  function saveAndRender() {
    localStorage.setItem('tasks_app', JSON.stringify(tasks));
    renderTasks();
  }

  function updateStats() {
    if (totalTasksSpan) totalTasksSpan.textContent = `Total: ${tasks.length}`;
    if (completedTasksSpan) completedTasksSpan.textContent = `Completadas: ${tasks.filter(t => t.completed).length}`;
    if (emptyState) emptyState.classList.toggle('hidden', tasks.length > 0);
  }

  function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.className = `task-item ${task.completed ? 'completed' : ''}`;

      const content = document.createElement('div');
      content.className = 'task-item-content';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', () => {
        task.completed = !task.completed;
        saveAndRender();
      });

      const span = document.createElement('span');
      span.className = 'task-text';
      span.textContent = task.text;

      content.appendChild(checkbox);
      content.appendChild(span);

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn-delete';
      deleteBtn.innerHTML = '&times;';
      deleteBtn.addEventListener('click', () => {
        tasks = tasks.filter(t => t.id !== task.id);
        saveAndRender();
      });

      li.appendChild(content);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });

    updateStats();
  }

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!taskInput.value.trim()) return;
    tasks.unshift({ id: Date.now(), text: taskInput.value.trim(), completed: false });
    taskInput.value = '';
    saveAndRender();
  });

  renderTasks();
});