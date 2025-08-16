// function car(make, model, year){
//     (this.make=make), (this.model = model), (this.year = year);
// }

// let car1 = new car ('toyota', 'toyota', '1995');
// let car2 = new car ('bmw', 'sclass7', '2025');

// console.log(car1);



// const person ={
// name: 'reena',
// myFunc: function(){
//     console.log(person.name);
// },
// };

// person.myFunc();



function player (name, team){
(this.name = name), (this.team = team);
}

let myPlayer = new Player ('Dhoni', 'chennaiSuperKing');
let myPlayer1 = new Player ('kohali', 'RoyalChallengerBangelor');
let Person2 = {
    name:'rahul',
};

let Person3 = {
    name: 'manoj',
};

function myFunction(age, city){
    this.age = age ;
    this.city = city;
}

myFunction.call(Person2, 24, 'pune');  // call method use commas ,,.

console.log(Person2);


let Person4 ={
    name: 'sejal',
};

let Person5 ={
    name: 'jignes',
};

function myFunction1 (age, city){
this.age = age;
this.city = city;
};

myFunction1.apply(Person5, [24, 'pune']);   // apply method use array [].

console.log(Person5);

// apply - Arrays
// call - commas


// bind construtor

let Person6 = {
    name:'suresh',
}

let Person7 = {
    name:'ramesh',
}

function myFunction3(age, city){
    this.age = age;
    this.city = city;
};

let myBind = myFunction3.bind(Person7, 24, 'pune');

myBind();