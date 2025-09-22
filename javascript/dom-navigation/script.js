let val;
const list = document.querySelectorAll('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

// console.log('list',list);
// console.log('listItem',listItem);

val = list[0].childNodes;
// val = list[0].childNodes[0];
// val = list[0].childNodes[0].nodeType;
// //NodeType 1: Element
// //NodeType 2: Attribute (deprecated)
// //NodeType 3: Text
// //NodeType 8: Comment
// //NodeType 9: Document
// //NodeType 10: DocumentType

// //children elemnet nodes 반환
// val = list[0].children; // HTML collection 반환 (line break 제외)
// val = list[0].children[0];
// list[0].children[1].textContent = '두번째';

// // firstChild
// val = list[0].firstChild;

// val = list[0].firstElementChild;
// // list.firstChild === list.childNodes[0]

// // lastchild
// val = list[0].lastChild;
// // list.lastChild === list.childNodes[list.childNodes.length - 1]
// val = list[0].lastElementChild;

// // child요소 count
// val = list[0].childElementCount;

// // parent node 반환
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // next sibling 반환
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// // previous sibling 반환
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;
for ( let node of list[0].childNodes){
  console.log(node);
}

console.log('val',val);

// const Array = [1,2,3];


// console.log(Array.map);
// console.log(list.childnodes.map);