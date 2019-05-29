export default class Todo {
    constructor(data) {
        

        this.completed = data.completed
        this.id = data.id || " "
        this.description = data.description || " "
        this.user = data.user

    }

    get TodoTemplate() {
        return `
            <li>${this.description}<button onclick = "app.todoController.removeTodo(${this.id}) class = "btn btn-primary rounded-pill"<button></li>
            `
    }
}

