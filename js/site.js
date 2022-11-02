const name = docment.getElementByID('name')
const phonenumber = document.getElementById('phone')
const form = document.getElementById('email')
const errrorEleemnt = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (Text.value === '' || Text.value == null) {
        messages.push('Name is required')
    }

    if (phonenumber.value.lenght <= 10) {
        messages.push('Phone number must be (---,---,----)')
    }

    if (messages.length > 0) {
        e.preventDefault()
        error.Element.innerText = messages.join(', ')
    }
})