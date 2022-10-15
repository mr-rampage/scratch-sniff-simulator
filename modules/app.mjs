import ScratchSurface from "./scratch-surface.mjs";
import ScratchSmell from "./scratch-smell.mjs";
import prepareForScratching from './itch.mjs';
import createItch from "./scratch-model.mjs";
import getRandomSmell from "./scratch-smell.mjs";

customElements.define("scratch-surface", ScratchSurface);
customElements.define("scratch-smell", ScratchSmell, { extends: "span"});
document.addEventListener("DOMContentLoaded",main);

function main() {
    prepareForScratching(document.body, createItch());

    document.body.addEventListener('itch-satisfied', satisfactionReaction);

    document.body.addEventListener("scratch-up", presentSmells);
    document.body.addEventListener("scratch-down", presentSmells);
    
    document.body.addEventListener("scratch-up", vibrationSensation);
    document.body.addEventListener("scratch-down", vibrationSensation);
}

function satisfactionReaction() {
    const feedback = document.getElementById('itch')
    feedback.innerText = "Feels so goood!!";
}

function presentSmells() {
    const smellDatabase = [];
    const smell = getRandomSmell(smellDatabase);
    const smellContainer = document.getElementById("smells")
    smellContainer.appendChild(createSmell(smellContainer, smell));
}

function createSmell(parent, smell = "placeholder text") {
    const text = document.createElement("span");
    text.innerText = smell
    setTimeout(() => parent.removeChild(text), 2000);
    return text;
}

function vibrationSensation()
{
    navigator.vibrate(200);
}