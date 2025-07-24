
let counts = 0;

const btn_1 =document.getElementById('button_1');

const btn_2 =document.getElementById('button_2');

let countUpdate  = document.getElementById('countUpdate');

function data() {
countUpdate.append(counts);  
};

btn_1.addEventListener('click', function(){

countUpdate.innerHTML="";
counts++;
countUpdate.innerText = counts ;

});

btn_2.addEventListener('click', function() {

if (counts === 0){
  return
};

countUpdate.innerHTML = '';
counts--;
countUpdate.innerText = counts ;

});






