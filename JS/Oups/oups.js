
// ====== inheritence way ======

// class Car {
//     constructor(n, b) {
//         this.name = n;
//         this.brand = b;
//     }
//     showDetails() {
//         console.log(`${this.name},${this.brand}`);
//         // return 'hello'
//     }
// }

// class SUV extends Car {
//     constructor(x, y) {
//         super(x, y);
//         this.buyer = "siraj_Ahmad";
//     }
// }

// class miniSUV extends Car {
//     constructor(x, y) {
//         super(x, y);
//         this.type = "mini-suv";
//     }
// }

// let car2 = new miniSUV("audi", "audi");
// console.log(car2);


// ====== other way =====



// let Car = {
//     type:"mini-suv",
//     brand:"renault",
// };


// function printBrand(object){
//     console.log(object.brand);
// }

// printBrand(Car);

// // on of the similar example

// let car1 = {
//     type: "mini-suv",
//     brand: "renault",
//     PrintTheValue: function () {
//         console.log(this.brand); // renault====
//     },
// };

// car1.PrintTheValue();

// ========= incapsulation way =======

// ===== #count mins witch private =======
class Cars {
    #count;
    constructor(n, b){
        this.name = n ;
        this.brand = b ;
        this.#count = 100;
    }

getcount(){
    return this.#count;
}

}

let c11 = new Cars("Thar", "Mahindra");

console.log(c11, "this is the encapsulation");
console.log(c11.getcount());           



