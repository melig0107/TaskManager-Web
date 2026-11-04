# TaskManager Web 📋

Aplicación web interactiva para la gestión de tareas pendientes desarrollada en el marco de la asignatura **Desarrollo Web Integral (Unidad 2 - Resultado de Aprendizaje: Desarrollo colaborativo con Git y GitHub)**.

---

## 🎯 Objetivo del Proyecto

Aplicar de forma práctica los conocimientos de control de versiones con Git y la plataforma GitHub, implementando un flujo de trabajo colaborativo profesional (GitHub Flow) basado en ramas, revisiones de código mediante Pull Requests, resolución de conflictos de integración y despliegue de una aplicación web funcional.

---

## 👥 Integrantes del Equipo

| Nombre Completo | Rol / Rama Principal | Responsabilidad |
| :--- | :--- | :--- |
| **Integrante 1** | `feature/interfaz` | Estructuración semántica HTML5 y accesibilidad |
| **Integrante 2** | `feature/estilos` | Diseño visual responsivo con CSS3 y variables |
| **Integrante 3** | `feature/tareas` | Lógica en JavaScript, manipulación del DOM y persistencia |

*(Ajustar nombres y roles según los integrantes del equipo)*

---

## ✨ Funcionalidades

- **Captura y Registro de Tareas:** Formulario intuitivo con validación de entradas no vacías.
- **Marcar como Completada:** Checkbox interactivo que tacha la tarea y actualiza visualmente su estado.
- **Eliminación de Tareas:** Botón para remover actividades terminadas o descartadas.
- **Contador Dinámico:** Muestra el total de tareas registradas y cuántas han sido completadas en tiempo real.
- **Persistencia Local:** Almacenamiento en `localStorage` para conservar la lista tras recargar la página.
- **Diseño Responsivo:** Adaptado a pantallas de computadoras, tabletas y dispositivos móviles.

---

## 🚀 Instrucciones de Ejecución

No requiere dependencias ni instalación de servidores complejos:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/TU_USUARIO/TaskManager-Web.git
   cd TaskManager-Web
   ```
2. **Abrir en el navegador:**
   - Puedes abrir directamente el archivo `index.html` con doble clic o en tu navegador preferido.
   - O usando la extensión **Live Server** en Visual Studio Code (clic derecho en `index.html` > *Open with Live Server*).

---

## 🔄 Flujo de Trabajo: GitHub Flow

Se adoptó **GitHub Flow** debido a su simplicidad, agilidad y adecuación para proyectos web con entrega continua:

1. La rama `main` contiene el código siempre funcional y listo para producción.
2. Para cada nueva característica se crea una rama descriptiva a partir de `main` (ej. `feature/interfaz`, `feature/tareas`, `feature/estilos`).
3. Se realizan commits locales claros y concisos.
4. Se sube la rama al repositorio remoto en GitHub.
5. Se abre un **Pull Request (PR)** para revisión y retroalimentación entre pares.
6. Tras aprobarse la revisión y verificar la funcionalidad, se fusiona (*merge*) a `main`.

---

## 💻 Comandos Principales de Git Utilizados

```bash
# Inicialización y configuración
git init
git config user.name "Nombre"
git config user.email "correo@example.com"

# Gestión de ramas
git checkout -b feature/interfaz
git branch -a

# Confirmación de cambios
git status
git add .
git commit -m "feat(ui): estructura base del formulario de tareas"

# Sincronización remota
git remote add origin https://github.com/TU_USUARIO/TaskManager-Web.git
git push -u origin feature/interfaz
git pull origin main

# Visualización del historial
git log --oneline --graph --all
```

---

## 🛠️ Tecnologías Empleadas

- **HTML5:** Estructura semántica.
- **CSS3:** Flexbox, CSS Variables, Media Queries.
- **JavaScript (ES6+):** Manipulación del DOM, eventos y LocalStorage API.
- **Git & GitHub:** Control de versiones, ramas, Pull Requests y resolución de conflictos.
