const form1 = document.getElementById('form1')
const name = document.getElementById('name')
const phone = document.getElementById('phone')

form1.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});