const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click',() => {
      nav.classList.add('active');
  })

 if (close) {
     close.addEventListener('click',() => {
      nav.classList.remove('active');
  })
}}

const select = document.getElementById("product-options");
const price = document.getElementById("product-price");

select.addEventListener("change", () => {
  const optionValue = select.value;
  price.textContent = optionValue;
});

