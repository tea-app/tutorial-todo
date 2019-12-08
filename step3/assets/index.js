
const main = () => {
  const TodoInputElement = document.querySelector('.input-todo')
  const TodoListElement = document.querySelector('.todo-list')

  TodoInputElement.addEventListener('keyup', event => {
    // Enter Key以外が押された時は何もしない
    if (event.key !== 'Enter') {
      return
    }

    // Inputにテキストが入力されていない時は何もしない
    if (event.target.value === '') {
      return
    }

    // 日本語変換が完了していない時は何もしない
    if (event.isComposing) {
      return
    }

    // Enter Keyが押され、Inputにテキストが入力されている時の処理
    const todoText = event.target.value
    const TodoListItemElement = document.createElement('li')
    TodoListItemElement.className = 'todo-list-item'
    TodoListItemElement.innerHTML = `
      <span class="todo-list-item-text">${todoText}</span>
      <img class="todo-list-item-close" src="./assets/close-24px.svg">
    `
    TodoListElement.appendChild(TodoListItemElement)

    // Inputの要素を空にする
    event.target.value = ''
  })
}

// 読み込み完了後に、mainを実行する
window.addEventListener('load', main)
