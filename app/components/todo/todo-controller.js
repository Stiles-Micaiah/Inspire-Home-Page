import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	let todos = _todoService.Todo
	let template = ''
	todos.forEach(todo => {
		template += todo.Template
	})
	document.getElementById('todo').innerHTML = template

}

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
}


export default class TodoController {
	constructor() {
		_todoService.getAllTodos()
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.addSubscriber('error', _drawError)

	}

	addTodo(event) {
		event.preventDefault();
		let form = event.target
		let todoData = {
			description: form.description.value
		}
		_todoService.addTodo(todoData)
		form.reset()
	}

	toggleTodoStatus(id) {
		_todoService.toggleTodoStatus(id)
	}

	removeTodo(id) {
		_todoService.removeTodo(id)
	}



}
