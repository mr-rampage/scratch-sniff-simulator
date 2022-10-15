export default class ScratchSmell extends HTMLSpanElement
{
    constructor() {
        super();
        setUpView(this);
    }
}

function setupView(element) {
    element.textContent = "Smell Description";
}