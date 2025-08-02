
// ============== login form js ================


const formsubmitData = async (e) => {
e.preventDefault();

const loginApi = `https://fakestoreapi.com/auth/login`;

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
window.location = "index.html";
localStorage.removeItem('token');
}

}catch(error){
console.log(error)
}

}


//  =============== login invoke js =====================

const changeToLogin = () => {
    window.location = 'Login.html'
}

const backFun = () => {
    window.location = 'index.html'
}

const chageToCart = () => {
    window.location = 'Cart.html'
}


const cartDisplay = () => {
    storeUI(cartArr)
}