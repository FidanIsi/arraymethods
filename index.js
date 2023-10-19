//exercise-1

// let numbers = [-3, 8, 7, 6, 5, -4, 3, 2, 1]
// numbers.sort(function(a, b){return a - b})
// console.log(numbers)

//exercise-2

// let A = [1, 2, 3]
// let B =[100, 2, 1, 10]

// let C = A.concat(B)
// function removeDuplicates(data) {
//   return data.filter((value, index) => data.indexOf(value) === index)
// }

// console.log(removeDuplicates(C))

//exercise-3

// let arr = [NaN, 0, 15, false, -22, '',undefined, 47, null];

// function removeFalsey(arr) {
// 	return arr.filter((k) => {
// 		if (k) {
// 			return k;
// 		}
// 	});
// }
// console.log(removeFalsey(arr));

//exercise-4

// const myArr = [
//   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, 
//   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, 
//   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} 
// ]

// showArrayByTitle()

// function showArrayByTitle() {
//   myArr.sort(function(a, b){
//     let x = a.title.toLowerCase();
//     let y = b.title.toLowerCase();
//     if (x < y) {return -1;}
//     if (x > y) {return 1;}
//     return 0;
//   })
// }

// for (let i = 0; i < myArr.length; i++) {
//   console.log(`${myArr[i].author} ${myArr[i].title} ${myArr[i].libraryID}`);
// }

//exercise-5

// const arr = [2,4,8,16,37]

// function factorChain(arr) { 
//   for (var i = 0; i < arr.length - 1; i++) {
//     if (arr[i+1] % arr[i] != 0) {
//       return false;            
//     }
//   }
//   return true;
// }

// console.log(factorChain(arr))




