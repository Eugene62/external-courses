"use strict"

const list = document.createElement('ul');
list.setAttribute('class','testUl');
const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');
const listItem3 = document.createElement('li');
const listItem4 = document.createElement('li');
const divForUl = document.createElement('div');

listItem1.innerText = "My Profile";
listItem2.innerText = "User Settings";
listItem3.innerText = "Help Center";
listItem4.innerText = "Log Out";

list.appendChild(listItem1);
list.appendChild(listItem2);
list.appendChild(listItem3);
list.appendChild(listItem4);

const menuContainer = document.getElementById("menuContainer");

const button = document.getElementById("buttonMenu");
const shevron = document.getElementById('shevron');

button.addEventListener('click', () => {
  shevron.classList.toggle('shevron_active')
    if(shevron.classList.contains('shevron_active') ) {
      menuContainer.appendChild(list);
    } else {
      list.remove();
    }
});