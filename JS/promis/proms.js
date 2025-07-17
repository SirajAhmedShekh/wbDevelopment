// console.log(1);
// console.log(2);
// console.log(3);

//  setTimeout (()=>{
//   console.log("hello");
//  },3000)
//  console.log(4);

//node version

/*let ice_cream = new Promise ((resolve , reject)=>{
  let got_ice_cream = true; // api se aa raha hai either wo true hoga ya false
if (got_ice_cream){
  resolve([(status=got_ice_cream), (payload = "done")]);
}else{
  reject([(status = got_ice_cream),(payload = "not done")]);
}
})

ice_cream.then((xyz) =>{
  console.log("got ice cream in hand",xyz);
})
.catch((err) => {
  console.log("coll mommy !",err)
})
  */

// old version

/*let api = "https://jsonplaceholder.typicode.com/todos";

fetch(api)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
  */

//   try{
//     console.log(Age);
//   } catch (err){
// console.log(err.name);
// console.log(err.message);
//   }

//   const a=2*4;
//   console.log(`important`,a);


// let Array = [1,2,3,4,5,6,7];

// let answer = Array.reduce((acc,curr)=>{
//   return acc + curr;
// },0)
// console.log(answer)

// let number = 25;
// let ans = math.pow(number,3);
// console.log(ans)

// let number2 =math.sqrt(number);

// let number3=25;

// console.log('without',number3 ** (1/2));

// let num1=7.1;
// console.log(Math.ceil(num1))

let num2=7.1;
console.log(Math.floor(num2));
