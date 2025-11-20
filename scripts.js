// List of image URLs
const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
];

let index = 0;

function changeImage() {
    index++;
    if (index >= images.length) {
        index = 0; // restart at first image
    }
    document.getElementById("slideshow").src = images[index];
}

// Change image every 5 seconds (5000 ms)
setInterval(changeImage, 5000);
