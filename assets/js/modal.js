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
const errorMessage = document.getElementById('firstNameError');
// Functions Validations :
function checkFirst(input) {
  const regExpText = new RegExp("^[A-Za-zéèê\-]+$");
  const errorMessage = document.getElementById('firstNameError');
  if (input.value.length >= 2 && regExpText.test(input.value)) {
    console.log("PRENOM OK");
    if (errorMessage) {
      errorMessage.remove();
    }
    return true;
  } else {
    console.log("PRENOM ERROR");
    if (!errorMessage) {
      const errorElement = document.createElement('div');
      errorElement.id = 'firstNameError';
      errorElement.classList.add('error-message');
      errorElement.textContent = 'Le prénom doit avoir au moins 2 caractères et ne doit contenir que des lettres.';
      input.parentNode.appendChild(errorElement);
    }
    return false;
  }
};
function checkLast(input){
  if(input.value.length >= 2 && regExpText.test(input.value)){
    console.log("NOM OK");
    return true;
  } else {
    console.log("NOM ERROR");
    return false;
  }
};
function checkEmail(input){
  if(regExpEmail.test(input.value)){
    console.log("EMAIL OK");
    return true;
  } else {
    console.log("EMAIL ERROR");
    return false;
  }
};
function checkAge(){
  const birthdate = new Date(birthdateInput.value);
  const today = new Date();
  const age = today.getFullYear() - birthdate.getFullYear();
  if ( age >= 12){
    console.log("AGE OK");
    return true;
  } else {
    console.log("AGE MOINS 12");
    return false;
  }
};
function checkParticipation(input){
  const value = parseInt(input.value, 10);
  if(!isNaN(value) && value >= 0 && value <= 10){
    console.log("PARTICIPATION OK");
    return true;
  } else {
    console.log("PARTICIPATION ERROR")
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
  return isSelected;
};
function checkConditions() {
  if (checkboxInput.checked) {
    console.log("CONDITIONS OK");
    return true;
  } else {
    console.log("Veuillez accepter les conditions d'utilisation pour vous inscrire.");
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
firstNameInput.addEventListener("change", () => {
  checkFirst(firstNameInput);
});
lastNameInput.addEventListener("change", () =>{
  checkLast(lastNameInput);
});
emailInput.addEventListener("change", () =>{
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

