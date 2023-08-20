function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i= 0; i < array.length; i++){
    for (let j= (i +1);j < array.length; j++){
      if ((array[j]+ array[i]=== target))
        return (true)
    }
  } 
  return false;

    const numSet = new Set();
  
    for (let num of arr) {
      const complement = target - num;
  
      if (numSet.has(complement)) {
        return true;
      }
  
      numSet.add(num);
    }
  
    return false;
  }
  

/* 
  Write the Big O time complexity of your function here
  Time complexity: O(n^2)
*/

/* 
  Add your pseudocode here
  Function hasTargetSum(nums, target)
    For i = 0 to length of nums - 1
        For j = i + 1 to length of nums
            If nums[i] + nums[j] equals target
                Return true
            End If
        End For
    End For
    Return false
End Function

*/

/*
  Add written explanation of your solution here
  The `hasTargetSum` function examines each pair of numbers in an array and checks if their sum equals a given target number. It does this by comparing every number with all subsequent numbers. If a pair with the desired sum is found, the function returns `true`. If no such pair is found, it returns `false`. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  
console.log("Expecting: true");
console.log("=>", hasTargetSum([5, 7, 2, 8, 4], 12));

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([1, 3, 6, 9], 11));

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
