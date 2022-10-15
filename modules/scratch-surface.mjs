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

function createImage(url)
{
    // return an image
}

function setupView(element) {
    const template = document.getElementById(
        "scratch-surface-template"
    ).content;
    const shadow = element.attachShadow({mode: "closed"});
    shadow.appendChild(template.cloneNode(true));
    return shadow;
}
    
function setupEvents(element) {
    element.addEventListener('mousemove', handleMouseMove(element), navigator.vibrate(200))
    element.addEventListener('touchmove', handleMouseMove(element), navigator.vibrate(200))
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
    if (change < 0)
        return createScratchUpEvent()
    if (change > 0)
        return createScratchDownEvent()
    return null;
}

function notifyScratch(element, change, lastEvent) {
    const scratchEvent = createScratchEvent(change);
    if (scratchEvent !== null && scratchEvent.type !== lastEvent) {
        element.dispatchEvent(scratchEvent)
        return scratchEvent.type;
    }
    return lastEvent;
}

function handleMouseMove(element) {
    let lastPosition = -1;
    let lastEvent = null;
    return function handler(e) {
        if (lastPosition >= 0) {
            const change = getDelta(lastPosition, e);
            lastEvent = notifyScratch(element, change, lastEvent);
        }
        lastPosition = e.buttons > 0
            ? e.clientY
            : lastPosition;
        return false;
    }
}

function getDelta(lastValue, {buttons, clientY})
{
    if (buttons === 0) return 0;
    return clientY - lastValue;
}