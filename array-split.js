const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const part = nums.slice(2, 5)
// console.log(part)
const remove = nums.splice(2, 4, 100, 101, 102, 103)
// console.log(remove)
// console.log(nums)
const together = nums.join("number ")
console.log(together);