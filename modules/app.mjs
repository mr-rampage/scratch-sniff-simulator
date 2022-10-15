import ScratchSurface from "./scratch-surface.mjs";
import prepareForScratching from './itch.mjs';
import createItch from "./scratch-model.mjs";
import getRandomSmell from "./scratch-smell.mjs";

customElements.define("scratch-surface", ScratchSurface);
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
    const smellDatabase = [{"name": "good"}, {"name": "bad"}, {"name": "yucky"}];
    const smell = getRandomSmell(smellDatabase);
    const smellContainer = document.getElementById("smells")
    smellContainer.appendChild(createSmell(smellContainer, smell.name));
}

function createSmell(parent, smell = "placeholder text") {
    const text = document.createElement("span");
    text.classList.add('smell');
    text.style.left = randomX() + "vw";
    text.innerText = smell
    setTimeout(() => text.classList.add('magictime', 'vanishIn', 'slideUp', 'vanishOut'), 4000)
    setTimeout(() => parent.removeChild(text), 5000);
    return text;
}

function randomX() {
    return Math.floor(Math.random() * 100);
}

function vibrationSensation()
{
    navigator.vibrate(200);
}