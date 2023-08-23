const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteButton">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
});

taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("deleteButton")) {
        const listItem = event.target.parentNode;
        taskList.removeChild(listItem);
    }
});
