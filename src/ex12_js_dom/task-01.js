
const imgBox = document.querySelector('.imgBox');
const sliders = imgBox.getElementsByTagName('img');

let i = 0;

function nextSlide(){
  sliders[i].classList.remove('active');
  i = (i + 1) % sliders.length;
  sliders[i].classList.add('active');
}

function prevSlide(){
  sliders[i].classList.remove('active');
  i = (i - 1 + sliders.length) % sliders.length;
  sliders[i].classList.add('active');
}

function fillImageBox(){

  const content = [
    "image/1.jpg", 
    "image/2.jpg", 
    "image/3.jpg", 
    "image/4.jpg", 
  ];

  for (let i = 0; i < content.length; ++i) {
    let elem = document.createElement("img");
    elem.setAttribute("src", content[i]);
    elem.setAttribute("alt", "");
    document.getElementById("imgBx").appendChild(elem);
  }

    sliders[0].classList.add('active');
}

fillImageBox();