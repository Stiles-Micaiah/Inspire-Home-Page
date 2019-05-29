export default class Todo {
    constructor(data) {


        this.completed = data.completed
        this._id = data._id
        this.description = data.description || " "
        this.user = data.user

    }

    get Template() {

        return `
            <li>${this.description}<button onclick = "app.controllers.todoController.removeTodo('${this._id}')" class = "btn btn-primary rounded-pill"<button></li>
            `

    }
}

