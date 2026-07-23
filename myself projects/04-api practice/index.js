const LoadTodoFormElement = document.querySelector('.load-todo-form');
const resultElement = document.querySelector('.result')
const InputId = document.querySelector('#todoId')
const InputValue = InputId.value


LoadTodoFormElement.addEventListener('submit', (event) => {
    event.preventDefault()

    fetch(`https://jsonplaceholder.typicode.com/todos/${InputId.value}`)
      .then((response) => {
        console.log('response:', response)

        return response.json()
      })
      .then((json) => {
        console.log(json)

        const {id, title, completed} = json

        resultElement.innerHTML = `
            <input
                id='todo-${id}'
                type='checkbox'
                ${completed ? 'checked' : ''}
                />
            <label for="todo-${id}">${title}</label>
        `
    })
})
