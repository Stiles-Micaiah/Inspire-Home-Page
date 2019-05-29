export default class Quote {
    constructor(data) {
        this.quote = data.quote.body,
        this.author = data.quote.author
    }

    get Template() {
        return `
        <h6>${this.author}</h6>
        <p>${this.quote}</p>
        `
    }
}


