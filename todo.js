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
  todoContent.classList.add('todo-content');
  newTodo.appendChild(todoContent);

  // 完了 未着手ボタン
  const checkButton = document.createElement('button');
  checkButton.innerHTML = '□未着手';
  checkButton.classList.add('check-button');
  newTodo.appendChild(checkButton);

  // 削除ボタン
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '削除';
  deleteButton.classList.add('delete-button');
  newTodo.appendChild(deleteButton);

  todoList.appendChild(newTodo);
  // alert(`タスクに追加:${todoInput.value}`);
  // 入力フォームの値を消去
  todoInput.value = '';
};

// 追加ボタンをクリックでTodo追加
addButton.addEventListener('click', addTodo);

// EnterキーでTodo追加
todoInput.onkeydown = (e) => {
  if (e.keyCode == '13') addTodo()
}