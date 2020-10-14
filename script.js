let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let listItems = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  let li = document.createElement("li");
   li.appendChild(document.createTextNode(input.value));
   ul.appendChild(li);
   input.value = "";
   let btn = document.createElement("button");
   btn.appendChild(document.createTextNode("Delete"));
   li.appendChild(btn);
   btn.onclick = removeParent;
}

function afterClick() {
  if (inputLength() > 0) {
     createListElement();
  }
}

function afterKeydown(event) {
  const keyName = event.key;
  if (inputLength() > 0 && keyName === "Enter") {
    createListElement();
  }
}

button.addEventListener("click", afterClick);

input.addEventListener("keydown", afterKeydown);

ul.onclick = function(event) {
  let target = event.target;
  target.classList.toggle('done');
}

function listLength() {
  return listItems.length;
}

function deleteButton() {
  let btn=document.createElement("button");
  btn.appendChild(document.createTextNode("Delete"));
  listItems[i].appendChild(btn);
  btn.onclick=removeParent;
}

for (i=0; i < listLength(); i++){
  deleteButton();
}

function removeParent(event) {
  event.target.parentNode.remove();
}