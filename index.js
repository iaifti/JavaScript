document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Add task
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = taskInput.value;
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Add complete task toggle
        taskItem.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'x';
        deleteBtn.addEventListener('click', () => {
            taskItem.remove();
        });

        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);

        // Clear input
        taskInput.value = '';
    });
});
