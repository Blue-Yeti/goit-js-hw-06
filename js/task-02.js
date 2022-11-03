const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients')

// const arr = []

// for (const i of ingredients) {
//   const tempLi = document.createElement('li')
//   tempLi.innerText = i;
//   tempLi.classList.add('item')
//   arr.push(tempLi)
// }

// ingredients.forEach(el => {
//   const tempLi = document.createElement('li')
//   tempLi.innerText = el;
//   tempLi.classList.add('item')
//   arr.push(tempLi)
// })

const arr = ingredients.map(el => {
  const tempLi = document.createElement('li')
  tempLi.innerText = el;
  tempLi.classList.add('item')
  return tempLi
})

ulEl.append(...arr)


// function digitalRoot(n) {
//   const nToStr = n.toString().split('')

//   if(nToStr.length === 1){
//     return Number.parseInt(nToStr[0])
//   } else {
//     const reduced = nToStr.reduce((total, element) => { return total + Number.parseInt(element) }, 0)
//     return digitalRoot(reduced)
//   }
// }
  
// console.log(digitalRoot(16));
// console.log(digitalRoot(116));
// console.log(digitalRoot(5434));




// var maxSequence = function (arr) {
//   if (arr.every(el => el > 0)) {
//     return arr.reduce((acc, el) => acc + el, 0)
//   }

//   if (arr.every(el => el < 0)) {
//     return 0
//   }


//   let results = []

//   let runs = 0
//   let starer = 0
//   let finisher = arr.length

//   while (runs < arr.length) {
//     for (let i = starer; i < arr.length; i += 1) {
//       results.push(arr.slice(i, finisher).reduce((acc, el) => acc + el, 0));
//       console.log(arr.slice(i, finisher), '==>' ,results[results.length-1]);

//     }
//     console.log('BOOM', Math.max(...results));
//     starer += 1;
//     runs += 1;
//   }


//   console.log('SECOND START');
//   runs = 0
//   starer = 0
//   finisher = arr.length

//   while (runs < arr.length) {
//     for (let i = starer; i < arr.length; i+=1) {
//       results.push(arr.slice(i, finisher).reduce((acc, el) => acc + el, 0));
//       console.log(arr.slice(i, finisher), '==>' ,results[results.length-1]);
//     }
//     console.log('BOOM', Math.max(...results));
//     finisher -= 1;
//     runs += 1;
//   }

//   console.log('THIRD START');
//   runs = 0
//   starer = 0
//   finisher = arr.length
//   while (runs < arr.length) {
//     for (let i = starer; i < arr.length; i+=1) {
//       results.push(arr.slice(i, finisher).reduce((acc, el) => acc + el, 0));
//       console.log(arr.slice(i, finisher), '==>' ,results[results.length-1]);
//     }
//     starer += 1;
//     finisher -= 1;
//     runs += 1;
//   }
//   return Math.max(...results)
// }

// var maxSequence = function(arr){
//   var max = 0;
//   var cur = 0;
//   arr.forEach(function(i){
//     cur = Math.max(0, cur + i);
//     max = Math.max(max, cur);
//   });
//   return max;
// }

// // console.log(maxSequence([4, 4, 4]));
// // console.log(maxSequence([-4,-4,-4]));
// // console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSequence([-2, 1, -3, 4, -1, 1, 1, -5, 4, 1, 1, -3, 4, 1, 1, -5, 4]));








// function bouncingBall(h,  bounce,  window) {

//   if (!(h > 0 && bounce > 0 && bounce < 1 && window < h)) {
//     return -1
//   }
//   let count = 0;
//   h = h
//   while(h > 0 && bounce > 0 && bounce < 1 && window < h){
//     count += 1;
//     h = h * bounce;
//     if (h > window) {
//       count += 1;
//     }
    
//   }
//    return count
//   }


// console.log(bouncingBall(30.0, 0.66, 1.5));
// console.log(bouncingBall(3.0, 1.0, 1.5));






// function tribonacci(signature,n){
//   if (n < 0 || n === 0) {
//     return []
//   }
//   let tribonacciList = [...signature]
//   let count = 3;
//   while (count < n) {
//     count += 1;
//     tribonacciList.push(tribonacciList[tribonacciList.length - 1] + tribonacciList[tribonacciList.length - 2] + tribonacciList[tribonacciList.length - 3]);
//   }

//   return tribonacciList
// }

// console.log(tribonacci([1, 1, 1], 10));
// console.log(tribonacci([1,2,3], 10));
// console.log(tribonacci([1,0,0], 10));




