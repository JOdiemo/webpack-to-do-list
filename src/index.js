import './style.css';
import  Todos from "./todolist.js"
import thingsTodo from './applications.js';
alert("new onindex.js")
const todosList = new Todos();
thingsTodo(todosList)


const render = (list) => {
  const sortedTodos = list.sort((a, b) => a.index - b.index);
  const listContainer = document.querySelector('.todos');
  let listHtml = '';
  sortedTodos.forEach((todo) => {
    listHtml += ` <div class="item">
        <input type="checkbox" /><span> ${todo.description}</span>
    </div>`;
  });
  listContainer.innerHTML = listHtml;
};

render(todosList);