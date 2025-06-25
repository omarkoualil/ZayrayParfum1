const products = [
  {
    name: "عطر ",
    price: "50 درهم",
    desc: "رائحة ناعمة مستخلصة من زهور طبيعية.",
    img: "par1.png",
    whatsapp: "عطر "
  },
  {
    name: "عطر ",
    price: "50 درهم",
    desc: "رائحة نقية تدوم طويلًا، مثالية للأناقة.",
    img: "par2.png",
    whatsapp: "عطر "
  },

];

const container = document.getElementById("productContainer");

products.forEach(product => {
  container.innerHTML += `
    <div class="product-card">
      <img src="${product.img}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
        <div class="price">${product.price}</div>
        <a class="buy-btn" href="https://wa.me/212612805448?text=أرغب%20في%20شراء%20${encodeURIComponent(product.whatsapp)}">اطلب عبر واتساب</a>
      </div>
    </div>
  `;
});
