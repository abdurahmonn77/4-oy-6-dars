

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