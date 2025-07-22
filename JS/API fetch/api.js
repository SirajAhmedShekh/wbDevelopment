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


const api = `https://jsonplaceholder.typicode.com/photos`;


const apicoll = async () => {
try{
  let respons = await fetch(api);
  let data = await respons.json(); 
 console.warn(data);

 appendsFunc(data);
  } catch (error) {
  console.error(" ~ apicoll ~ data:", error);
  }
};

const appendsFunc =(data) => {
  console.log(data);
  let datashow = document.getElementById("info");
data &&
data.forEach((element) =>{
  let cardDiv = document.createElement("div");
  let img = document.createElement("img");
  let id = document.createElement("h3");
let text = document.createElement("h1");

cardDiv.className = "card_div";

img.src= element.thumbnailurl;
id.innerText = element.id;
text.innerText = element.title;

cardDiv.append(img,id,text);

datashow.append(cardDiv);

});

};



