// const api = `https://jsonplaceholder.typicode.com/photos`;

// const apicall = async () => {
//   try {
//     let respons = await fetch(api);
//     let data = await respons.json();
//     console.warn(data);

//     appendsFunc(data);
//   } catch (error) {
//     console.error(" ~ apicall ~ data:", error);
//   }
// };

// const appendsFunc = (data) => {
//   console.log(data);

//   let datashow = document.getElementById("info");
//   data &&
//     data.forEach((element) => {
//       let cardDiv = document.createElement("div");
//       let img = document.createElement("img");
//       let id = document.createElement("h3");
//       let text = document.createElement("h1");

//       cardDiv.className = "card_div";
//       img.src = element.thumbnailUrl;
//       id.innerText = element.id;
//       text.innerText = element.title;

//       cardDiv.append(img, id, text);

//       datashow.append(cardDiv);
//     });
// };

// practic API

const api = `https://fakestoreapi.com/products`;

const apicoll = async () => {
  try {
    const respons = await fetch(api);
    const data = await respons.json();
    console.log(data);

    apiFunction(data);
  } catch (error) {
    console.log(error);
  }
};

const apiFunction = (data) => {
  console.log(data);

  const data_div = document.getElementById("info");

  data &&
    data.forEach((element) => {
      let cardDiv = document.createElement("div");
      let img = document.createElement("img");
      let id = document.createElement("h3");
      let text = document.createElement("h4");
      let price = document.createElement("number");
      let description = document.createElement("h4");

cardDiv.className = "card_div";

img.src = element.image;
id.innerText = element.id;
text.innerText = element.title;
price.innerText = element.price;
description.innerText = element.description;

cardDiv.append(img,id,text,price,description)

data_div.append(cardDiv);

    });
};
