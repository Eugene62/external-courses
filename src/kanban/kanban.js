"use strict"

const list = document.createElement('ul');
const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');
const listItem3 = document.createElement('li');
const listItem4 = document.createElement('li');

listItem1.innerText = "My Profile";
listItem2.innerText = "User Settings";
listItem3.innerText = "Help Center";
listItem4.innerText = "Log Out";

list.appendChild(listItem1);
list.appendChild(listItem2);
list.appendChild(listItem3);
list.appendChild(listItem4);

const menuContainer = document.getElementById('menuContainer');

function createNewList(){
  console.log("createNewList");
};

function showMenu(){
  console.log("showMenu");
}

const button = document.getElementById("buttonMenu");

const showList = () => menuContainer.appendChild(list);

button.addEventListener('click', showList);