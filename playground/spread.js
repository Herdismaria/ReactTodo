function add (a, b) {
  return a + b;
}

console.log(add(3, 1));

var toAdd = [9, 5];

console.log(add(...toAdd));


var groupA = ['Jen', 'cory'];
var groupB = ['vicram'];

var final = [...groupB, ...groupA];

console.log(final);

var person = ['andrew', 4];
var person2 = ['peter', 5];

function greeting (name, age) {
  console.log(name +' is ' + age + ' year old');
}

greeting(...person);
greeting(...person2);

var names = ['Jen', 'cory'];
var final = ['vicram', ...names];
