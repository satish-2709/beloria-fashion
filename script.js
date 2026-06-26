let productName = "";

function openPopup(name, image) {
    productName = name;

    document.getElementById("popup").style.display = "flex";
    document.getElementById("popupTitle").innerText = name;
    document.getElementById("popupImage").src = image;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function orderWhatsapp() {

    let size = document.getElementById("size").value;
    let qty = document.getElementById("qty").value;

    let message =
`Hi BELORIA,

I want to order this product.

Product: ${productName}
Size: ${size}
Quantity: ${qty}`;

    let phone = "919959348883";

    window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
        "_blank"
    );
}