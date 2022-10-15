import ScratchSurface from "./scratch-surface.mjs";
import ScratchSmell from "./scratch-smell.mjs";
import prepareForScratching from './itch.mjs';
import createItch from "./scratch-model.mjs";
import getRandomSmell from "./scratch-smell.mjs";

customElements.define("scratch-surface", ScratchSurface);
customElements.define("scratch-smell", ScratchSmell, { extends: "span"});
document.addEventListener("DOMContentLoaded",main);

function main() {
    let itch = createItch();

    prepareForScratching(document.body, itch);

    document.body.addEventListener('itch-satisfied', satisfactionReaction);

    document.body.addEventListener("scratch-up", presentSmells);
    document.body.addEventListener("scratch-down", presentSmells);
    
    document.body.addEventListener("scratch-up", vibrationSensation);
    document.body.addEventListener("scratch-down", vibrationSensation);

    document.body.addEventListener("scratch-up", audioPlay);
    document.body.addEventListener("scratch-down", audioPlay);

    document.body.addEventListener("pointerup", audioPause);
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


const scratchSound = document.getElementById("audio");

function audioPlay(itch){
    scratchSound.play();
}

function audioPause(){
    scratchSound.pause();
}