/*
 Given an array nums, write a function to move all 0's to the end of it while maintaining
 the relative order of the non-zero elements.

 For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

 Note:

 You must do this in-place without making a copy of the array.
 Minimize the total number of operations.

 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var zeroCount = 0

    for(var i = 0; i < nums.length; i++) {

        if(nums[i] === 0) {
            zeroCount++
        } else {
            nums[i - zeroCount] = nums[i]

            if(zeroCount !== 0) nums[i] = 0
        }

        if(nums.length - i <= zeroCount) {
            nums[i] = 0
        }
    }
};

var testArr = [0, 1, 0]
moveZeroes(testArr)
console.log(testArr)