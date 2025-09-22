const listparent = document.querySelector('ul');
const list = document.querySelectorAll('li');
// 요소지우기 삭제
listparent.removeChild(list[1]);
// 부모요소.removeChild(삭제할요소);

//요소 재생성
listparent.appendChild(list[1]);
const newListItem = document.createElement('li');
newListItem.className = 'list-group-item';
newListItem.textContent = 'A third item';
listparent.appendChild(newListItem);

// 첫번쨰요소에 ID = 'A'넣기
list[0].setAttribute('id', 'A');

//요소 교체
const oldElement = document.getElementById('A');
const newElement = document.createElement('li');

newElement.textContent = 'Hi';
oldElement.parentNode.replaceChild(newElement, oldElement);



