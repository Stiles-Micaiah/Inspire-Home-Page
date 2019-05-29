import Todo from "../../models/todo.js";

// @ts-ignore
const _todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/Micaiah/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {}
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn())
}

export default class TodoService {
	get TodoError() {
		return _state.error.map(c => new Todo(c))
	}

	get Todo() {
		return _state.todos.map(c => new Todo(c))

	}

	addSubscriber(propName, fn) {
		_subscribers[propName].push(fn)
	}

	getAllTodos() {
		_todoApi.get()
			.then(response => {
				let data = response.data.data.map(t => new Todo(t))
				_setState('todos', data)
			})
 	}


	addTodo(todoData) {
		_todoApi.post('', todoData)
			.then(res => {
				this.getAllTodos()
			})
			.catch(err => _setState('error', err.response.data))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		let todoActive = todo.activeStatus = !todo.activeStatus
		_todoApi.put(todoId, todo)
			.then(res => {

			})
			.catch(err => _setState('error', err.response.data))
	}

	removeTodo(id) {
		_todoApi.delete(id)
			.then(res => {
				this.getAllTodos
			})
	}

}
