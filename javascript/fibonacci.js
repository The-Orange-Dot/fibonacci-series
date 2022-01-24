function fibonacci(num) {
  let A = 1;
  let B = 0;
  let total = 1;

  for (let i = 1; i < num; i++) {
    total = A + B;
    B = A;
    A = total;
    // console.log(`${A} + ${B}`);
  }

  return num === 0 ? 0 : total;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("");

  console.log("Expecting: 89");
  console.log("=>", fibonacci(11));

  console.log("");

  console.log("Expecting: 144");
  console.log("=>", fibonacci(12));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

//We need 3 variables. One for the previous value(B), one for the next value(A), and one for the summed value(total).
//By using the for loop, we can determine how many times it will run.

//The loop will run first total(0) = A(1) + B(0), setting reassigning the total to 1 which reassigns B (the previous value)
//A's value. And A (the next value will be reassigned as the next value).

//This will iterate n number of times which is th argument in the function.
//The iteration that doesn't work is when n = 0 since the total value is initialized in the beginning at 1, which can be overwritten with a ternary operator.
