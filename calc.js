function plus(nums) {
  var result = 0;
  for(i=0; i<nums.length; i++) {
    result += nums[i];
  }
  return result;
}

function minus(num1, nums) {
  var result = num1;
  result -= plus(nums);
  return result;
}

function times(nums) {
  var result = nums[0];
  for(i=1; i<nums.length; i++) {
    result *= nums[i];
  }
  return result;
}

function divide(num1, nums) {
  var result = num1;
  result /= times(nums);
  return result;
}

function multiple(num1, num2, items) {
  var result = [];
  if (num2) {
  } else {
  }
  return result;
}
