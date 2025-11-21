//Automatic Slideshow
window.onload = function () {
    const images = [
        "images/logo.png",
        "images/AmberCanyon.png",
        "images/ACBottle.png",
        "images/MidnightGrove.png",
        "images/MGBottle.png",
        "images/SolarCitrus.png",
        "images/SCBottle.png",
        "images/RainforestMist.png",
        "images/RMBottle.png",
        "images/EBCap.png",
        "images/totebag.png"
    ];

    let index = 0;
    const slide = document.getElementById("slideshow");

    function changeImage() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        slide.src = images[index];
    }

    // Change every 5 seconds
    setInterval(changeImage, 5000);
};

