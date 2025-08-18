// script.js
let currentIndex = 0;
const images = [
    "1f933facbc5e6f003087f5b23470a7d8-6063d3.jpg",
    "2b0120bfd93688a67f4d077dd4fcad7e-b2620a.png",
    "4d3f301cb0124de171b824128b2ddf90-3b3257.png",
    "4d071cca02d9a4dcbe0bf54049ca56e9-e02965.jpg",
    "9924fd843455ad7aa7aef7c8fb31975b-f27afa.jpg",
    "1463385c18a4f28c86cef9894ca1db29-8067e0.jpg",
    "202410261529014.png",
    "202410261529015.png",
    "202410261831988.png",
    "202410282321542.png",
    "a2277c2f96378e2360b200d0cd496316-d113c7.jpg",
    "b8c1ec82f3e2a917118a717fa7a9a187-86da88.jpg",
    "c4f38a60e85aa9b6f9a0dfe70d0250e3-01913e.jpg",
    "c93b287f2e9ff3d4f12cd54c27279c4f-a28287.jpg",
    "d46a9e535a6738cd3e3b5130f72b25d7-b6531a.png",
    "deae191ea3344ebb45a9c05d1e936e3f-a1e797.jpg",
    "eb37683d3a4cda1932dd5dd1561ec9af-cc29ac.gif",
    "f1a4d4e2845fab7087e2fbd57f268d48-aebbbe.jpg"
];

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    const imgElement = document.getElementById('carousel-image');
    imgElement.src = "image/" + images[currentIndex];
}

setInterval(showNextImage, 3000); 
