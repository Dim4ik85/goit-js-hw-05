'use strict';
//const hotel = {
//  name: 'Resort Hotel',
//  stars: 5,
//  capacity: 100,
//};

//console.log(hotel.name); // Resort Hotel
//console.log(hotel['name']); // Resort Hotel
//console.log(hotel);

//let user = {
//  name: "John",
//  age: 30
//};

// перебор значений
//for (let value of Object.values(user)) {
//  alert(value); // John, затем 30
//}

//let numberNine = 9;
// let stringNine = "9";

// console.log(numberNine + stringNine);
// console.log("numberNine".length);

// let myName = "Nick";
// console.log(myName[1]);
// console.log(myName.slice(1,3));

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);
// console.log(getWage());//NaN

// const employee = {
//     baseSalary: 30000,
//     overtime: 10,
//     rate: 20,
//     getWage() {
//       return this.baseSalary + this.overtime * this.rate;
//     },
//   };
  
//   employee.getWage();
  
//Konstryktor
// const Hotel = function(name, stars, capacity) {
//     this.name = name;
//     this.stars = stars;
//     this.capacity = capacity;
//   };
  
//   // В результате вызова
//   const hotel = new Hotel('Resort Hotel', 5, 100);
//   // Получаем такой объект
//   console.log(hotel);
  // Hotel {name: "Resort Hotel", stars: 5, capacity: 100}
  
  const Hotel = function(name, stars, capacity) {
    this.name = name;
    this.stars = stars;
    this.capacity = capacity;
    this.guestCount = 0;
  
    this.greet = function(guestName) {
      console.log(`Hello ${guestName}, wellcome to ${this.name}`);
    };
  
    this.addGuests = function(amount) {
      this.guestCount += amount;
    };
  
    this.removeGuests = function(amount) {
      this.guestCount -= amount;
    };
  };
  
  const hotel = new Hotel('Sunrise Hotel', 5, 100);
  
  console.log(hotel);
  // Hotel {name: "Sunrise Hotel", greet: ƒ, addGuests: f, removeGuests: f}
  hotel.greet('Mango'); // Hello Mango, wellcome to Sunrise Hotel
  hotel.addGuests(50);
  hotel.removeGuests(50);
  