// scripts.js
// Handles: footer year, home slideshow, products hero, product grid/table,
// add-product form, and "open now" status on Hours page.

// =======================
// Utility: set current year
// =======================
function setCurrentYear() {
    const span = document.getElementById("year");
    if (span) {
        span.textContent = new Date().getFullYear();
    }
}

// =======================
// Slideshow / Hero logic
// =======================
function initSlideshow() {
    const slideshowImg = document.getElementById("slideshow");
    const heroImg = document.getElementById("hero-image");

    // Home page slideshow – promo images only
    if (slideshowImg) {
        const homeImages = [
            {
                src: "SCPromo.png",
                alt: "Introducing Solar Citrus promotional image"
            },
            {
                src: "Collection.png",
                alt: "EarthBar Holiday Collection with free tote bag"
            },
            {
                src: "totebag.png",
                alt: "EarthBar canvas tote bag"
            }
        ];

        let index = 0;

        const swapImage = () => {
            const item = homeImages[index];
            slideshowImg.src = item.src;
            slideshowImg.alt = item.alt;
            index = (index + 1) % homeImages.length;
        };

        swapImage();
        setInterval(swapImage, 5000);
    }

    // Products page hero – rotate products
    if (heroImg && heroImg.dataset.page === "products") {
        const heroImages = [
            { src: "RMBottle.png", alt: "Rainforest Mist body wash bottle" },
            { src: "MGBottle.png", alt: "Midnight Grove body wash bottle" },
            { src: "SCBottle.png", alt: "Solar Citrus body wash bottle" },
            { src: "ACBottle.png", alt: "Amber Canyon body wash bottle" },
            { src: "RainforestMist.png", alt: "Rainforest Mist Bar" },
            { src: "MidnightGrove.png", alt: "Midnight Grove Bar" },
            { src: "SolarCitrus.png", alt: "Solar Citrus Bar" },
            { src: "AmberCanyon.png", alt: "Amber Canyon Bar" },
            { src: "totebag.png", alt: "Tote Bag" },
            { src: "EBCap.png", alt: "Earth Bar Cap" }
        ];

        let idx = 0;

        const rotateHero = () => {
            const item = heroImages[idx];
            heroImg.src = item.src;
            heroImg.alt = item.alt;
            idx = (idx + 1) % heroImages.length;
        };

        rotateHero();
        setInterval(rotateHero, 5000);
    }
}

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

// =======================
// Products data
// =======================
const products = [
    // BAR SOAPS
    {
        sku: "EB-AC-BAR",
        name: "Amber Canyon Bar",
        category: "Bar",
        type: "Amber Canyon",
        price: 8.99,
        image: "AmberCanyon.png"
    },
    {
        sku: "EB-MG-BAR",
        name: "Midnight Grove Bar",
        category: "Bar",
        type: "Midnight Grove",
        price: 8.99,
        image: "MidnightGrove.png"
    },
    {
        sku: "EB-RM-BAR",
        name: "Rainforest Mist Bar",
        category: "Bar",
        type: "Rainforest Mist",
        price: 8.99,
        image: "RainforestMist.png"
    },
    {
        sku: "EB-SC-BAR",
        name: "Solar Citrus Bar",
        category: "Bar",
        type: "Solar Citrus",
        price: 8.99,
        image: "SolarCitrus.png"
    },

    // BOTTLES
    {
        sku: "EB-AC-BOTTLE",
        name: "Amber Canyon Body Wash",
        category: "Bottle",
        type: "Amber Canyon",
        price: 14.99,
        image: "ACBottle.png"
    },
    {
        sku: "EB-MG-BOTTLE",
        name: "Midnight Grove Body Wash",
        category: "Bottle",
        type: "Midnight Grove",
        price: 14.99,
        image: "MGBottle.png"
    },
    {
        sku: "EB-RM-BOTTLE",
        name: "Rainforest Mist Body Wash",
        category: "Bottle",
        type: "Rainforest Mist",
        price: 14.99,
        image: "RMBottle.png"
    },
    {
        sku: "EB-SC-BOTTLE",
        name: "Solar Citrus Body Wash",
        category: "Bottle",
        type: "Solar Citrus",
        price: 14.99,
        image: "SCBottle.png"
    },

    // ACCESSORY
    {
        sku: "EB-TOTE",
        name: "EarthBar Canvas Tote",
        category: "Accessory",
        type: "Tote Bag",
        price: 12.0,
        image: "totebag.png"
    }
];

// =======================
// Rendering: product grid
// =======================
function renderProductGrid() {
    const grid = document.getElementById("product-grid");
    if (!grid) return;

    grid.innerHTML = "";

    products.forEach((p) => {
        const card = document.createElement("article");
        card.classList.add("product-card");

        const imgSrc = p.image || "logo.png";

        card.innerHTML = `
            <img class="product-thumb" src="${imgSrc}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="small-text">${p.category} • ${p.type}</p>
            <p class="price">$${p.price.toFixed(2)}</p>
        `;

        grid.appendChild(card);
    });
}

// =======================
// Rendering: table view
// =======================
function renderProductTable() {
    const tableBody = document.querySelector("#product-table tbody");
    if (!tableBody) return;

    tableBody.innerHTML = "";

    products.forEach((p) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${p.sku}</td>
            <td>${p.name}</td>
            <td>${p.category}</td>
            <td>${p.type}</td>
            <td class="right">$${p.price.toFixed(2)}</td>
        `;

        tableBody.appendChild(tr);
    });
}

// =======================
// Form handling
// =======================
function initProductForm() {
    const form = document.getElementById("product-form");
    if (!form) return;

    form.addEventListener("submit", (evt) => {
        evt.preventDefault();

        const sku = document.getElementById("sku").value.trim();
        const name = document.getElementById("name").value.trim();
        const category = document.getElementById("category").value.trim();
        const type = document.getElementById("type").value.trim();
        const priceValue = document.getElementById("price").value;

        if (!sku || !name || !category || priceValue === "") {
            alert("Please fill in all required fields.");
            return;
        }

        const price = Number(priceValue);
        if (isNaN(price) || price < 0) {
            alert("Please enter a valid price.");
            return;
        }

        // New products use the logo as a generic image
        const newProduct = {
            sku,
            name,
            category,
            type: type || "Custom",
            price,
            image: "logo.png"
        };

        products.push(newProduct);

        renderProductGrid();
        renderProductTable();

        form.reset();
    });
}

// =======================
// Init
// =======================
document.addEventListener("DOMContentLoaded", () => {
    setCurrentYear();
    initSlideshow();
    updateOpenStatus();
    renderProductGrid();
    renderProductTable();
    initProductForm();
});
