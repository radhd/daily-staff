
// =================== CLASS ===================
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// =================== CLASS INHERITANCE ===================

// class Student extends Person {
//     constructor(name, age, grade) {
//         super(name, age);
//         this.grade = grade;
//     }
// }

// =============== ENCAPSULATION =====================

// class BankAccount {
//     constructor(balance) {
//         this.balance = balance;        
//     }

//     showAccountBalance() {
//         console.log(`Account Number: ${this.balance}`);
//     }

//     addBalance(x) {
//         this.balance += x;
//         this.showAccountBalance();
//     }

//     withdrawBalance(x) {
//         this.balance -= x;
//         this.showAccountBalance();
//     }

// }

// let myBankAccount = new BankAccount(100);
// myBankAccount.withdrawBalance(100);



// =============== POLYMORPHISM =======================

// class Shape {
//     calculateArea() {
//         console.log("Calculate area");
//     }
// }

// class Circle extends Shape {
//     calculateArea() {
//         console.log("Calculate Area of circle");
//     }
// }

// class Rectanlge extends Shape {
//     calculateArea() {
//         console.log("Calculate Area of a Rectangle ")
//     }
// }

// let shape = new Shape();

// shape.calculateArea();
// let shapeCircle = new Circle();
// shapeCircle.calculateArea();



// ================= STATIC METHOD ==================
// class Calculator {
//     constructor(firstNumber, secondNumber) {
//         this.firstNumber = firstNumber;
//         this.secondNumber = secondNumber;
//     }

//     static addTwo(numbers) {
//         return numbers.firstNumber + numbers.secondNumber;
//     }
// }

// let calculate = new Calculator(10, 5);
// console.log(calculate);
// console.log(Calculator.addTwo(calculate));

// =================== GETTER and SETTER ===================

// class Temperature {
//     constructor(celsius) {
//         let _celsius = celsius;

//         this.getCelsius = function() {
//             return _celsius;
//         };

//         this.setCelsius = function(value) {
//             _celsius = value;
//         };

//         this.getFahrenheit = function() {
//             return (_celsius * 9 / 5) + 32;
//         };

//         this.setFahrenheit = function(value) {
//             _celsius = (value - 32) * 5/9;
//         };
//     }

//     get celsius() {
//         return this.getCelsius();
//     };

//     set celsius(value) {
//         this.setCelsius(value);
//     }

//     get fahrenheit() {
//         return this.getFahrenheit();
//     }

//     set fahrenheit(value) {
//         this.setFahrenheit(value);
//     }
// };

// const temp = new Temperature(25);
// console.log(temp);
// console.log(`${temp.fahrenheit}`)

// class ArrayHelper {

//     static reverseArray(arr) {
//         return arr.reverse();
//     }
// }

// console.log(ArrayHelper.reverseArray([1,2,3]));

// FACTORY PATTERNS

// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }
//     area() {
//         return Math.PI * this.radius ** 2;
//     }
// }

// function createCircle(radius) {
//     return new Circle(radius);
// }

// const circle1 = createCircle(5);
// console.log(circle1);
// console.log(circle1.area());
// const circle2 = createCircle(10);
// console.log(circle2);
// console.log(circle2.area());

// Shopping cart
// create class with properties: ID, name, price, quantity
// Implement method getTotalPrice() that calculate the total price for product (Price * Quantity)
// Create a ShoppingCart class that includes an array to store products
// Implement methods to add a product to the cart, remove a product by ID, and calculate the total price of all products in the cart.
// Extent the shoppingCart class by adding a method chekout() that logs the products in the cart and the total price. Implement a method emptyCart() to clear all products from the cart.

// class Product {
//     constructor(id, name, price, quantity) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity;
//     }

//     getTotalPrice() {
//         return this.price * this.quantity
//     }
// }

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    storeProducts(product) {
        this.products.push(product);  
    }

    checkout(){
        let totalPrice = 0;
        this.products.forEach(product => {
            totalPrice += product.price * product.quantity;
        });
        console.log(totalPrice); 
    }

    removeProductById(id) {
        const index = this.products.findIndex(product => product.id === id);
        if(index !== -1) {
            this.products.splice(index, 1);
            console.log(`Product with ${id} id removed`);
        } else {
            console.log(`Product with ${id} not found`);
        }
    }

    emptyCart() {
        this.products = [];
    }
}

let p = new Product(1, "Xinkali", 2, 10); 
let y = new Product(2, "Yogurt", 1, 3);

let cart = new ShoppingCart();

cart.storeProducts(p);
cart.storeProducts(y);
console.log(cart.products[0].id); // -> name of the product
// cart.checkout(); Calculates total price in cart.
cart.checkout();
cart.emptyCart();
cart.checkout();
