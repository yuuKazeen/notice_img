// script.js
let currentIndex = 0;
const images = [
];

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    const imgElement = document.getElementById('carousel-image');
    imgElement.src = images[currentIndex];
}

setInterval(showNextImage, 3000); 
