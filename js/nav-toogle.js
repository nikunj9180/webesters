const toggle = document.getElementById('nav-toggle');
const items =document.getElementById('nav-items');

toggle.addEventListener('click', () => {
    items.classList.toggle("active");
});