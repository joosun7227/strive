// window.onload = function(){
//   // 문서가 load 될 때 이 함수를 실행
//   let text = document.getElementById('text');

//   //아이디가 'text'인 요소를 return
//   text.innerText = 'HTML 문서 loaded';
// }

// const aElement = document.querySelector('a');
// aElement.addEventListener('click',()=> {
//   alert('a 태그가 클릭됐습니다');
// })

// const buttonElement = document.querySelector('.btn2');
// buttonElement.addEventListener('click',(event)=> {
//   let val;
//   val = event.target;
//   val = event.target.id;
//   val = event.target.className;
//   val = event.target.classList;
//   val = event.type;

//   //윈도우로부터의 거리 좌표
//   val = event.clientY;

//   //대상 요소로부터의 거리 좌표
//   val = event.offsetY;
//   console.log(val);
// })

// const submitBtn = document.querySelector('.submit-btn');



// //EVENT
// submitBtn.addEventListener('click',hanleEvent);
// submitBtn.addEventListener('dblclick',hanleEvent);
// submitBtn.addEventListener('mousedown',hanleEvent);
// submitBtn.addEventListener('mouseup',hanleEvent);
// submitBtn.addEventListener('mouseenter',hanleEvent);
// submitBtn.addEventListener('mouseleave',hanleEvent);
// submitBtn.addEventListener('mousemove',hanleEvent);
// form.addEventListener('submit',hanleEvent);

// FORM
const form = document.querySelector('form');
const emailiInput = document.getElementById('email');
const title = document.querySelector('h2');

//FORM EVENT
form.addEventListener('submit',hanleEvent);


function hanleEvent(e){
  if(e.type === 'submit'){
    e.preventDefault();
  }
  // e.preventDefault();
  console.log(`Event Type:${e.type}`);
  // title.textContent = `MouseX:${e.offsetX} MouseY:${e.offsetY}`;
  title.textContent = e.target.email.value;

}