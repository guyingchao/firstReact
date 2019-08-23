// class Animal { 
//     speak() {
//       return this;
//     }
//     static eat() {
//       return this;
//     }
// }
  
//   let obj = new Animal();
//   console.log(obj.speak()); // Animal {}
//   let speak = obj.speak;
//   console.log(speak()); // undefined
  
//   Animal.eat() // class Animal
//   let eat = Animal.eat;
//   eat(); // undefined

// function Animal() { }

// Animal.prototype.speak = function() {
//   return this;
// }

// Animal.eat = function() {
//   return this;
// }

// let obj = new Animal();
// let speak = obj.speak;
// console.log(speak()); // global object

// let eat = Animal.eat;
// eat(); // global object
// function Animal(name) { 
//     this.name = name;    
// }
// Animal.prototype.speak = function() {
// console.log(this.name + ' makes a noise.');
// }
  
// class Dog extends Animal {
//     speak() {
//         super.speak()
//         console.log(this.name + ' barks.');
//     }
// }
  
//   var d = new Dog('Mitzie');
//   d.speak();// 'Mitzie barks.'

// function User() {
//     this.name = 'John';
  
//     setTimeout(function greet() {
//       console.log(`Hello, my name is ${this.name}`); // Hello, my name is John
//       console.log(this); // User {name: "John"}
//     }.bind(this)(), 1000);
//   }
  
//   const user = new User();
const obj = {
    a: () => {
        console.log('hello',this)
    }
}
obj.a()  //打出来的是window
  