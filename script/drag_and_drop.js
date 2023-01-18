let currentDraggedTask;

/**
 * This function will be started when you start dragging a Task.
 */

addEventListener("drag", (event) => {
  if (!dummysPrinted) {
    renderPlaceholder();
    dummysPrinted = true;
  }
});

/**
 * This function will be started when you drop a Task.
 * It will just false the variable to make the previous function work again.
 */

addEventListener("drop", (event) => {
  if (dummysPrinted) {
    dummysPrinted = false;
  }
});

/**
 * This function puts a placeholder in every other coulmn of the kanban
 */
function renderPlaceholder() {
  kanbanCategorys.forEach((category) => {
    if (findTaskById(currentDraggedTask)["category"] != category) {
      document.getElementById(category + "-tasks").innerHTML +=
        placeholderCardHTML(category);
    }
  });
}

/**
 * This function changes the ID of the currentDraggedTaske to the dragged item one
 * * @param {string} id to indentify a task
 */
function startDragging(id) {
  currentDraggedTask = id;
}

/**
 * This function change the behaivior to be able to drop an item
 * @param {event} ev
 */
function allowDrop(ev) {
  ev.preventDefault();
}

/**
 * This function changes the category of the task to the category its dropped in
 * @param {string} category fixed category hardcoded in HTML
 */
function moveTo(category) {
  let draggedTask = findTaskById(currentDraggedTask);
  draggedTask["category"] = category;
  startRender();
  saveData();
}
