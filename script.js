const buyBtn = document.getElementById('buyBtn');
const checkoutForm = document.getElementById('checkoutForm');
const orderForm = document.getElementById('orderForm');
const orderSuccess = document.getElementById('orderSuccess');
const orderNumber = document.getElementById('orderNumber');

buyBtn.addEventListener('click', () => {
    checkoutForm.classList.remove('hidden');
    window.scrollTo({ top: checkoutForm.offsetTop, behavior: 'smooth' });
});

orderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const randomOrderNum = 'ORD' + Math.floor(100000 + Math.random() * 900000);
    orderNumber.textContent = randomOrderNum;
    
    orderForm.classList.add('hidden');
    orderSuccess.classList.remove('hidden');
});