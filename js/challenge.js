const formElement = document.querySelector('form')

function formSubmit(e) {
    e.preventDefault()
    const userText = e.target.comma.value;
    if (userText.length > 0) {
        const commentContainer = document.getElementById('list')
        const newElement = document.createElement('li')
        newElement.textContent = userText
        commentContainer.append(newElement)
        e.target.reset()
    }
}

formElement.addEventListener('submit', formSubmit)

const minusElement = document.getElementById('minus')
const plusElement = document.getElementById('plus')
const counterElement = document.getElementById('counter')

const decrement = () => counterElement.textContent -= 1 


minusElement.addEventListener('click', decrement)

const increment = () => counterElement.textContent += 1 


plusElement.addEventListener('click', increment)




