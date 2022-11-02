const form1 = document.getElementById('form1')
const name = document.getElementById('fullname')
const phone = document.getElementById('phone')
const email = document.getElementById('email')

form1.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function cehckInputs() {
    //get values
    const fullnameVaule = fullname.value
    const phoneVaule = phone.value
    const emailVaule = email.value

}