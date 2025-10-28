// (
//   function(){
//     var aName = 'Barry';
//   }
// )();
// // IIFE 외부에서 변수에 접근 불가
// console.log(aName);



// // 원래 함수모양
// var result = function(){
//   var name = 'Barry';
//   return name;
// }();
// console.log(result);

// // IIFE 모양
// var result = (function(){
//   var name = 'Barry';
//   return name;
// })();
// console.log(result);

// // 에러나는 코드
// function (a,b){
//   return a+b;
// }

// 에러 안나게 하려면 2가지 방법이 있음
// 1. 선언 const를 통해서 변수명을 지정해주거나
// const sum = function (a,b){
//   return a+b;
// }


// 2. 즉시 실행함수로 만들어주거나
// (function (a,b){
//   return a+b;
// })

// 심화
const score = () => {
  let count = 0;
  return {
    current: () => {return count},
    increment: () => {count++},
    reset: () => {count = 0}
  }
}

console.log(score); // 함수호출됨
console.log(score().current()); // 0 나옴
score().increment(); // +1 해줌
console.log(score().current()); // 0 나옴 왜? 위에 let count = 0 이라서


// score2는 즉시 실행함수로 만들어줌 (() => {})()
const score2 = (() => {
  let count = 0;
  return {
    current: () => {return count},
    increment: () => {count++},
    reset: () => {count = 0}
  }
})();

console.log(score2); // 함수호출됨
