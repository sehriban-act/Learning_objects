// call and apply are useful for borrowing methods from an object, while bind is useful for us to call functions later on with a certain context or certain this keyword.

const person = {
  name: 'salih',
  age: 7,
  gender: 'male',
  printPerson() {
    console.log(`${this.name} is ${this.age} years old`);
  },
  changeAge(num1, num2) {
    this.age += num1 + num2;
  }
};
const person2 = {
  name: 'nilufer',
  age: 9,
  gender: 'female'
};

person.changeAge(10, 10);
console.log(person);
person.changeAge.call(person2, 10, 10);
person.changeAge.apply(person2, [10, 10]);
const changeAge = person.changeAge.bind(person2, 10, 10);
changeAge();
console.log(person2);
