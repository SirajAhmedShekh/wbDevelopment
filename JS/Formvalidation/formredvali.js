function myRadioFunc(e) {
e.preventDefault();

let radioData = document.myRadio.content;
console.log(radioData);
for(let i = 0 ; i< radioData.length; i++){

if(radioData[i].checked === true){
    return true ;
}
}
document.getElementById("Massage").innerHTML = "please select anyone"
return false ;


}