// let foo = 42
// foo = 'bar';
// foo = true;

// console.log(typeof foo);

// 원시타입
const name = 'han';

// 숫자
const age = 30;

// boolean
const hasjob  = true

// null
const car = null;

// undefined
let anything;

//symbol
const sym = Symbol();

//참조
// Array 배열
const hobbies = ['walking','books'];

// Object 객체
const address = {
  province : '경기도',
  city : '성남시'
}

console.log(typeof hobbies);
console.log(Array.isArray(hobbies));
console.log(Array.isArray(address));