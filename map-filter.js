const numbers = [2, 3, 4, 5, 6]

// const result = numbers.map(function (elements) {
//     return elements * elements;
// })

// const result = numbers.map(x => x * x)
// console.log(result);

// // in map,inside function, 3 parameter can be passed
// numbers.map(function (elements, index, array) {
//     console.log(elements, index, array);
// })
const result = numbers.filter(x => x > 5);
console.log(result);
// filter gives an array result but find gives the immediate element as result
const isThere = numbers.find(x => x > 3)
console.log(isThere)