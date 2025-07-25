
const bodys = document.querySelector('body');

// api

const api = `https://fakestoreapi.com/products`;

const ApiCall = async () => {

try{
  const response = await fetch(api);
  const data = await response.json();
  UserInterface (data);
} catch (error){
  console.log(error);
}

}

// window.onload = ApiCall()

const UserInterface = (value) => {

const AllData = document.querySelector('#alldata');

value?.forEach(element => {
  

}) 

}








