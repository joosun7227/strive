// // shallow copy
// const aArray = [1,2,3];

// // shallow copy with spread operator
// const bArray = [...aArray, 4];
// console.log('aArray', aArray);
// console.log('bArray', bArray);
// console.log('aArray is bArray', aArray === bArray);

// // shallow copy with object.assign
// const cArray = Object.assign([], bArray);
// console.log('cArray', cArray);
// console.log('bArray is cArray', bArray === cArray);

// // Nested Arrays and Objects
// cArray.push([5,6,7]);
// console.log('cArray', cArray);
// const dArray = [...cArray, 10];
// console.log('dArray', dArray);
// dArray[4].push(8);
// console.log('cArray', cArray);
// console.log('dArray', dArray);

//얕은 동결
const aObject = {
  "a":"a",
  "b":"b",
  "cObject":{"a":1, "b": 2}
}

Object.freeze(aObject);
aObject.a = "c";
console.log('aObject', aObject);
