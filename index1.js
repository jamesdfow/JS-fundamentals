// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(function(element){
//     return Math.pow(element, 2)
// })

// console.log(squares)

// function cube(element, 3)


//lines 11-30
// arrow functions = a concise way to write function expressions
//                                 good for simple functions that you use only once

// const hello = (name, age) => {console.log(`Hello ${name}`)
//                           console.log(`You are ${age} years old` )  };

// hello("James", 35)

// setTimeout( () => console.log("Hello"), 3000);

// const numbers = [1, 2, 3, 4, 5, 6];

// const squares = numbers.map((element) => Math.pow(element, 2));
// const cube = numbers.map((element) => Math.pow(element, 3));
// const evenNums = numbers.filter((element) => element % 2 === 0);
// const oddNums = numbers.filter((element) => element % 2 !== 0);
// const total = numbers.reduce((accumulator, element) => accumulator + element);

// console.log(total)






//lines 37 - 77
// object = A collection of related properties and/or methods
//                Can represent real world objects (people, products, places)
//                object = {key:value,
//                                 function()}


// const person1 = {
//     firstName: "James",
//     lastName: "Flower",
//     age: 35,
//     isEmployed: true,
//     sayHello: function(){
//         console.log("Hi, I am James")
//     },
//     sayBye: function(){
//         console.log("BYEEEEE")
//     },
//     eat: function(){
//         console.log("I love me some meats")
//     },
// }

// const person2 = {
//     firstName: "Loki",
//     lastName: "Flower",
//     age: 2,
//     isEmployed: false,
//     sayHello: function(){
//         console.log("Hi, I am a cat and I cannot talk")
//     },
//     sayBye: function(){
//         console.log("MEEEEOW")
//     },
//     eat: function(){
//         console.log("I will eat anything")
//     },
// }

// person2.eat();
// person1.sayBye();




//lines 82 - 102 THIS 
// this = reference to the object where THIS is used
//           (the object depends on the immediate context)

// const person1 = {
//     name: "James",
//     favFood: "beef",
//     sayHello: function() {console.log(`Hi, I am ${this.name}`)},
//     eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
// }

// const person2 = {
//     name: "Loki",
//     favFood: "carrots",
//     sayHello: function() {console.log(`Hi, I am ${this.name}`)},
//     eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
// }


// person1.sayHello();
// person2.sayHello();



//LINES 106 - 156 CONSTRUCTORS
// constructor = special method for defining the
//                          properties and methods of objects


// function Cat(name, color, temper, energy, sleepiness){
//     this.name = name,
//     this.color = color,
//     this.temper = temper,
//     this.energy = energy,
//     this.sleepiness = sleepiness
//         console.log(`Your cat's name is ${this.name}, he is ${this.color}, he is very ${temper}. He has a ${this.energy} energy and is also ${this.sleepiness}. Enjoy your new idiot. `)
// }

// const cat1 = new Cat ("Loki", "Black/white", "annoying", "HIGH", "very sleepy")

// Cat();

// function Car(make, model, year, color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color,
//     this.drive = function(){
//         console.log(`You drive the ${this.make} out front there boss?`)
//     }
// }

// const car1 = new Car("Dodge", "Charger", 2024, "red");
// const car2 = new Car("Ford", "F-250", 1998, "Black");
// const car3 = new Car("Honda", "Civic Type-R", 1994, "Silver");


// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);

// console.log(car3.make);
// console.log(car3.model);
// console.log(car3.year);
// console.log(car3.color);

// car1.drive();
// car2.drive();
// car3.drive();






//lines 163 - 194  are JS CLASSES
// class = (ES6 feature) provides a more structured and cleaner way to 
//               work with objects compared to traditional constructor functions
//               ex. static keyword, encapsulation, inheritance

// class Product {
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
//     displayProduct(){
//         console.log (`Product: ${this.name}`);
//         console.log(`Product: ${this.price.toFixed(2)}`);
//     }

//     calculateTotal(salesTax){
//         return this.price + (this.price * salesTax)
//     }
// }

// const saleuct3 = new Product("Boobs", 290.50);



// product3.displayProduct();

// const total = product3.calculateTotal(salesTax);
// console.log(`Total price (with tax): $${total.toFixed(2)}`);sTax = 0.05

// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 22.50);
// const prod





//Lines 200 - 252   are JS static
// static = keyword that defines properties or methods that belong 
//               to a class itself rather than the objects created
//               from that class (class owns anything static, not the objects)


// ex 1
// class MathUtil{
//     static PI = 3.14159;

//     static getDiameter(radius){
//         return radius * 2
//     }
//     static getCircumfrence(radius){
//         return 2 * this.PI * radius;
//     }
//     static getArea(radius){
//         return this.PI * radius * radius;
//     }
// }



// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumfrence(10));
// console.log(MathUtil.getArea(10));

// ex 2

// class User{
//     static userCount = 0;

//     constructor(username){
//         this.username = username;
//         User.userCount++;

//     }

//     sayHello(){
//         console.log(`Hello, my username is ${this.username}`)
//     }
// }

// const user1 = new User("James");
// const user2 = new User("Erica");
// const user3 = new User("Loki");



// user1.sayHello();
// user2.sayHello();
// user3.sayHello();




// lines 257 - 304  are JS Inheritance
// inheritance = allows a new class to inherit properties and methods 
//                         from an existing class. Helps with code reusability


//PARENT CLASS WITH DEFINING QUALITIES
// class Animal{
//     alive = true;

//     eat(){
//         console.log(`This ${this.name} is eating`)
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`)

//     }
// }


// //CHILDREN CLASS THAT TAKE ON THOSE PROPERTIES (SLEEPING/EATING) FROM PARENT
// class Rabbit extends Animal{
//     name = "rabbit";

//     run(){
//         console.log(`this ${this.name} is running`)
//     }

// }

// class Fish extends Animal{
//     name = "fish";
// }

// class Hawk extends Animal{
//     name= "hawk"
// }

// const rabbit= new Rabbit();
// const fish= new Fish();
// const hawk= new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();

// fish.eat();
// fish.sleep();

// rabbit.run();


//lines 307 - 369  are JS Super classes
// super = keyword is used in classes to call the constructor or
//               access the properties and methods of a parent (superclass)
//               this = this object
//               super = the parent

// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     move(speed){
//         console.log(`The ${this.name} moves at a speed of ${speed}mph`)
//     }
// }

// class Rabbit extends Animal {
//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }

//     run(){
//         console.log(`this ${this.name} can run`);
//         super.move(this.runSpeed);
//     }
// }

// class Hawk extends Animal {
//     constructor(name, age, flySpeed){
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }

//     fly(){
//         console.log(`this ${this.name} can fly`);
//         super.move(this.flySpeed);

//     }
// }

// class Fish extends Animal {
//     constructor(name, age, swimSpeed){
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }

//     swim(){
//         console.log(`this ${this.name} can swim`);
//         super.move(this.swimSpeed);
//     }
    

// }

// const rabbit = new Rabbit("Peter Cottontail", 1, 25);
// const fish = new Fish("Nemo", 2, 2512);
// const hawk = new Hawk("bootyman", 1, 70);

// rabbit.run();
// fish.swim();
// hawk.fly();



//lines 373 - 464  are JS GETTERS AND SETTERS

// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property

// class Rectangle{
//     constructor(width, height){
//     this.width = width;
//     this.height = height;
//     }

//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth;
//         }
//         else{
//             console.error("Width must be a positive number.")
//         }
//     }

//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight;
//         }
//         else{
//             console.error("Height must be a positive number.")
//         }
//     }

//     get width(){
//         return this._width.tofixed(1);
//     }
//     get height(){
//         return this._height.tofixed(1);
//     }

//     get area(){
//         return (this._width * this._height).tofixed(1);
//     }

// }

// const rectangle = new Rectangle(3, 4);

// rectangle.width = 5;
// rectangle.height = 6;

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area)

// class Person{

//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     set firstName(newFistName){
//         if(typeof newFistName === "string" && newFistName.length > 0){
//             this._firstName == newFistName;
//         }else{
//             console.error("First name must be a non-empty string.")
//         }
//     }
//     set lastName(newLastName){
//         if(typeof newLastName === "string" && newLastName.length > 0){
//             this._lastName == newLastName;
//         }else{
//             console.error("Last name must be a non-empty string.")
//         }
//     }
//     set age(newAge){
//         if(typeof newAge === "number" && newAge.length > 0){
//             this._age == newAge;
//         }else{
//             console.error("Age must be a non-negative number")
//         }
//     }
//         get firstName(){
//             return this._firstName
//     }
// }

// const person = new Person("James", 'Flower', 35);

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);