
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
      <input class="todo-list-item-checkbox" type="checkbox"></input>
      <label class="todo-list-item-text">${todoText}</label>
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

  // Filter buttons
  const FilterAllElement = document.querySelector('.filter-all')
  const FilterActiveElement = document.querySelector('.filter-active')
  const FilterCompletedElement = document.querySelector('.filter-completed')

  FilterAllElement.addEventListener('click', () => {
    // selected というclassを追加して、選択中を表すスタイルを適応する
    FilterAllElement.classList.add('selected')

    // 他のボタンの選択中状態を解除する
    FilterActiveElement.classList.remove('selected')
    FilterCompletedElement.classList.remove('selected')
  })

  FilterActiveElement.addEventListener('click', () => {
    // selected というclassを追加して、選択中を表すスタイルを適応する
    FilterActiveElement.classList.add('selected')

    // 他のボタンの選択中状態を解除する
    FilterAllElement.classList.remove('selected')
    FilterCompletedElement.classList.remove('selected')
  })

  FilterCompletedElement.addEventListener('click', () => {
    // selected というclassを追加して、選択中を表すスタイルを適応する
    FilterCompletedElement.classList.add('selected')

    // 他のボタンの選択中状態を解除する
    FilterAllElement.classList.remove('selected')
    FilterActiveElement.classList.remove('selected')
  })
  
}

// 読み込み完了後に、mainを実行する
window.addEventListener('load', main)
