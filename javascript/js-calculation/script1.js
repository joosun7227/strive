const num1 = 20;
const num2 = 10;

let val;
let min;
// 기본 연산
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;
val = num1 ** num2;

// Math Object
val = Math.E;
val = Math.PI;
val = Math.round(2.4); //반올림
val = Math.ceil(2.4); //올림
val = Math.floor(2.4); //내림
val = Math.sqrt(64); //제곱근
val = Math.abs(-3); //절대값
val = Math.pow(2,3); //제곱
min = Math.min(-1,33,4,5,6,7,8,9,10); //최소값
val = Math.max(2,33,4,5,6,7,8,9,10); //최대값
val = Math.random(); //랜덤값
val = Math.floor(Math.random() * 20 + 1); //1~20 랜덤값


console.log(val);
console.log(min);