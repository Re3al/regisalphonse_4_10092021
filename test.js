console.log('zone testé !!');


const submit = document.getElementById("testtt");
submit.addEventListener("submit", function(e)
{
  
  alert('Form envo');
});




errorIndex = [1,2,3];

let a = errorIndex.findIndex(function(value)
{
  return value == 3;
});


console.log(a);