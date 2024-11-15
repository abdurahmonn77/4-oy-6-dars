
//1.
// let numbers = [34, 7, 23, 32, 5, 62];
// numbers.sort((a, b) => a - b); 
// console.log(numbers);


// 2.
// let arr = [2, 3, 4, 1, 4, 5, 6, 78, 9];
// function replaceBetween(arr) {
//     let total = 0;
//     for (let i = 3; i < 5; i++) {
//         total += arr[i];
//     }
//     console.log(total);
// }
// replaceBetween(arr);  


// 3.
// let arr = [1,1,1,2,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
// let newArr = []
// arr.forEach(value => {
//     if(!newArr.includes(value)) {
//         newArr.push(value)
//     }
// })
// console.log(newArr);

// 4.
// let arr = [1,32,4,917,574,285,34,53,98]
// let maxNum = arr[0]
// function findMaxNum(arr) {
//     let maxNum = arr[0]
//     let minNum = arr[0]
//     arr.forEach((value) => {
//         if(value > maxNum) {
//             maxNum = value
//         }
//     })
//     arr.forEach((value) => {
//         if(value < minNum) {
//             minNum = value
//         }
//     })
//     console.log(maxNum);
//     console.log(minNum);
// }
// findMaxNum(arr)

//6.
// const array = [1, 2, 3, 4, 5];
// array.slice().reverse().forEach(element => {
//     console.log(element);
// });


//7.
// let arr = [1,2,3,4,5,6,7,8,9,10]
// function findOdd(arr) {
//     let oddNum = []
//     let total = 0
//     arr.forEach((value) => {
//         if(value % 2 != 0) {
//             total += 1
//             oddNum.push(value)
//         }        
//     })
//     console.log(oddNum);
//     console.log(total);
// }
// findOdd(arr)


//8.
// let arr = [1,2,3,4,5,6,7,8,9,10]
// function findOdd(arr) {
//     let oddIndex = []
//     arr.forEach((value, index) => {
//         if(index % 2 != 0) {
//             oddIndex.push(value)
//         }        
//     })
//     console.log(oddIndex);
// }
// findOdd(arr)


// 9.
// let arr = [1,2,3,4,5,6,7,8,9,10]
// function findOdd(arr) {
//     let oddIndex = []
//     arr.forEach((value, index) => {
//         if(index % 2 != 0) {
//             oddIndex.push(value)
//         }        
//     })
//     console.log(Math.max(...oddIndex));
// }
// findOdd(arr)


// 10.
// let arr = [2, 3, 4, 1, 4, 5, 6, 78, 9];

// function replaceBetween(arr) {
//     let minIndex = arr.indexOf(Math.min(...arr)); 
//     let maxIndex = arr.indexOf(Math.max(...arr)); 
//     if (minIndex > maxIndex) {
//         [minIndex, maxIndex] = [maxIndex, minIndex];
//     }
//     arr.forEach((value, index) => {
//         if (index > minIndex && index < maxIndex) {
//             arr[index] = 0; 
//         }
//     });

//     console.log(arr);
// }

// replaceBetween(arr); 


//11.
// let randomNum = [12,345,8,23,7,67,8923,262652]
// function arrOdd(array) {
//     let arr = []
//     randomNum.forEach((value) => {
//         if(value % 2 != 0) {
//             arr.push(value)
//         }
//     })
//     console.log(arr);
// }
// arrOdd(randomNum) 


// 12.
// let arr = [1,2,3,4,5,6,7,8]
// let newArr = []
// arr.forEach(value => {
//     newArr.unshift(value)
// })
// console.log(newArr);


// 13.
// let arr = [1,1,1,2,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
// let newArr = []
// arr.forEach(value => {
//     if(!newArr.includes(value)) {
//         newArr.push(value)
//     }
//     newArr.sort((a, b) => a - b); 
// })
// console.log(newArr);


// 14.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function findMinAtEvenIndexes(arr) {
//     let evenIndexValues = [];
//     arr.forEach((value, index) => {
//         if (index % 2 === 0) { 
//             evenIndexValues.push(value);
//         }
//     });
//     console.log(Math.min(...evenIndexValues));
// }
// findMinAtEvenIndexes(arr); 
