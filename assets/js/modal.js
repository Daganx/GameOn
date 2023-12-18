// Burger Toggle :
const menuBurger = document.querySelector(".icon");
menuBurger.addEventListener('click', burgerToggle);
function burgerToggle() {
  const topNav = document.getElementById("myTopnav");
  topNav.classList.toggle("responsive");
}
// Modal Form :
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
  modalbg.style.display = "block";
}
modalClose.addEventListener("click", closeModal);
function closeModal(){
  modalbg.style.display = "none";
}
// Inputs Form:
const form = document.querySelector('form');
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const participationInput = document.getElementById("quantity");
const radioButtons = document.querySelectorAll('input[name="location"]');
const checkboxInput = document.getElementById("checkbox1");
const btnSubmit = document.getElementsByClassName("btn-submit");
// Regex :
const regExpText = new RegExp("^[A-Za-zéèê\-]+$");
const regExpEmail = new RegExp('^[a-z0-9.-_]+[@]{1}[a-z0-9.-_]+[.]{1}[a-z]{2,4}$');
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
  if (input.value.length >= 2 && regExpText.test(input.value)){
    console.log("First OK");
    if (errorMessageFirst){
      errorMessageFirst.remove();
      errorMessageFirst = null; 
    }
    return true;
  } else {
    console.log("First ERROR");
    if (errorMessageFirst){
      return false; 
    }
    const errorElement = document.createElement('div');
    errorElement.id = 'firstNameError';
    errorElement.classList.add('error-message');
    errorElement.textContent = 'Le prénom doit avoir au moins 2 caractères et ne doit contenir que des lettres.';
    input.parentNode.appendChild(errorElement);
    errorMessageFirst = errorElement; 
    return false;
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
    const errorElement = document.createElement('div');
    errorElement.id = 'lastNameError';
    errorElement.classList.add('error-message');
    errorElement.textContent = 'Le nom doit contenir aux moins 2 caractères et ne doit contenir que des lettres.';
    input.parentNode.appendChild(errorElement);
    errorMessageLast = errorElement;
    return false;
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
    const errorElement = document.createElement('div');
    errorElement.id = 'emailError';
    errorElement.classList.add('error-message');
    errorElement.textContent = "Veuillez rentrer une adresse e-mail valide.";
    input.parentNode.appendChild(errorElement);
    errorMessageEmail = errorElement; 
    return false;
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
    const errorElement = document.createElement('div');
    errorElement.id = 'ageError';
    errorElement.classList.add('error-message');
    errorElement.textContent = "Vous devez avoir 12 ans minimum pour participer.";
    input.parentNode.appendChild(errorElement);
    errorMessageAge = errorElement; 
    return false;
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
    const errorElement = document.createElement('div');
    errorElement.id = 'participationError';
    errorElement.classList.add('error-message');
    errorElement.textContent = "Nombre minimum : 0, Nombre maximum : 10.";
    input.parentNode.appendChild(errorElement);
    errorMessageParticipation = errorElement; 
    return false;
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
      const errorElement = document.createElement('div');
      errorElement.id = 'locationError';
      errorElement.classList.add('error-message');
      errorElement.textContent = 'Veuillez sélectionner une location.';
      document.getElementById('formDataLocation').appendChild(errorElement);
      errorMessageLocation = errorElement;
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
      const errorElement = document.createElement('div');
      errorElement.id = 'locationError';
      errorElement.classList.add('error-message');
      errorElement.textContent = "Veuillez accepter les conditions d'utilisation pour continuer.";
      document.getElementById('formDataConditions').appendChild(errorElement);
      errorMessageConditions = errorElement;
    }
    return false;
  }
};

// Submission Form :
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isFirstNameValid = checkFirst(firstNameInput);
  const isLastNameValid = checkLast(lastNameInput);
  const isEmailValid = checkEmail(emailInput);
  const isAgeValid = checkAge(birthdateInput);
  const isParticipationValid = checkParticipation(participationInput);
  const isLocationValid = checkLocation();
  const isConditionValid = checkConditions();

  if (isFirstNameValid &&
      isLastNameValid &&
      isEmailValid && 
      isAgeValid &&
      isParticipationValid &&
      isLocationValid &&
      isConditionValid) {
    successModal.style.display = "block";
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
// Success Modal :
const successModal = document.getElementById('modal-success');
const successClose = document.getElementById('success-close');
successClose.addEventListener('click', () => {
  successModal.style.display = 'none';
});