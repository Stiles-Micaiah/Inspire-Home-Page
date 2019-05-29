import QuoteService from "./quote-service.js";

//Private
let _quoteService = new QuoteService()

function drawQuote(){
    console.log("THE QUOTE MAN SAYS:", _quoteService.Quote)
    //debugger
    let quote = _quoteService.Quote
    let template = quote.Template
    document.getElementById('quote').innerHTML = template
}

//Public
export default class QuoteController {
    
    constructor() {
        _quoteService.addSubscriber('quote', drawQuote)
        _quoteService.getQuote()
    }
}
