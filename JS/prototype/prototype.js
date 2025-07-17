// let arr = [1,2,3,4]

// arr.pop()   //delet of end.

// Array.prototype.बाहर=function (value) {
// let index = this.length -1;
// this[index] = value;
// delete this [index]
// this.length= index ;
// };
// arr.बाहर();
// console.log(arr)


// arr.push(5);

// Array.prototype.चलबे =function(siraj){
// let index= this.length;
// this[index] = siraj;
// };
// arr.चलबे(5);
// console.log(arr)

// arr.shift();    // delet of start.

// Array.prototype.पहलेनिकल=function(){
// if(this.length===0){
//   return undefined;
// }
// let firstelement = this[0];

// for(let i = 0 ; i < this.length-1;i++){
//   this[i] = this[i+1];
// }

// delete this[this.length-1];
// this.length -= 1;

// return firstelement;
// };
// arr.पहलेनिकल();
// console.log(arr);


let arr2 = [2,3,4]

// arr.unshift(5);  // add of first

Array.prototype.पहलेआप =function(...value){
 
let newlength = this.length + value.length;

for(let i=newlength-1; i >= value.length;i--){
this[i] = this[i-value.length];
}


for(let i=0 ; i < value.length ; i++){
  this[i] = value[i];
}

return this.length;

  };
  arr2.पहलेआप(1);
  console.log(arr2)
  






