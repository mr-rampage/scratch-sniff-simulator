
// itch is an element
export default function start(itcher, itch)
{
    const handler = satisfactionDispatcher(itcher, getSatisfaction(itch));
    itcher.addEventListener("scratch-up", handler);
    itcher.addEventListener("scratch-down", handler);
}

function satisfactionDispatcher(itcher, numberOfScratches) {
    let scratches = 0;
    return () => {
        scratches += 1;
        const satisfied = scratches === numberOfScratches ? createSatisfied() : null;
        if (satisfied !== null)
            itcher.dispatchEvent(satisfied);
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