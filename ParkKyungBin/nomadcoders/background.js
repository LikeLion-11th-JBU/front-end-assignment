const images = ["0.img","1.img","2.img","3.img","4.img","5.img","6.img", "8.img", "9.img"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector("body");
window.onload = function(){
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundImage = `url(./img/${chosenImage})`; 
    body.style.backgroundSize = "1600px";
};