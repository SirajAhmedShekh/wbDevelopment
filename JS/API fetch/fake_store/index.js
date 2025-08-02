

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


// https://fakestoreapi.com/carts
// https://fakestoreapi.com/products


