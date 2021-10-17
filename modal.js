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
let error = [];
error[0] = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
error[1] = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
error[2] = "Veuillez renseigner une adresse email valide";
error[3] = "Vous devez entrer votre date de naissance";
error[4] = "Vous devez saisir une valeur numérique";
error[5] = "Vous devez sélectionner une option.";
error[6] = "Vous devez vérifier que vous acceptez les termes et conditions.";



//index de l'erreur
let indexError = 0;
//récupère l'objet écouté 
let inputs = this;
//tableau des champs en erreurs 
let errors = []; 


  
lenghtName = inputs["last"].value;
lenghtName = lenghtName.length;



lenghtFirstname = inputs["first"].value;
lenghtFirstname = lenghtFirstname.length;


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
   


  if(errors.length > 0)
  {
    e.preventDefault();
    let blocInput = document.querySelectorAll('.modal-body .formData');
    
    blocInput.forEach((input,index) => {
    let errorParagraph = input.querySelector(".error-message");
    if(errorParagraph)
    {
      errorParagraph.remove();
    }
    

      if(errors[index])
      {
        input.classList.add("error-form");
        let errorMessage = document.createElement("p");
        errorMessage.innerHTML = errors[index]; 
        input.appendChild(errorMessage);
        errorMessage.classList.add("error-message");
      }
      else
      {
        input.classList.remove("error-form");
      }


} );



    //debut de la boucle
    /*blocInput.forEach( function (el,index){
    


      const blocInput = document.querySelectorAll('.modal-body .formData');
      let a = error.findIndex(function(value)
      {
        return value;
      });

      //index de l'input cible
      b = indexOf(blocInput[index]);
    


      //let validInput = true;
      function sendErrorMessage(){
        targetInput = el.querySelector('input');
              targetInput.classList.add("error-form");
              let errorMessage = document.createElement("p");
              blocInput[a].appendChild(errorMessage);
              errorMessage.classList.add("error-message");
              errorMessage.innerHTML = error[a]; 
      }
      if(a == b)
      {
        //console.log(a);
        //console.log(a + "=>"+ error);
        sendErrorMessage();       
      }
      else 
      {
        targetInputError = el.querySelector('input');
        targetInput.classList.remove("error-form");
        errorMessage.classList.remove("error-message");
        targetInput.removeChild(errorMessage);
        //console.log(errorMessage);
        errorMessage.classList.add("test-message");
        alert('Erreurs corrigée');
      }
    });*/
    return false;
  }
  else{
    answer.innerHTML ="Merci ! Votre réservation a été reçue";
    //e.preventDefault();
    alert('test');
  }
});
