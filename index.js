// Iteration 1: Names and Input
let hacker1 = "João";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Markus";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names,${
      (hacker1.length + hacker2.length) / 2
    } characters`
  );
}

// Iteration 3: Loops
// 3.1
let firstName = "John";
let nameInUpper = "";
for (let i = 0; i < firstName.length; i++) {
  nameInUpper += firstName[i].toUpperCase() + " ";
}
console.log(nameInUpper);

// 3.2
let nameReverse = "";
for (let i = firstName.length - 1; i >= 0; i--) {
  nameReverse += firstName[i];
}
console.log(nameReverse);

// 3.3

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
