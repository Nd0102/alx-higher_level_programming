#!/usr/bin/node

function factorial(n) {
  if (isNaN(n) || n < 0) {
    return 1; // Return 1 for NaN or negative numbers (as per your requirement)
  }
	
  if (n === 0) {
    return 1;
  }
 
  return n * factorial(n - 1);
  }
	
const arg = Number(process.argv[2]); 
console.log(factorial(arg));
