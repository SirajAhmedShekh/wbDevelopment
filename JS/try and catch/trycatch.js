

// promise took collback function and also took resolve and reject
// $ ()=>{}  // collback function

let ice_cream = new Promise((res,rej) => {
  let got_ice_cream = true;
if(got_ice_cream) res (got_ice_cream);
  else rej (got_ice_cream);
});

ice_cream.then(()=> {
  console.log('eat ice cream');
})
.catch(()=>{
  console.log('coll mommy');
});

// what if we get delay to get the response







