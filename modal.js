function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
console.log('test22');
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
  console.log('modal clicked');
}
//validation message



//submit btn
const answer = document.getElementById('form-answer');
const wrongAnswer = document.getElementById('form-error');
document.forms["formInscription"].addEventListener('submit', function(e){
  let error;
  //index de l'erreur
  let indexError = 0;
  //récupère l'objet écouté 
  let inputs = this;

  if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(!inputs['email'].value))
  {  
    error = "Veuillez renseigner une adresse email valide";
    indexError = 2;
    // break;
  }
   for(i=0;i<inputs.length;i++)
   {
    lenghtName = inputs["last"].value;
    lenghtName = lenghtName.length;
    
      if(lenghtName < 2)
      {
    error ="Veuillez entrer 2 caractères ou plus pour le champ du nom";
    indexError = 1;


      }

      lenghtFirstname = inputs["first"].value;
    lenghtFirstname = lenghtFirstname.length;
    
      if(lenghtFirstname < 2)
      {
    error ="Veuillez entrer 2 caractères ou plus pour le champ du nom";
    indexError = 0;
      }

     if(!inputs[i].value)
     {
       error = "Veuillez renseigner tous les champs";
       
       // break;
     }
  
     if((!inputs['quantity'].value))
     {
       error = "Vous devez saisir une valeur numérique";
       indexError = 4;
       // break;
     }
     if(!inputs['location'].value)
     {
       error = "Vous devez choisir une option.";
       indexError = 5;
       // break;
     }
     if(!inputs['birthdate'].value)
     {
       error = "Vous devez entrer votre date de naissance";
       indexError = 3;
       // break;
     }
     if(document.querySelector('#checkbox1:checked') == null)
     {
       error = "Vous devez vérifier que vous acceptez les termes et conditions.";
       indexError = 6;
       // break;
     }
   }


   if(error)
   {
    e.preventDefault();
    wrongAnswer.innerHTML = error;//code temporaire
    const blocInput = document.querySelectorAll('.modal-body .formData');
    //blocInput.style.border = "2px solid red";
    const errorMessage = document.createElement("p");
    console.log(blocInput[indexError]);
    console.log(indexError);
    blocInput[indexError].appendChild(errorMessage);
    errorMessage.innerHTML = error;
    errorMessage.classList.add('error-message');
    //cibler l'input correspondant
    targetInput = blocInput[indexError].querySelector('input');
    targetInput.style.border = "2px solid red";


    /*
    for(i=0;i<eblock.length;i++){
      const errorMessage = document.createElement("p");
      console.log(eblock[i]);
      eblock[i].appendChild(errorMessage);
      errorMessage.innerHTML = error;
    }*/
  
    return false;
   }
   else{
    answer.innerHTML ="Merci ! Votre réservation a été reçue";
    e.preventDefault();
   }

});
