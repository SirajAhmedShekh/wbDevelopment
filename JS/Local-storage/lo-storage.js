
let dataBase = JSON.parse(localStorage.getItem ("formData")) || [];

// let editCurrents = null;


/* 
object{
name: 'siraj'
}

json
{
"name" = "siraj"
}
*/


function formFunction(e){
e.preventDefault();

let name = document.querySelector('#userName').value;
let email = document.querySelector('#userEmail').value;
let pass = document.querySelector('#userPass').value;

if(name.length === 0 || email.length === 0 || pass.length === 0){
  alert("please fill the inputs!!!!");
  return
};
let personData ={
  id: Date.now(),
  name,
  email,
  pass,
}
dataBase.push(personData)

localStorage.setItem("formData", JSON.stringify(dataBase));
// UI();
document.querySelector('#userName').value="";
document.querySelector('#userEmail').value="";
document.querySelector('#userPass').value="";

}

function UI() {
  const mainDiv = document.querySelector('#infotable')
  
}






