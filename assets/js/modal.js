// Burger Toggle :
const menuBurger = document.querySelector(".icon");
menuBurger.addEventListener('click', burgerToggle);
function burgerToggle() { // Function toggle Burger
  const topNav = document.getElementById("myTopnav"); // Get the element 
  topNav.classList.toggle("responsive"); // Toggle with CSS class responsive 
}
// Modal Form :
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() { // Function Boucle Button Modal
  modalbg.style.display = "block"; // Add Display Block CSS
}
modalClose.addEventListener("click", closeModal);
function closeModal(){
  modalbg.style.display = "none"; // Add Display None
}
// Inputs Form:
// VARIABLE OF INPUTS
const form = document.querySelector('form');
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const participationInput = document.getElementById("quantity");
const radioButtons = document.querySelectorAll('input[name="location"]'); // Use Selector ALL for Input Location
const checkboxInput = document.getElementById("checkbox1");
// Regex :
const regExpText = new RegExp("^[A-Za-zéèê\\s-]+$"); // Text Regex
const regExpEmail = new RegExp('^[a-z0-9.-_]+[@]{1}[a-z0-9.-_]+[.]{1}[a-z]{2,4}$'); // Mail Regex
// Error Msg : 
let errorMessageFirst = document.getElementById('firstNameError');
let errorMessageLast = document.getElementById('lastNameError');
let errorMessageEmail = document.getElementById('emailError');
let errorMessageAge = document.getElementById('ageError');
let errorMessageParticipation = document.getElementById('participationError');
let errorMessageLocation = document.getElementById('locationError');
let errorMessageConditions = document.getElementById('conditionsError');
// Functions Validations :
function checkFirst(input) {
  if (input.value.length >= 2 && regExpText.test(input.value)){ // Function with Parameter Input. Use of If and Else Condition
    console.log("First OK"); // IF Value of Input is more than 2 and match the Regex enter if. and return true
    if (errorMessageFirst){ // Condition with the ERRORMESSAGE, if true it remove the message.
      errorMessageFirst.remove();
      errorMessageFirst = null; // Value = Null to remove it.
    }
    return true;
  } else { // if False. Enter Else and Return False.
    console.log("First ERROR");
    if (errorMessageFirst){ // Condition if False, ERRORMESSAGE Stay
      return false; 
    }
    createErrorMsgFirst(input); // Use of Function to create ERROR MSG (Function Below L.169)
  }
};

function checkLast(input){
  if(input.value.length >= 2 && regExpText.test(input.value)){
    console.log("Last OK");
    if (errorMessageLast){
      errorMessageLast.remove();
      errorMessageLast = null;
    }
    return true;
  } else {
    console.log("Last ERROR");
    if (errorMessageLast){
      return false;
    }
    createErrorMsgLast(input);
  }
};

function checkEmail(input){
  if(regExpEmail.test(input.value)){
    console.log("Email OK");
    if (errorMessageEmail){
      errorMessageEmail.remove();
      errorMessageEmail = null;
    }
    return true;
  } else {
    console.log("Email ERROR");
    if (errorMessageEmail){
      return false;
    }
    createErrorMsgEmail(input);
  }
};

function checkAge(input){
  const birthdate = new Date(birthdateInput.value);
  const today = new Date();
  const age = today.getFullYear() - birthdate.getFullYear();
  if ( age >= 12){
    console.log("Age OK");
    if (errorMessageAge){
      errorMessageAge.remove();
      errorMessageAge = null;
    }
    return true;
  } else {
    console.log("Age ERREUR")
    if (errorMessageAge){
      return false;
    }
    createErrorMsgAge(input);
  }
};

function checkParticipation(input){
  const value = parseInt(input.value, 10);
  if(!isNaN(value) && value >= 0 && value <= 10){
    console.log("Participation OK");
    if (errorMessageParticipation){
      errorMessageParticipation.remove();
      errorMessageParticipation = null;
    }
    return true;
  } else {
    console.log("Participation ERROR");
    if (errorMessageParticipation){
      return false;
    }
    createErrorMsgParticipation(input);
  }
};

function checkLocation() {
  let isSelected = false;
  radioButtons.forEach(button => {
    if (button.checked) {
      isSelected = true;
      console.log('LOCATION OK');
    }
  });
  if (isSelected) {
    if (errorMessageLocation) {
      errorMessageLocation.remove();
      errorMessageLocation = null;
    }
  } else {
    if (!errorMessageLocation) {
      createErrorMsgLocation(document);
    }
  }
  return isSelected;
};

function checkConditions() {
  if (checkboxInput.checked) {
    console.log("Conditions OK");
    if (errorMessageConditions){
      errorMessageConditions.remove();
      errorMessageConditions = null;
    }
    return true;
  } else {
    console.log("Veuillez accepter les conditions d'utilisation pour vous inscrire.");
    if (!errorMessageConditions) {
      createErrorMsgConditions(document);
    }
    return false;
  }
};
// Functions Msg Create : 
function createErrorMsgFirst(input){
  const errorElement = document.createElement('div');
    errorElement.id = 'firstNameError';
    errorElement.classList.add('error-message');
    errorElement.textContent = 'Le prénom doit avoir au moins 2 caractères et ne doit contenir que des lettres.';
    input.parentNode.appendChild(errorElement);
    errorMessageFirst = errorElement; 
    return false;
};

function createErrorMsgLast (input){
  const errorElement = document.createElement('div');
    errorElement.id = 'lastNameError';
    errorElement.classList.add('error-message');
    errorElement.textContent = 'Le nom doit contenir aux moins 2 caractères et ne doit contenir que des lettres.';
    input.parentNode.appendChild(errorElement);
    errorMessageLast = errorElement;
    return false;
};

function createErrorMsgEmail(input){
  const errorElement = document.createElement('div');
    errorElement.id = 'emailError';
    errorElement.classList.add('error-message');
    errorElement.textContent = "Veuillez rentrer une adresse e-mail valide.";
    input.parentNode.appendChild(errorElement);
    errorMessageEmail = errorElement; 
    return false;
};

function createErrorMsgAge(input){
  const errorElement = document.createElement('div');
    errorElement.id = 'ageError';
    errorElement.classList.add('error-message');
    errorElement.textContent = "Vous devez avoir 12 ans minimum pour participer.";
    input.parentNode.appendChild(errorElement);
    errorMessageAge = errorElement; 
    return false;
}

function createErrorMsgParticipation(input){
  const errorElement = document.createElement('div');
    errorElement.id = 'participationError';
    errorElement.classList.add('error-message');
    errorElement.textContent = "Nombre minimum : 0, Nombre maximum : 10.";
    input.parentNode.appendChild(errorElement);
    errorMessageParticipation = errorElement; 
    return false;
}

function createErrorMsgLocation(){
  const errorElement = document.createElement('div');
      errorElement.id = 'locationError';
      errorElement.classList.add('error-message');
      errorElement.textContent = 'Veuillez sélectionner une location.';
      document.getElementById('formDataLocation').appendChild(errorElement);
      errorMessageLocation = errorElement;
};

function createErrorMsgConditions(){
  const errorElement = document.createElement('div');
      errorElement.id = 'locationError';
      errorElement.classList.add('error-message');
      errorElement.textContent = "Veuillez accepter les conditions d'utilisation pour continuer.";
      document.getElementById('formDataConditions').appendChild(errorElement);
      errorMessageConditions = errorElement;
}
// Submission Form :
form.addEventListener("submit", (event) => { // AddEventListener on the form
  event.preventDefault(); // 

  const isFirstNameValid = checkFirst(firstNameInput); // Const Validation. Get the value of our Input. (Function Above L.43)
  const isLastNameValid = checkLast(lastNameInput);
  const isEmailValid = checkEmail(emailInput);
  const isAgeValid = checkAge(birthdateInput);
  const isParticipationValid = checkParticipation(participationInput);
  const isLocationValid = checkLocation();
  const isConditionValid = checkConditions();
  const messageValidation = document.getElementById('message-validation');
  const btnClose = document.getElementById('btn-close');

  if (isFirstNameValid && // Condition IF All Our Input are VALID 
      isLastNameValid &&
      isEmailValid && 
      isAgeValid &&
      isParticipationValid &&
      isLocationValid &&
      isConditionValid) {
    form.style.display = 'none'; // Close the Form.
    messageValidation.style.display = 'block'; // Open the modal
    modalClose.addEventListener('click', () => {
      location.reload();
    })
    btnClose.addEventListener('click', () => {
      location.reload();
    })
    form.reset();
  } else {
    return false;
  }
});
// Events Listeners :
firstNameInput.addEventListener("input", () => {
  checkFirst(firstNameInput);
});
lastNameInput.addEventListener("input", () =>{
  checkLast(lastNameInput);
});
emailInput.addEventListener("input", () =>{
  checkEmail(emailInput);
});
birthdateInput.addEventListener("change", () =>{
  checkAge(birthdateInput);
});
participationInput.addEventListener("change", () =>{
  checkParticipation(participationInput);
});
radioButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(`Bouton : ${button.value}`);
  });
});
checkboxInput.addEventListener("change", () => {
  checkConditions();
});