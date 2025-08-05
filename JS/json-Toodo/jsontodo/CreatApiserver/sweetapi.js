// const { forEach } = require("json-server-auth");
// const { createElement } = require("react");

const loginApi = `http://localhost:3000/sweets`;

// const apicall=async () => {
// try{
//  let res = await fetch(loginApi);
//   let data = await res.json();
// // console.log(data)
//   dataFun();
// }
// catch(error){
//   console.log(error);
// }
// }

const apicall = () => {
  fetch(loginApi)
    .then((res) => res.json())
    .then((res) => dataFun(res))
    .catch((err) => console.log(err));
};


const dataFun = (value) =>{

  const mainDiv = document.querySelector('#infos');

  value?.forEach((element) =>{

    let cardDiv = document.createElement("div");
      let img = document.createElement("img");
      let id = document.createElement("h3");
      let text = document.createElement("h4");
      let price = document.createElement("number");
      let description = document.createElement("h4");
       let category =document.createElement("h3")
       let rate = document.createElement("h3")
       let count = document.createElement("h3")
      let rating = document.createElement("div")

       cardDiv.classList.add('cardDiv');

        rating.classList.add('rating');

       img.src= element.image;
       id.innerText=element.id;
       text.innerText=element.title;
       price.innerText=element.price;
       description.innerText=element.description;
       category.innerText=element.category;
        rate.innerText=element.rating.rate;
        count.innerText=element.rating.count;
     
      rating.append(rate,count);

      cardDiv.append(id, img, text, description, category, price, rating); 
      
      mainDiv.append(cardDiv);

  })

};
