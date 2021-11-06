import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form')
const emailEl = document.querySelector('.email')
const massageEl = document.querySelector('.message')

formEl.addEventListener('input', handleInputChange)
formEl.addEventListener('submit', handleSubmit)
// ${ event.target.element.email.value }
// ${event.target.element.massege.value}
function handleSubmit(event) {
    event.preventDefault()
    console.log(`email: ${event.target.email.value} `)
    console.log(`message: ${event.target.message.value} `)

    event.target.reset()
    localStorage.removeItem('feedback-form-state')
}

const formObj = {}
function handleInputChange(event) {
    formObj[event.target.name] = event.target.value
    localStorage.setItem("feedback-form-state", JSON.stringify(formObj))
}

window.addEventListener('DOMContentLoadet', initForm)

function initForm() {
    const formFialds = JSON.parse(localStorage.getItem("feedback-form-state"))
    if (formFialds) {
        formObj.email = formFialds.email
        formObj.message = formFialds.email
        emailEl.value = formFialds.email
        massageEl.value = formFialds.message
    }
}