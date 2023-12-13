/* 
   Filename: complexProgram.js
   Description: This JavaScript code implements a complex program that performs various tasks, such as generating Fibonacci sequence, sorting an array, and calculating prime numbers.
   Author: Your Name
   Date: DD/MM/YYYY
*/

// Function to calculate the nth Fibonacci number using recursion
function fibonacci(n) {
  if (n <= 1)
    return n;
  else
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Function to generate the Fibonacci sequence up to a given number
function generateFibonacciSequence(limit) {
  var sequence = [];
  
  for (var i = 0; i < limit; i++) {
    sequence.push(fibonacci(i));
  }
  
  return sequence;
}

// Function to sort an array in ascending order using bubble sort algorithm
function bubbleSort(arr) {
  var len = arr.length;
  var swapped;
  
  do {
    swapped = false;
    
    for (var i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  
  return arr;
}

// Function to check if a number is prime
function isPrime(n) {
  if (n <= 1)
    return false;
    
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0)
      return false;
  }
  
  return true;
}

// Function to generate prime numbers up to a given limit
function generatePrimeNumbers(limit) {
  var primes = [];
  
  for (var i = 2; i <= limit; i++) {
    if (isPrime(i))
      primes.push(i);
  }
  
  return primes;
}

// Generate the Fibonacci sequence up to the 10th number
var fibonacciSequence = generateFibonacciSequence(10);
console.log('Fibonacci Sequence:', fibonacciSequence);

// Sort the Fibonacci sequence in ascending order
var sortedSequence = bubbleSort(fibonacciSequence);
console.log('Sorted Sequence:', sortedSequence);

// Generate prime numbers up to 50
var primeNumbers = generatePrimeNumbers(50);
console.log('Prime Numbers:', primeNumbers);

// ...Continue with other complex functionality and operations

// End of code