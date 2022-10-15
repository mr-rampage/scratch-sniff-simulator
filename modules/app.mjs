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
    const smellDatabase = [{"name": "good", "strength": "high"}, {"name": "bad", "strength":"low"}, {"name": "yucky", "strength":"medium"}];
    const smell = getRandomSmell(smellDatabase);
    const smellContainer = document.getElementById("smells")
    smellContainer.appendChild(createSmell(smellContainer, smell));
}

function createSmell(parent, smell = "placeholder text") {
    const text = document.createElement("span");
    text.classList.add('smell');
    text.style.left = randomX() + "vw";
    text.innerText = smell.name

    if (smell.strength == "high") {
        text.style.fontSize = "50px";
    } else if (smell.strength == "medium") {
        text.style.fontSize = "30px";
        text.style.color = "gray";
    } else {
        text.style.fontSize = "15px";
        text.style.color = "silver";
    }
    setTimeout(() => text.classList.add('magictime', 'puffOut'))
   // setTimeout(() => text.classList.add('magictime', 'slideUp'), 2000)
    setTimeout(() => parent.removeChild(text), 2000);
    return text;
}

function randomX() {
    return Math.floor(Math.random() * 100);
}

function vibrationSensation()
{
    navigator.vibrate(200);
}