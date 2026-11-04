// ===================================================
// TaskManager Web - Lógica JavaScript
// ===================================================

document.addEventListener('DOMContentLoaded', () => {
  // Elementos del DOM
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  const emptyState = document.getElementById('empty-state');
  const totalTasksSpan = document.getElementById('total-tasks');
  const completedTasksSpan = document.getElementById('completed-tasks');

  // Estado de tareas (cargadas desde localStorage si existen)
  let tasks = JSON.parse(localStorage.getItem('taskmanager_tasks')) || [];

  // Guardar en localStorage
  function saveTasks() {
    localStorage.setItem('taskmanager_tasks', JSON.stringify(tasks));
  }

  // Actualizar estadísticas y estado vacío
  function updateUIState() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;

    totalTasksSpan.textContent = `Total: ${total}`;
    completedTasksSpan.textContent = `Completadas: ${completed}`;

    if (total === 0) {
      emptyState.classList.remove('hidden');
    } else {
      emptyState.classList.add('hidden');
    }
  }

  // Renderizar la lista de tareas
  function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach(task => {
      const li = document.createElement('li');
      li.className = `task-item ${task.completed ? 'completed' : ''}`;
      li.dataset.id = task.id;

      // Contenedor del contenido (checkbox + texto)
      const contentDiv = document.createElement('div');
      contentDiv.className = 'task-item-content';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'task-checkbox';
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', () => toggleTask(task.id));

      const span = document.createElement('span');
      span.className = 'task-text';
      span.textContent = task.text;

      contentDiv.appendChild(checkbox);
      contentDiv.appendChild(span);

      // Botón para eliminar
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn-delete';
      deleteBtn.title = 'Eliminar tarea';
      deleteBtn.innerHTML = '&times;';
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        deleteTask(task.id);
      });

      li.appendChild(contentDiv);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });

    updateUIState();
  }

  // Función para agregar tarea
  function addTask(text) {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    const newTask = {
      id: Date.now().toString(),
      text: trimmedText,
      completed: false,
      createdAt: new Date().toISOString()
    };

    tasks.unshift(newTask);
    saveTasks();
    renderTasks();
  }

  // Función para alternar estado completado
  function toggleTask(id) {
    tasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    saveTasks();
    renderTasks();
  }

  // Función para eliminar tarea
  function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
  }

  // Manejador del formulario
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(taskInput.value);
    taskInput.value = '';
    taskInput.focus();
  });

  // Render inicial
  renderTasks();
});
