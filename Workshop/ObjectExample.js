function createPerson(name, gender, age) {
  return {
    name: name,
    gender: gender,
    age: age
  };
}
const data = ['emine,female,62', 'greg,male,36', 'susan,female,18', 'john,male,25', 'anna,female,25', 'ayşe,female,42'];
const people = [];

data.forEach(item => {
  const name = item.split(',')[0];
  const gender = item.split(',')[1];
  const age = item.split(',')[2];
  const person = createPerson(name, gender, age);
  people.push(person);
});
console.log(people);
let oldestWoman;
let max = 0;
people
  .filter(person => person.gender == 'female')
  .forEach(person => {
    if (person.age > max) {
      max = person.age;
      oldestWoman = person;
    }
  });

console.log(oldestWoman);
