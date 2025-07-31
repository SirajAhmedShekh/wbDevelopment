
const api = 'https://api-database-1.onrender.com/ToDo';

async function myTodos(){

  let value = document.querySelector('#todos').value;
console.log(value)
  let objectData = {
    id: crypto.randomUUID(),
    text: value,
    isEdits:false,
    iscompleted: false,
  };

  try{
    const res = await fetch(api, {
      method: 'POST',
      body: JSON.stringify(objectData),
      headers: {
        'Content-type': 'application/json',
      },
    });

    appendData();
    document.querySelector('#todos').value = "";
  }catch(error){
    console.log(error);
  }
}

const appendData = async()=>{
  let data;
  try{
    const res = await fetch(api);
    data = await res.json(); 
  }catch (error){
    console.log(error);
  }
console.log(data)

}

const main_div = document.querySelector('#dataInfo');

main_div.innerHTML="";

data.forEach((el) => {

  let div = document.createElement('div');
  let id = document.createElement('h1');
  let text = document.createElement('p');
  let input = document.createElement('input');
  let checkBox = document.createElement('input');

  checkBox.type = 'checkBox';
  checkBox.name = 'checkBox';

let editbtn = document.createElement('button');
let deletbtn = document.createElement('button');






})



