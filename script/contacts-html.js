
/**
 * function renders letter categories, depending on the first letter of every name
 * @param {string} letter
 */
function renderLetterCategory(letter) {
    document.getElementById("list").innerHTML += `
          <div id="letter-${letter}" class="letter-entrie">
              <div class="letter-container">
                  <p class="letter">${letter}</p>
                  <div class="only-desktop"></div>
              </div>
              <img class="horizontal-line" src="./assets/contact-break-line.svg">
          </div>
      `;
  }
  
/**
 * function provides html code for rendering contact into list
 * @param {string} name
 * @param {string} letter
 */
function listContactHTML(name, letter) {
    document.getElementById(`letter-${letter}`).innerHTML += `
      <div onclick="showContactEntrie('${name}')" class="single-contact">
          <span class="initials ${contactColor}" ;">${initials}</span>
          <div class="name-and-mail">
              <p>${name}</p>
              <p class="mail">${contactMail}</p>
          </div>
      </div>
      `;
  }

/**
 * function provides html code for rendering selected contact
 * @param {string} name
 */
function selectetContactHTML(name) {
    document.getElementById("selected-contact").innerHTML = `
      <img onclick="openMobileList()" class="mobile-back-arrow only-mobile" src="./assets/mobile-back-arrow.svg">
      <img onclick="editPopUp('${name}')" class="mobile-edit-btn only-mobile" src="./assets/mobile-contact-edir.svg">
      <div class="huge-contact">
          <span class="huge-initials ${contactColor}" ;">${initials}</span>
          <div class="huge-name-add-task">
              <p class="huge-name">${name}</p>
              <div onclick="openTaskTemplate()" class="add-task">
                  <img class="add-task-img" src="./assets/blue-plus.svg">
                  <p class="add-task-text">Add Task</p>
              </div>
          </div>
      </div>
  
      <div class="edit-div">
          <p>Contact Information</p>
          <div onclick="editPopUp('${name}')" class="edit only-desktop">
              <img src="./assets/pen-small.svg">
              <p style="font-size: 16px;">Edit Contact</p>
          </div>
      </div>
  
      <p class="mail-and-phone">Email</p>
  
      <a href="mailto:${contactMail}" class="mail">${contactMail}</a>
  
      <p class="mail-and-phone">Phone</p>
  
      <a style="justify-content:start;"  href="tel:${contactPhone}" class="phone-number">${contactPhone}</a>
      `;
  }

/**
 * function animates new contact window
 */
function animateNewContact() {
    document.getElementById("pop-up-window").classList.add("not-hidden-mobile");
    document.getElementById("pop-up-window").classList.add("not-hidden");
  }

/**
 * function animates edit window
 */
function animateEditWindow() {
    document.getElementById("pop-up-edit-window").classList.add("not-hidden");
    document
      .getElementById("pop-up-edit-window")
      .classList.add("not-hidden-mobile");
  }

/**
 * function renders the HTML for the edit window
 */
function renderEditHTML() {
    document.getElementById("edit-content").innerHTML = `
          <img onclick="closeEdit()" class="pop-up-exit only-desktop" src="./assets/pop-up-cross.svg">
  
          <div class="only-mobile">
              <span class="huge-initials pop-up-initials ${contactColor}"  ;">${initials}</span>
          </div>
      
          <div class="only-desktop">
              <span class="huge-initials pop-up-initials  ${contactColor}" ;">${initials}</span>
          </div>
      
          <div class="all-inputfields">
      
              <div class="pop-up-inputfield">
                  <input id="editName" class="pop-up-input" type="text" placeholder="Name" title="Change name">
                  <img src="./assets/profile-input.svg">
              </div>
      
              <div class="pop-up-inputfield">
                  <input id="editEmail" class="pop-up-input" type="email" placeholder="Email" title="Change email">
                  <img src="./assets/mail.svg">
              </div>
      
              <div class="pop-up-inputfield">
                  <input id="editPhone" class="pop-up-input" type="number" placeholder="Phone"
                      title="Change phone number">
                  <img src="./assets/phone.svg">
              </div>
      
              <button onclick="saveContactChanges()" class="dark-btn save-btn">
                  Save
              </button>
  
          </div>
      `;
  }
  

/**
 * function closes edit window
 */
function closeEdit() {
    document.getElementById("pop-up-edit").classList.add("d-none");
    document.getElementById("pop-up-edit-window").classList.remove("not-hidden");
  }