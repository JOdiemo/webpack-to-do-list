const thingsTodo = (todosList) => {
  alert("here")
  const sortedItems = todosList.list.sort((a, b) => a.index - b.index);
  const itemsContainer = document.querySelector('.todos');
  let todosHtml = '';
  sortedItems.forEach(({ completed, description, id }) => {
    const checkedTodo = completed ? 'checked' : '';
    const checkClass = completed ? 'checked' : '';
    todosHtml += `  <div class="items">
                        <div>
                            <input id="${id}" class="check" type="checkbox" ${checkedTodo} />
                            <input id="${id}" class="edit ${checkClass}" type="text" value="${description}" />
                        </div>
                        <button id="${id}" class="remove-btn"> <i class="fas fa-trash"></i></button>
                    </div>
    `;
  });
  itemsContainer.innerHTML = todosHtml;


  export default thingsTodo;