const searchInput = document.querySelector(".search-input");
const boxes = document.querySelectorAll(".box");
const cart = document.querySelector(".nav-cart");
const backToTop = document.querySelector(".foot-panel1");
const signIn = document.querySelector(".nav-signin");
const locationBox = document.querySelector(".nav-address");


let cartItems = [];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        let productName = box.querySelector("h2").innerText;

        cartItems.push(productName);

        updateCart();
    });
});


function updateCart() {
    cart.innerHTML = `
        <i class="fa-solid fa-cart-shopping"></i> Cart (${cartItems.length})
    `;
}


cart.addEventListener("click", () => {
    if (cartItems.length === 0) {
        alert("🛒 Your cart is empty!");
    } else {
        let message = "🛒 Cart Items:\n\n";
        cartItems.forEach((item, index) => {
            message += `${index + 1}. ${item}\n`;
        });
        alert(message);
    }
});


searchInput.addEventListener("input", () => {
    let value = searchInput.value.toLowerCase();

    boxes.forEach((box) => {
        let title = box.querySelector("h2").innerText.toLowerCase();

        if (title.includes(value)) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
});


backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


signIn.addEventListener("click", () => {
    alert("🔐 Sign-in feature coming soon!");
});


locationBox.addEventListener("click", () => {
    alert("📍 Location feature coming soon!");
});


const heroLink = document.querySelector(".hero-message a");

heroLink.addEventListener("click", () => {
    alert("Redirecting to Amazon India 🇮🇳 (demo only)");
});