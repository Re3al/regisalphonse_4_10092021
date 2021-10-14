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
let errorIndex = []; 


  
lenghtName = inputs["last"].value;
lenghtName = lenghtName.length;



lenghtFirstname = inputs["first"].value;
lenghtFirstname = lenghtFirstname.length;


if(lenghtFirstname < 2)
{
error[0];
}



if(lenghtName < 2)
{
  error[1];//indexError = 1;

}

  if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs['email'].value))
  {  
    error[2];    //indexError = 2;
    // break;
  }

    
  if(!inputs['birthdate'].value)
  {
    error[3];    
      // break;
  }
  
  if((!inputs['quantity'].value))
    {
      error[4];      //indexError = 4;
      // break;
    }
  if(!inputs['location'].value)
  {
    error[5];    //indexError = 5;
    // break;
  }

  if(document.querySelector('#checkbox1:checked') == null)
  {
    error[6];    //indexError = 6;
    // break;
  }
   


  if(error.length > 0)
  {
    e.preventDefault();
    const blocInput = document.querySelectorAll('.modal-body .formData');
    
    //debut de la boucle
    blocInput.forEach( function (el,index){
      //console.log(index);
    console.log(error.length);


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
    });
    return false;
  }
  else{
    answer.innerHTML ="Merci ! Votre réservation a été reçue";
    //e.preventDefault();
    alert('test');
  }
});
