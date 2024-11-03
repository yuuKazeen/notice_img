// script.js
let currentIndex = 0;
const images = [
    "202410282321542.png",
];

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    const imgElement = document.getElementById('carousel-image');
    imgElement.src = "image/" + images[currentIndex];
}

setInterval(showNextImage, 3000); 
