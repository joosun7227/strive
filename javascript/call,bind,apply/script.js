// // call();
// const fullName = function(city, country){
//   console.log(this.firstName + ' ' + this.lastName,city, country);
// }

// const person1 = {
//   firstName: 'John',
//   lastName: 'Doe',
// }

// fullName.call(person1, "Oslo", "Norway"); // call
// fullName.apply(person1, ["Oslo", "Norway"]); // apply


// bind();
function func(language){
  if(language === 'kor'){
    console.log(`language : ${this.korGreeting}`);  
  } else {
    console.log(`language : ${this.engGreeting}`);
  }
}

const greeting = {
  korGreeting: '안녕하세요',
  engGreeting: 'Hello',
}

const boundFunc = func.bind(greeting)('kor');
boundFunc('eng');
boundFunc('kor');