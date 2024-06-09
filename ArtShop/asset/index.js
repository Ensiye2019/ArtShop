

const addToCartBtn = document.querySelector('.add-to-cart-btn');
const overlay = document.getElementById('overlay');
const messageBox = document.querySelector('.message-box');
const okBtn = document.querySelector('.ok-btn');

addToCartBtn.addEventListener('click', () => {
    overlay.style.display = 'block';
    messageBox.style.display = 'block';
});

okBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    messageBox.style.display = 'none';
});