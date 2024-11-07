let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  totalPrice += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");

  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - Rp ${item.price}`;
    cartItems.appendChild(li);
  });

  totalPriceElement.textContent = totalPrice;
}

function openWhatsApp() {
    const phoneNumber = "6282138555015"; // Ganti dengan nomor WhatsApp tujuan
    const message = "Halo, saya tertarik dengan produk Anda!"; // Ganti dengan pesan yang ingin dikirim
  
    // Format URL untuk membuka WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Buka WhatsApp di tab baru
    window.open(url, "_blank");
  }
  


