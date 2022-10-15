
// itch is an element
export function start(itch)
{
    let resistance = itch.resistance;
    const handler = satisfactionDispatcher(itch, resistance);

    itch.addEventListener("scratch-up", handler);
    itch.addEventListener("scratch-down", handler);
}

function satisfactionDispatcher(itch, resistance) {
    let scratches = 0;
    return () => {
        scratches += 1;
        itch.dispatchEvent(scratches === resistance ? createSatisfied() : null)
    };
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