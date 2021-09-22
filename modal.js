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
document.forms["formInscription"].addEventListener('submit', function(e){
  let error;
  //récupère l'objet écouté 
  let inputs = this;
   for(i=0;i<inputs.length;i++)
   {
     if(!inputs[i].value)
     {
       error = "Veuillez renseigner tous les champs";
       // break;
     }
   }

   if(error)
   {
    e.preventDefault();
    answer.innerHTML = error;
    return false;
   }
   else{
    answer.innerHTML ="Formulaire validé !";
    e.preventDefault();
   }

});
