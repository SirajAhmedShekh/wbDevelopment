
// ============== login form js ================

const loginApi = `https://fakestoreapi.com/sweets`;

const formsubmitData = async (e) => {
e.preventDefault();


// const loginApi = `http://localhost:3000/sweets`;
//http://localhost:3000
const email = document.querySelector("#username").value;  // problem
//console.log('🚀 ~ email:', typeof email);

const pass = document.querySelector("#password").value;
 //console.log('🚀 ~ pass:', typeof pass);

  /* 
    johnd -> username
    m38rmF$ -> pass    
    */

 let loginData = {
        username: email,    //  problem
        password: pass
    }

try{
let res = await fetch(loginApi, { 
  method:'POST',
  body:JSON.stringify(loginData),
  headers: {
    'content-type': 'application/json'}
})

let data = await res.json();
console.log('🚀 ~ data:', data);

localStorage.setItem('token', JSON.stringify(data.token));

if(storage){
window.location = "regestration.html";
localStorage.removeItem('token');
}

dataFun();

}catch(error){
console.log(error)
}

}

const dataFun = (value) => {

console,log(value)




}



