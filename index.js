function hasTargetSum(array, target) {
  // Write your algorithm here
  const hashTable = {};

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];

    if (complement in hashTable) {
      return true;
    }

    hashTable[array[i]] = i;
  }

  return false;
}

/*
  Write the Big O time complexity of your function here
*/

/*
  Add your pseudocode here
  // Create an empty hash table
// For each element in the array:
     a. Calculate the complement (target - element)
     b. If the complement is in the hash table, return true
     c. Add the element and its index to the hash table
// Return false (if no two elements sum to the target)

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
