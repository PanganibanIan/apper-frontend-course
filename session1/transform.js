function transform(nums) {
    return nums.sort((a, b) => a - b).map((num)=> num*num);
  }
  
  const nums = [4,9,5,3,8]
  const sortedSquaredNums = transform(nums)
  console.log(sortedSquaredNums) // [9,16,25,64,81]