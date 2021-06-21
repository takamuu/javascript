const addButton = document.querySelector('.todo-button');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

const addTodo = () => {
  // 空欄ならタスクを追加しない
  if (todoInput.value === '') return;

  const newTodo = document.createElement('li');

  // タスク名
  const todoContent = document.createElement('span');
  todoContent.innerText = todoInput.value;
  todoContent.addEventListener('click', editTodo);
  todoContent.classList.add('todo-content');
  newTodo.appendChild(todoContent);

  // 完了 未着手ボタン
  todoList.appendChild(newTodo);
  const checkButton = document.createElement('button');
  checkButton.addEventListener('click', switchState);
  checkButton.innerHTML = '□未着手';
  checkButton.classList.add('check-button');
  newTodo.appendChild(checkButton);

  // 削除ボタン
  const deleteButton = document.createElement('button');
  deleteButton.addEventListener('click', deleteTodo);
  deleteButton.innerHTML = '削除';
  deleteButton.classList.add('delete-button');
  newTodo.appendChild(deleteButton);

  // 上記内容をlistへ追加
  todoList.appendChild(newTodo);
  // 入力フォームの値を消去
  todoInput.value = '';
};

const switchState = (e) => {
  let checkButton = e.target;

  if (!checkButton.classList.contains('complete')) {
    checkButton.innerHTML = '完了';
    checkButton.classList.add('complete');
  } else {
    checkButton.innerHTML = '□未着手';
    checkButton.classList.remove('complete');
  }
};

const deleteTodo = (e) => {
  const todoList = e.target.closest('li');
  todoList.remove();
};

const saveTodoContent = (e) => {
  const itemToSave = e.target;
  const textValue = itemToSave.value;
  if (textValue !== '') {
    itemToSave.parentNode.textContent = textValue;
  }
};

const editTodo = (e) => {
  const itemToEdit = e.target;

  // 編集要のテキストフィールドに置き換える
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.classList.add('editbox');
  input.setAttribute('value', itemToEdit.textContent);
  itemToEdit.textContent = '';
  itemToEdit.appendChild(input);

  const editContent = itemToEdit.querySelector('.editbox');
  // フォーカスが外れた歳（編集完了後）にフィールドを除去するイベントを追加
  editContent.addEventListener('blur', saveTodoContent);
};

// 追加ボタンをクリックでTodo追加
addButton.addEventListener('click', addTodo);

// EnterキーでTodo追加
todoInput.onkeydown = (e) => {
  if (e.keyCode == '13') addTodo()
}