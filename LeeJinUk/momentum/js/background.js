const images = ["first.jpg", "second.jpg", "third.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

bgImage.style.objectFit = "cover";
bgImage.style.width = "100%";
bgImage.style.height = "100%";

document.body.appendChild(bgImage);
