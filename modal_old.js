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
error.push("Veuillez entrer 2 caractères ou plus pour le champ du prénom");
indexError = 0;
errorIndex.push(0);
}



if(lenghtName < 2)
{
error.push("Veuillez entrer 2 caractères ou plus pour le champ du nom");
indexError = 1;
errorIndex.push(1);

}

///^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if(!/^\w+@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs['email'].value))
  {  
    error.push( "Veuillez renseigner une adresse email valide");
    indexError = 2;
    errorIndex.push(2);
    // break;
  }

    
    if(!inputs['birthdate'].value)
    {
      error.push( "Vous devez entrer votre date de naissance");
      indexError = 3;
      errorIndex.push(3);
      // break;
    }
  
     if((!inputs['quantity'].value))
     {
       error.push( "Vous devez saisir une valeur numérique");
       indexError = 4;
       errorIndex.push(4);
       // break;
     }
     if(!inputs['location'].value)
     {
       error.push( "Vous devez choisir une option.");
       indexError = 5;
       errorIndex.push(5);
       // break;
     }

     if(document.querySelector('#checkbox1:checked') == null)
     {
       error.push( "Vous devez vérifier que vous acceptez les termes et conditions.");
       indexError = 6;
       errorIndex.push(6);
       // break;
     }
   


   if(errorIndex.length > 0)
   {
    e.preventDefault();
    const blocInput = document.querySelectorAll('.modal-body .formData');
    //blocInput.style.border = "2px solid red";
    /*const errorMessage = document.createElement("p");
    console.log(blocInput[indexError]);
    console.log(indexError);
    blocInput[indexError].appendChild(errorMessage);
    errorMessage.innerHTML = error;*/
    blocInput.forEach( function (el,index)
    {
      console.log(index);
      const blocInput = document.querySelectorAll('.modal-body .formData');
      let a = errorIndex.findIndex(function(value)
      {
        return value == index;
      });

      if(a>0)
      {
        //console.log(error);
        //console.log(a + "=>"+ error);
        targetInput = el.querySelector('input');
        targetInput.classList.add("error-form");
        let errorMessage = document.createElement("p");
        blocInput[a].appendChild(errorMessage);
        errorMessage.classList.add("error-message");
        errorMessage.innerHTML = error[a];
      }

      else 
      {
        targetInput = el.querySelector('input');
        targetInput.classList.remove("error-form");
        errorMessage.classList.remove("error-message");
        targetInput.removeChild(errorMessage);
        errorMessage.classList.add("test-message");
        console.log(errorMessage + 'erreur résolue');
      }  
    });
    //errorMessage.classList.add('error-message');
    //cibler l'input correspondant

  
    return false;
   }
   else{
    answer.innerHTML ="Merci ! Votre réservation a été reçue";
    //e.preventDefault();
    alert('test');
    console.log('envoie validé');
   }

});
