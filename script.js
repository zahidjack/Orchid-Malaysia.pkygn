const products = [
    {name: "Elegant Dress 1", price: "45,000 MMK", img: "Image/product1.jpg"},
    {name: "Elegant Dress 2", price: "49,000 MMK", img: "Image/product2.jpg"},
    {name: "Elegant Dress 3", price: "55,000 MMK", img: "Image/product3.jpg"},
    {name: "Elegant Dress 4", price: "42,000 MMK", img: "Image/product4.jpg"},
    {name: "Elegant Dress 5", price: "50,000 MMK", img: "Image/product5.jpg"},
    {name: "Elegant Dress 6", price: "47,000 MMK", img: "Image/product6.jpg"},
];

const productGrid = document.getElementById('productGrid');
const checkoutForm = document.getElementById('checkoutForm');
const orderForm = document.getElementById('orderForm');
const orderSuccess = document.getElementById('orderSuccess');
const orderNumber = document.getElementById('orderNumber');

// Display products dynamically
products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <div class="product-info">
            <h2>${product.name}</h2>
            <p class="price">${product.price}</p>
            <button class="buy-btn">Buy Now</button>
        </div>
    `;
    productGrid.appendChild(card);
});

// Handle Buy Now button
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', () => {
        checkoutForm.classList.remove('hidden');
        window.scrollTo({ top: checkoutForm.offsetTop, behavior: 'smooth' });
    });
});

// Handle Form Submission
orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const randomOrderNum = 'ORD' + Math.floor(100000 + Math.random() * 900000);
    orderNumber.textContent = randomOrderNum;

    orderForm.classList.add('hidden');
    orderSuccess.classList.remove('hidden');
});