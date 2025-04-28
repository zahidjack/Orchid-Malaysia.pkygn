const buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Please complete your payment to KBZ Pay (09777581733) and upload your payment screenshot!");
        // Future - Redirect to checkout form
    });
});