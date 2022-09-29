export default class Todos {
  constructor () {
    this.list = localStorage.getItem('todoItem')
    ? JSON.parse(localStorage.getItem(todoItems))
    : []
  }


}