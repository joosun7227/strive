let val;
// val = document;

// val = document.baseURI //웹페이지의 절대경로를 반환//
// val = document.head; //head 태그를 반환//
// val = document.body; //body 태그를 반환//

// val = document.forms; //form 태그를 반환//
// val = document.forms[0].id; //form 태그를 반환//
// val = document.forms[0].classList; //form 태그를 반환//
// val = document.forms[0].className; //form 태그를 반환//

// val = document.scripts[4].getAttribute('src'); //script 태그를 반환//

const headerContainer = document.getElementById('header-container');
// headerContainer.style.display = 'none';
headerContainer.textContent = 'Hello World';
headerContainer.innerText = 'Inner Text';
headerContainer.innerHTML = '<span style="color: tan;">Inner HTML</span>';

const items = document.getElementsByClassName('list-group-item');
items[0].style.color = 'blue';
items[3].textContent = '하위!';
items[2].style.backgroundColor = 'yellow';

let lists = document.getElementsByTagName('li');
console.log(lists);

// lists.forEach((list) => {
//   console.log(list);
// })

lists =Array.from(lists);

lists.forEach((list, index) => {
  list.textContent = `${index}.list`;
})


const liOdd = document.querySelectorAll('li:nth-child(odd)');
liOdd.forEach((li)=>{
  li.style.backgroundColor = 'gray';
})

console.log(liOdd);