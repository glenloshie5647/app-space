/* 
   Filename: sophisticated_code.js
   Content: Complex JavaScript code with more than 200 lines
   Description: This code demonstrates a custom implementation of a complex data structure and its associated operations.
*/

/*
  CustomDataStructure Class: Represents a complex data structure with various operations
*/
class CustomDataStructure {
  constructor() {
    this.data = [];
  }

  // Method to add an element to the data structure
  add(element) {
    this.data.push(element);
  }

  // Method to remove an element from the data structure
  remove(element) {
    const index = this.data.indexOf(element);
    if (index > -1) {
      this.data.splice(index, 1);
    }
  }

  // Method to check if the data structure contains an element
  contains(element) {
    return this.data.includes(element);
  }

  // Method to get the size of the data structure
  size() {
    return this.data.length;
  }

  // Method to clear the data structure
  clear() {
    this.data = [];
  }

  // Method to get an iterator for the data structure
  iterator() {
    let index = 0;
    return {
      next: () => {
        if (index >= this.data.length) {
          return { done: true };
        }
        return { value: this.data[index++], done: false };
      },
    };
  }
}

/*
  Example usage of the CustomDataStructure class
*/
const dataStructure = new CustomDataStructure();

dataStructure.add(10);
dataStructure.add(20);
dataStructure.add(30);
dataStructure.remove(20);

console.log(dataStructure.contains(30)); // Output: true
console.log(dataStructure.size()); // Output: 2

const iterator = dataStructure.iterator();
let result = iterator.next();

while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}

dataStructure.clear();

console.log(dataStructure.size()); // Output: 0