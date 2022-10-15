
// itch is an element
export function start(itch)
{
    const resistance = itch.resistance;
    const scrathes = 0;
    itch.addEventListener("scratch-up", () => {})
    itch.addEventListener("scratch-down", () => {})
}

function createSatisfied() {
    return new CustomEvent("itch-satisfied", {
        bubbles: true,
        composed: true,
        cancelable: false
    });
}

function getSatisfaction(itch) {
    switch (itch.resistance) {
        case "low" : return 3;
        case "medium" : return 6;
        case "high" : return 10;
    }
    
}