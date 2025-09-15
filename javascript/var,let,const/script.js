// var 여러번 선언가능 및 할당가능

// var greeting = "hello";
// console.log(greeting);

// var greeting = "hi";
// console.log(greeting);

// greeting = "how are you?";
// console.log(greeting);

// // let 중복선언 불가 재할당
// let greeting = "hello";
// console.log(greeting);

// // let greeting = "hi"; // 중복선언 불가
// // console.log(greeting);

// greeting = "HI";
// console.log(greeting);

// // const 중복선언 불가 재할당 불가
// const greeting = "hello";
// console.log(greeting);

// var 함수 스코프
// function fun(){
//   if(true){
//     var a = 'a';
//     console.log(a);
//   }
//   console.log(a);
// }

// fun();
// console.log(a); 함수를 벗어나서 문제가 생김

// // let,const 블록 스코프
// function fun(){
//   if(true){
//     let a = 'a';
//     console.log(a);
//   }
//   console.log(a);
// }
// fun();

// console.log(greeting);
// // var greeting = 'hello'; undefined가 나옴
// let greeting = 'hello'; error가 나옴
// const greeting = 'hello'; error가 나옴


func();
function func(){
  console.log('hoisting test');
}

//결국 const가 제일좋다. 블록 스코프이고 중복선언 불가 재할당 불가
// 중복선언이 필요한 경우에만 let 하면 좋다.

 