function add (a, b) {
  return a + b;
}

console.log(add(3, 1));

var toAdd = [9, 5];
console.log(add(...toAdd));

var groupA = ['Jen', 'Cory'];
var groupB = ['Vikram'];
var final = [3, ...groupA]

console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
//Hi Andrew, you are 25
var names = ['Mike', 'Ben'];
var finalTwo = ['Andrew', ...names];

function greetPerson (name, age){
  return "Hi " + name + ", you are " + age;
}

console.log(greetPerson(...person));
console.log(greetPerson(...personTwo));

finalTwo.forEach(function (name) {
  console.log('Hi ' + name);
});
