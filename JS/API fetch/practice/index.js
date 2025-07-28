
let Api = `https://fakestoreapi.com/products`


const datafetch = async () =>{
try {
  let res = await fetch(Api);
let data = await res.json();

storeUI(data);

} catch (error) {
  console.log(error)
}

}


const storeUI = (value) =>{

const dataInfo = document.querySelector('#dataInfo');

value?.forEach((element) => {

  console.log(element)

  let div = document.createElement('div');
 let pricingDiv = document.createElement('div');
  let id = document.createElement('p');
  let img = document.createElement('img');
  let title = document.createElement('h4');
  let price = document.createElement('p');
  let category = document.createElement('p');
  let description = document.createElement('p');
  let rate = document.createElement('p');
  let count = document.createElement('p');
  let button = document.createElement('button');

img.src = element.image;
id.innerText=element.id;
title.innerText=element.title;
price.innerText=element.price;
category.innerText=element.category;
description.innerText=element.description;
rate.innerText=element.rating.rate;
count.innerText=element.rating.count;
button.innerText= 'add';                 // problem

div.classList.add('card-div');
pricingDiv.classList.add('card-price-div');

pricingDiv.append(price, rate, count);

div.append(img, id, title, description, category, pricingDiv, button);

dataInfo.append(div);


});

}



// ============== form js ================


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

// https://fakestoreapi.com/carts
// https://fakestoreapi.com/products



// =============== cart js ==============

const bodys = document.querySelector('body');


const cartApi = `https://fakestoreapi.com/carts`;

const cartFunc = async () =>{

  try {
    let res = await fetch(cartApi);
    let cartData = await res.json();
console.log(cartData)
    Apifunc(cartData)
  } catch(error) {
    console.log(error);
  }

}


const Apifunc = (value) =>{

  value?.forEach((element) => {
// console.log(value)
let div = document.createElement('div')
let id = document.createElement('p');
let userid = document.createElement('p');
let date = document.createElement('p');
let productid = document.createElement('p');
let quantity = document.createElement('p');








  })

}

bodys.addEventListener("load", cartFunc());