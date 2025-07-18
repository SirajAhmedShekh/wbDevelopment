

// promise took collback function and also took resolve and reject
// $ ()=>{}  // collback function

// let ice_cream = new Promise((res,rej) => {
//   let gat_ice_cream = true;
// if(gat_ice_cream){
//    res (gat_ice_cream);
// }else {
//   rej (gat_ice_cream);}
// });

// ice_cream.then(()=> {
//   console.log('eat ice cream');
// })
// .catch(()=>{
//   console.log('call mommy');
// });

// what if we get delay to get the response



// API fetch consept.

const api= `https://jsonplaceholder.typicode.com/photos`;

// const Apicall = ()=>{
//   fetch(api) 
//   .then((res) => {return res.json()})
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// };

const apicall = async () => {
  try{
    let respons = await fetch(api);
    let data = await respons.json();
    console.warn(' ~ apicall ~ data:', data);
  } catch (error){
    console.warn(' ~ apicall ~ data:', error)
  }
};

// const appendsFunc =(data) => {
// let datashow = document.getElementById('info');
// data.forEach((element)=> {

//   let cardDiv = document.createElement('div');
//   let img = document.createElement('img');
// let id = document.createElement('h3');
// let = document.createElement('h1')


// cardDiv.className = 'card_div';
// img.src = element.thubnailurl;
// id.innerText = element.id;
// title.innerText = element.title;

// cardDiv.append(img,id,title);

// datashow.append(cardDiv);

// });
// };








