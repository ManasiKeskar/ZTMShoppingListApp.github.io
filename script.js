var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var shoppingList = document.getElementsByTagName("LI");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	addDeleteButton();
	checkForDeletedItems();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function markDone(event) {
	if (event.target.tagName === "LI" ) {
		event.target.classList.toggle("done");
	}
}

function addDeleteButton() {
	for(var i=0; i < shoppingList.length; i++) {
		var deleteButton = document.createElement("button");
		var txt = document.createTextNode("Remove");
		deleteButton.className = "delete";
		deleteButton.appendChild(txt);
		shoppingList[i].appendChild(deleteButton);
	}
}

function deleteListElement(event) {
	var listItem = event.target.parentNode;
	listItem.parentNode.removeChild(listItem);
}

function checkForDeletedItems() {
	var deleteItems = document.getElementsByClassName("delete");
	for(var i=0; i < deleteItems.length; i++) {
		deleteItems[i].addEventListener("click", deleteListElement);
	}
}

addDeleteButton();

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", markDone);

checkForDeletedItems();

