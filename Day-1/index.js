const data = require('./inputs');
const target = 2020;

var twoSum = (nums, target) => {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      for (h = j + 1; h < nums.length; h++) {
        if (nums[i] + nums[j] + nums[h] === target) {
          return [i, j, h];
        }
      }
    }
  }
};
console.log(data.length);
console.log(twoSum(data, target));

console.log(1);
