const products = [
  { name: "Chasham E Badoor", image: "images/product1.jpg", price: "$50" },
  { name: "Afsaneh", image: "images/product2.jpg", price: "$60" }
];
function displayProducts() {
  const list = document.querySelector('.product-list');
  products.forEach(product => {
    const item = document.createElement('div');
    item.className = 'product-item';
    item.innerHTML = `
      <img src="\${product.image}" alt="\${product.name}">
      <h3>\${product.name}</h3>
      <p>\${product.price}</p>
    `;
    list.appendChild(item);
  });
}
document.addEventListener('DOMContentLoaded', displayProducts);
