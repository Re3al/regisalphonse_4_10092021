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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//validation message



//submit btn
const answer = document.getElementById('form-answer');
const submit = document.getElementById("testtt");
submit.addEventListener("submit", function(e)
{
  
  answer.innerHTML ="Formulaire validé !";
  e.preventDefault();

  /*alert('Form envo');*/
  

  /*
  err = new Error;
  if(err)
  {
    throw err;
    console.log('erreur trouvée');

  }
  else
  {
    console.log('erreur non trouvée');
    const messagevalidation = document.createElement("p");
    let containerModal = document.getElementById("modal-body");
    containerModal.appendChild(messagevalidation);
    messagevalidation.innerHTML = "Merci ! Votre réservation a été reçue";
    messagevalidation.classList.add("messagevalide"); 
  } */
});



