let cartCount = 0;

function addToCart(itemName) {
    cartCount++;
    document.getElementById('cartCount').innerText = Items added: ${cartCount};
    alert(${itemName} added to cart!);
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function confirmOrder() {
    alert("Order Placed Successfully!");
    document.getElementById("order").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
    return false; // Prevent actual form submission
}
