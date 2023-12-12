// Burger Toggle
const menuBurger = document.querySelector(".icon");

menuBurger.addEventListener('click', burgerToggle);

function burgerToggle() {
  const topNav = document.getElementById("myTopnav");
  topNav.classList.toggle("responsive");
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
modalClose.addEventListener("click", closeModal);

function closeModal(){
  modalbg.style.display = "none";
}

// Variable INPUT Form

const form = document.querySelector('form');
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const locationInput = document.getElementsByName("location");
const checkboxInput = document.getElementById("checkbox1");
const checkbox2Input = document.getElementById("checkbox2");
const btnSubmit = document.getElementsByClassName("btn-submit");

// FUNCTION VERIF. FIRSTNAME

function verifFirst(input){
  const regExpText = new RegExp("^[A-Za-zéèê\-]+$");
  if(regExpText.test(input.value) && input.length <= 2){
    console.log("PRENOM OK");
  } else {
    console.log("PRENOM ERROR")
  }
}

// FUNCTION VERIF. LASTNAME

function verifLast(input){
  const regExpText = new RegExp("^[A-Za-zéèê\-]+$");
  if(regExpText.test(input.value) && input.length <= 2){
    console.log("NOM OK");
  } else {
    console.log("NOM ERROR")
  }
}

// FUNCTION VERIF EMAIL

function verifEmail(input){
  const regExpEmail = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$')
  if(regExpEmail.test(input.value)){
    console.log("EMAIL OK");
  } else {
    console.log("EMAIL ERROR");
  }
}

// EVENT LISTENER FORM SUBMIT 

form.addEventListener("submit", (event) => {
  event.preventDefault();

  verifFirst(firstNameInput);
  verifLast(lastNameInput);
  verifEmail(emailInput);
});

// EVENT LISTENER CHANGE SUR INPUT FIRSTNAME

firstNameInput.addEventListener("change", () => {
  verifFirst(firstNameInput);
});

// EVENT LISTENER CHANGE SUR INPUT LASTNAME

lastNameInput.addEventListener("change", () =>{
  verifLast(lastNameInput);
});

// EVENT LISTENER CHANGE SUR INPUT EMAIL

emailInput.addEventListener("change", () =>{
  verifEmail(emailInput);
});
