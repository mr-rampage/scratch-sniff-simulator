export default class ScratchSurface extends HTMLElement {
    constructor() {
        super();
        setupView(this);
    }
    
    connectedCallback()
    {
        setupEvents(this);
    }
}

function setupView(element) {
    const shadow = element.attachShadow({mode: "closed"});
    const text = document.createElement("span");
    text.textContent = "Hello World";
    shadow.appendChild(text);
    return shadow;
}
    
function setupEvents(element) {
    element.addEventListener('mousemove', handleMouseMove(element))
}

function createScratchUpEvent() {
    return new CustomEvent("scratch-up", {
        bubbles: true,
        composed: true,
        cancelable: false
    });
}

function createScratchDownEvent() {
    return new CustomEvent("scratch-down", {
        bubbles: true,
        composed: true,
        cancelable: false
    });
}

function createScratchEvent(change) {
    if (change > 0)
        return createScratchUpEvent()
    if (change < 0)
        return createScratchDownEvent()
    return null;
}

function handleMouseMove(element) {
    let lastPosition = -1;
    return function handler(e) {
        if (lastPosition >= 0) {
            const change = getDelta(lastPosition, e);
            const scratchEvent = createScratchEvent(change);
            if (scratchEvent != null)
                element.dispatchEvent(scratchEvent)
        }
        lastPosition = e.buttons > 0
            ? e.clientY
            : lastPosition;
    }
}

function getDelta(lastValue, {buttons, clientY})
{
    if (buttons == 0) return 0;
    return clientY - lastValue;
}