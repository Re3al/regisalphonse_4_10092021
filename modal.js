function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closedBtn = document.getElementsByClassName('close')[0];

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closedBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//close modal
function closeModal() {
  modalbg.style.display = "none";
}
//validation message
function validate()
{
  alert('Valider');
}


//submit btn
const answer = document.getElementById('form-answer');
const wrongAnswer = document.getElementById('form-error');
document.forms["formInscription"].addEventListener('submit', function(e){

//récupère l'objet écouté 
let inputs = this;
//tableau des champs en erreurs 
let errors = []; 
lenghtName = inputs["last"].value;
lenghtName = lenghtName.length;
lenghtFirstname = inputs["first"].value;
lenghtFirstname = lenghtFirstname.length;
//Listing des erreurs
if(lenghtFirstname < 2)
{
  errors[0] = "Veuillez entrer 2 caractères ou plus pour le champ du prénom"; 
}
if(lenghtName < 2)
{
  errors[1] = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
}
if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs['email'].value))
{  
  errors[2] = "Veuillez renseigner une adresse email valide";
}    
if(!inputs['birthdate'].value)
{
  errors[3] = "Vous devez entrer votre date de naissance";
}
if((!inputs['quantity'].value))
{
  errors[4] = "Vous devez saisir une valeur numérique";
}
if(!inputs['location'].value)
{
  errors[5] = "Vous devez sélectionner une option.";
}
if(document.querySelector('#checkbox1:checked') == null)
{
  errors[6] = "Vous devez vérifier que vous acceptez les termes et conditions.";
}
//On vérifie qu'il n'y a pas d'erreurs
if(errors.length > 0)
{
  e.preventDefault();
  //div des inputs ciblés
  let blockInput = document.querySelectorAll('.modal-body .formData');
  //parcours l'ensemble des inputs
  blockInput.forEach((input,index) => {
  let errorParagraph = input.querySelector(".error-message");
  //on supprime le message d'erreur s'il existait deja
  if(errorParagraph)
  {
    errorParagraph.remove();
  }
  //si on a une erreur a un index donné parmi les index du tableau blockInput
  if(errors[index])
  {
    targetInput = input.querySelector('input');
    targetInput.classList.add("error-form");
    let errorMessage = document.createElement("p");
    errorMessage.innerHTML = errors[index]; 
    input.appendChild(errorMessage);
    errorMessage.classList.add("error-message");
  }
  else
  {
    targetInput = input.querySelector('input');
    targetInput.classList.remove("error-form");
  }
});
}
else{
  const modalResponse = document.querySelector(".bground-response");
  function launchResponse() {
  modalResponse.style.display = "block";
  } 
  e.preventDefault();
  let formSubmitted = document.getElementById('formInscription');
  formSubmitted.addEventListener("submit", function(e)
  { 
   closeModal();
   launchResponse();
   let btnCloseResponse = document.querySelectorAll('.close-btn');
   function closeModalResponse() {
    modalResponse.style.display = "none";
   }
   btnCloseResponse.forEach((btnClose) => btnClose.addEventListener("click", closeModalResponse));

  });
  }
});
