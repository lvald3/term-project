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
//Hourse section of javascript 

    //The store and customer service hours
};
const StoreHours = {
    0: null,
    1: [10, 18],
    2: [10, 18],
    3: [10, 18],
    4: [10, 18],
    5: [10, 18],
    6: [11, 17],
};

    //The pickup hours
const pickupHours = {
    0: null,
    1: [11, 17],
    2: [11, 17],
    3: [11, 17],
    4: [11, 17],
    5: [11, 17],
    6: [13, 16],
};

    //formats the 24hour number into the regular hours with AM and PM
function HourFormat(h) {
        const period = h >=12 ? "PM" : "AM";
        const hour12 = h % 12 === 0 ? 12 : h % 12;
        return `${hour12}:00 ${period}`;
    }

    //Function for the store and customer service status
function updateStoreStatus() {
    const textTodayHours = document.getElementById("store-today-hours");
    const Hourstatus = document.getElementById("store-open-status");
    if (!Hourstatus || !textTodayHours) return;

    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const TodayHours = StoreHours[day];

    if (!TodayHours) {
        Hourstatus.textContent = "The Store and Cuostomer service is Closed today!"
        textTodayHours.textContent = "Today: Closed";
        return;
    }

    const Storeopen = TodayHours[0];
    const Storeclose = TodayHours[1];

    textTodayHours.textContent = `Todays Store and Customer service Hours: ${HourFormat(Storeopen)} - ${HourFormat(Storeclose)}`;

    if (hour >= Storeopen && hour < Storeclose) {
        Hourstatus.textContent = "The Stores and Customer service is OPEN right now!"
    } else{
        Hourstatus.textContent = "The Stores and Customer service is CLOSED right now!"
    }
}

    //function for the stores pickup status
function updatePickupStatus() {
    const textPickupTodayHours = document.getElementById("pickup-today-hours");
    const Pickupstatus = document.getElementById("pickup-open-status");
    if (!Pickupstatus || !textPickupTodayHours) return;

    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const TodayHours = pickupHours[day];


    if (!TodayHours) {
        Pickupstatus.textContent = "The Stores Pick-Up is Closed today!"
        textPickupTodayHours.textContent = "Today: Closed";
        return;
    }

    const Storeopen = TodayHours[0];
    const Storeclose = TodayHours[1];

    textPickupTodayHours.textContent = `Todays Pick-Up Hours: ${HourFormat(Storeopen)} - ${HourFormat(Storeclose)}`;

    if (hour >= Storeopen && hour < Storeclose) {
        Pickupstatus.textContent = "The Stores Pick-Up is OPEN right now!"
    } else{
        Pickupstatus.textContent = "The Stores Pick-Up is CLOSED right now!"
    }
};


document.addEventListener("DOMContentLoaded", function ()  {
    updateStoreStatus();
    updatePickupStatus();
});
