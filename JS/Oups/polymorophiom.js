class Vehicle {
    run(){
        console.log("Vahicle is runing");
        return 'Vahicle is runing'
    }
}

class car1 {
    run(){
        console.log("car is running");
    }
}

class truck {
    run(){
        console.log("truck is running");        
    }
}

let v1 = new Vehicle();
console.log(v1.run());
let v2 = new Vehicle();
console.log(v2.run());
let v3 = new Vehicle();
console.log(v3.run());


class Animal{
    speak(){
        console.log("Animal speaks");        
    }
}

class Dog extends Animal {
    speak(){
        console.log("Dog barks");        
    }
}

class Cat extends Animal {
    speak(){
        console.log("Cat meows");        
    }
}

function makesound(animal){
    animal.speak();
}

let dog = new Dog();
let cat = new Cat();

makesound(dog);


