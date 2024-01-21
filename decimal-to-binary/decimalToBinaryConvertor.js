function decimalToBinary(num) {
    // Base case
    if (num === 0) {
      return '';
    }
    
    // Recursive case
    return decimalToBinary(Math.floor(num / 2)) + (num % 2);
  }
  
  // Example usage
  console.log(decimalToBinary(10));  // Output: 1010
  console.log(decimalToBinary(42));  // Output: 101010
  console.log(decimalToBinary(128)); // Output: 10000000
  