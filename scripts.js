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
        setInterval(swapImage, 3500);
    }

    // Products page hero – rotate body-wash bottles
    if (heroImg && heroImg.dataset.page === "products") {
        const heroImages = [
            { src: "RMBottle.png", alt: "Rainforest Mist body wash bottle" },
            { src: "MGBottle.png", alt: "Midnight Grove body wash bottle" },
            { src: "SCBottle.png", alt: "Solar Citrus body wash bottle" }
        ];

        let idx = 0;

        const rotateHero = () => {
            const item = heroImages[idx];
            heroImg.src = item.src;
            heroImg.alt = item.alt;
            idx = (idx + 1) % heroImages.length;
        };

        rotateHero();
        setInterval(rotateHero, 4000);
    }
}

// =======================
// "Are we open right now?" on Hours page
// =======================
function updateOpenStatus() {
    const el = document.getElementById("open-status");
    if (!el) return;

    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ...
    const minutes = now.getHours() * 60 + now.getMinutes();

    let open = false;

    // Hours (local browser time):
    // Mon–Thu: 10:00–18:00
    // Fri:     10:00–19:00
    // Sat:     11:00–17:00
    // Sun:     closed
    if (day >= 1 && day <= 4) { // Mon–Thu
        open = minutes >= 10 * 60 && minutes < 18 * 60;
    } else if (day === 5) { // Fri
        open = minutes >= 10 * 60 && minutes < 19 * 60;
    } else if (day === 6) { // Sat
        open = minutes >= 11 * 60 && minutes < 17 * 60;
    } else {
        open = false; // Sunday
    }

    if (open) {
        el.textContent = "We’re open right now! Come visit EarthBar Studio today.";
    } else {
        el.textContent = "We’re currently closed, but we’d love to see you during our next business hours.";
    }
}

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
