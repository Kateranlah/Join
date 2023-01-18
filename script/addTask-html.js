function categorySelectorTemplate() {
  return /*html*/ `
          <span id="categorySelectorPlaceholder" class="placeholder">
              <div id="firstValue">Select task Category</div>
              <img class="category" src="./assets/selectArrow.svg" alt="">
          </span>
          <span tabindex="0" onclick="renderNewCategoryInput()" class="selectable category">New Category</span>
  `;
}

function newCategoryTemplate() {
  return /*html*/ `
      <div  class="customSelectorInput">
          <input id="categoryInput" class="noBorder" placeholder="New category name" type="text">
          <div class="createClearContainer">
              <img onclick="renderCategorySelector()" src="./assets/clear.svg" alt=""> |
              <img onclick="addCategoryButtonTouched()" src="./assets/createTask.svg" alt="">
          </div>
      </div>
      `;
}

function renderSingleCategorys() {
  for (let i = 0; i < user.epics.length; i++) {
    const category = user.epics[i];
    document.getElementById("categorySelector").innerHTML += `
         <span tabindex="0"  onclick="showCategory('category-${i}')" id="category-${i}" class="selectable category">${category.name}
             <div class="color ${category.color}"></div>
         </span> 
         `;
  }
}

function inviteContactInputTemplate() {
  return /*html*/ `
      <div class="customSelectorInput">
          <input id="contactInput" class="noBorder" placeholder="contact email" type="text">
          <div class="createClearContainer">
              <img onclick="renderContactSelector()" src="./assets/clear.svg" alt=""> |
              <img onclick="inviteContact()" src="./assets/createTask.svg" alt="">
          </div>
      </div>
      `;
}

function contactSelectorTemplate() {
  return /*html*/ `
          <span id="assignedSelectorPlaceholder" class="placeholder">
              Select Contact
              <img class="assigned" src="./assets/selectArrow.svg" alt="">
          </span>
      `;
}

function singleContactTemplate(contact, id, color) {
  return /*html*/ `
      <span data-color="${color}" onclick="toggleCheckbox(${id})" id="contact-${id}" class="selectable assigned">${contact.name}
          <input class="checkbox" type="checkbox" name="" id="check-${id}">
      </span>
      `;
}

function inviteContactSelectorTemplate() {
  return /*html*/ `
          <span onclick="renderInviteContactInput()" class="selectable assigned">Invite new Contact
              </span id="contactImg" src="./assets/contacts.svg" alt="">
          </span>
      `;
}

function renderChoosenCategory(id) {
  index = id.slice(-1);
  let category = user.epics[index];
  return /*html*/ `
              ${category.name}
              <div class="color ${category.color}"></div>
      `;
}

function assignedToContactCircleTemplate(shortName, color) {
  return /*html*/ `
      <div  class="assignedTo ${color} ">${shortName}</div>
      `;
}

function subtaskInputTemplate() {
  return /*html*/ `
        <div class="customSelectorInput input p-0">
          <input id="subtaskInput" class="noBorder" placeholder="Add new subtask" type="text">
          <div class="createClearContainer">
              <img onclick="closeInviteInput()" src="./assets/clear.svg" alt=""> |
              <img onclick="addSubtask()" src="./assets/createTask.svg" alt="">
          </div>
      </div>
      `;
}

function addSubtaskContainerTemplate() {
  return /*html*/ `
          <div class="input" onclick="renderSubtaskInput()">
              Add new subtask
          </div>
      `;
}

function subtasklistTemplate(subtask, id) {
  return /*html*/ `
          <div>
              <input checked="true" type="checkbox" id="subCheck-${id}" class="subtaskCheckbox">
              <span id="subtask-${id}">${subtask}</span>
          </div>
      `;
}
