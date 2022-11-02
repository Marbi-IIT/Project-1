const name = docment.getElementByID('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errrorEleemnt = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }

    if (messages.length > 0) {
        e.preventDefault()
        error.Element.innerText = messages.join(',')
    }
}