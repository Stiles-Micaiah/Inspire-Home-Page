export default class Todo {
    constructor(data) {


        this.completed = data.completed
        this._id = data._id
        this.description = data.description || " "
        this.user = data.user

    }

    get Template() {

        return `
        <li>
            <div class="form-group">
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="${this._id}" ${this.completed ? 'checked' : ''}>
                    <label class="custom-control-label" for="${this._id}" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">
                        <span class= "${this.completed ? "completed-checkbox-thing" : "" }">${this.description}</span>
                    </label>
                    <button onclick = "app.controllers.todoController.removeTodo('${this._id}')" class = "btn btn-sm btn-primary rounded-pill">Ditch</button>
                </div>
            </div>
        </li>`

    }
}

