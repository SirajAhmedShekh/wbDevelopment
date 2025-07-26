
const bodys = document.querySelector('body');

const Api_key_dog = 'live_blyry9aZxgg39Ngr4RiTcBw348IEiOlgb7rKZuniQtnV1N2v00PVrRkaH97J2fXF';

const api = `https://api.thedogapi.com/v1/breeds`;

const Apicall = async ()=>{

try{
let res = await fetch(api,{
  method:'GET',
  header:{
   "x-api-key": Api_key_dog
  }
 });

 let data = await res.json();

 Dogfuns(data);

}catch(error){
console.log(error)
}
}


const Dogfuns = (value)=>{
console.log(value)







}


bodys.addEventListener("load", Apicall());



