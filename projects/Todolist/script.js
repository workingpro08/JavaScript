document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const mainDiv = document.getElementById("main");
    const addTaskBtn = document.getElementById("addTaskBtn");

    let todos = [];

    // Add task when button is clicked
    addTaskBtn.addEventListener("click", addTask);
    
    // Add task when Enter key is pressed
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") addTask();
    });

    function addTask() {
        const taskValue = taskInput.value.trim();
        if (!taskValue) return alert("Please enter a valid wish!"); 

        const task = { id: Date.now(), task: taskValue };
        todos.push(task);
        appendTaskToDOM(task);
        taskInput.value = ""; // Clear input field
    }

    function appendTaskToDOM(task) {
        const div = document.createElement("div");
        div.classList.add("task");
        div.dataset.id = task.id; 

        const taskName = document.createElement("p");
        taskName.textContent = task.task;

        const button = document.createElement("button");
        button.textContent = "❎";
        button.addEventListener("click", () => removeTask(task.id));

        div.append(taskName, button);
        mainDiv.appendChild(div);
    }

    function removeTask(taskId) {
        if (!confirm("Do you want to delete this wish?")) return;

        // Remove from `todos` array
        todos = todos.filter(task => task.id !== taskId);

        // Remove from DOM
        document.querySelector(`[data-id='${taskId}']`)?.remove();

        alert("😭 You deleted a wish!");
    }
});
