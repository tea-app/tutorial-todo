
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
      <button class="todo-list-item-close"><img src="./assets/close-24px.svg"></button>
    `
    TodoListElement.appendChild(TodoListItemElement)

    // 削除するイベントの追加
    TodoListItemElement.querySelector('.todo-list-item-close').addEventListener('click', () => {
      TodoListItemElement.remove()
    })

    // Inputの要素を空にする
    event.target.value = ''
  })
}

// 読み込み完了後に、mainを実行する
window.addEventListener('load', main)
