
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

  // all buttonが押されたときの処理
  FilterAllElement.addEventListener('click', () => {
    // selected というclassを追加して、選択中を表すスタイルを適応する
    FilterAllElement.classList.add('selected')

    // 他のボタンの選択中状態を解除する
    FilterActiveElement.classList.remove('selected')
    FilterCompletedElement.classList.remove('selected')

    // Todoアイテムを全て取得する
    const todoListItems = TodoListElement.querySelectorAll('.todo-list-item')

     // Todoアイテム一つ一つに対して処理を行う
    todoListItems.forEach(TodoListItemElement => {
      // invisibleというclassを削除して、アイテムを表示する
      TodoListItemElement.classList.remove('invisible')
    })
  })

  // active buttonが押されたときの処理
  FilterActiveElement.addEventListener('click', () => {
    // selected というclassを追加して、選択中を表すスタイルを適応する
    FilterActiveElement.classList.add('selected')

    // 他のボタンの選択中状態を解除する
    FilterAllElement.classList.remove('selected')
    FilterCompletedElement.classList.remove('selected')

    // Todoアイテムを全て取得する
    const todoListItems = TodoListElement.querySelectorAll('.todo-list-item')

    // Todoアイテム一つ一つに対して処理を行う
    todoListItems.forEach(TodoListItemElement => {
      // TodoListItemElementの中に、チェック済みの要素が存在するか？
      const isChecked = Boolean(TodoListItemElement.querySelector(':checked'))

      // チェック済みであれば、invisibleというclassを追加して、アイテムを隠す
      if (isChecked) {
        TodoListItemElement.classList.add('invisible')
      }
      // チェック済みでなければ、invisibleというclassを削除して、アイテムを表示する
      else {
        TodoListItemElement.classList.remove('invisible')
      }
    })
  })

  // completed buttonが押されたときの処理
  FilterCompletedElement.addEventListener('click', () => {
    // selected というclassを追加して、選択中を表すスタイルを適応する
    FilterCompletedElement.classList.add('selected')

    // 他のボタンの選択中状態を解除する
    FilterAllElement.classList.remove('selected')
    FilterActiveElement.classList.remove('selected')

    // Todoアイテムを全て取得する
    const todoListItems = TodoListElement.querySelectorAll('.todo-list-item')

    // Todoアイテム一つ一つに対して処理を行う
    todoListItems.forEach(TodoListItemElement => {
      // TodoListItemElementの中に、チェック済みの要素が存在するか？
      const isChecked = Boolean(TodoListItemElement.querySelector(':checked'))

      // チェック済みでなければ、invisibleというclassを削除して、アイテムを表示する
      if (isChecked) {
        TodoListItemElement.classList.remove('invisible')
      }
      // チェック済みであれば、invisibleというclassを追加して、アイテムを隠す
      else {
        TodoListItemElement.classList.add('invisible')
      }
    })
  })
  
}

// 読み込み完了後に、mainを実行する
window.addEventListener('load', main)
