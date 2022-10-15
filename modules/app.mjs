import ScratchSurface from "./scratch-surface.mjs";
import prepareForScratching from './itch.mjs';
import getRandomSmell from "./scratch-smell.mjs";
import getItches from "./itch-database.mjs";

customElements.define("scratch-surface", ScratchSurface);
document.addEventListener("DOMContentLoaded",main);

function displayItch(itch) {
    const scratch = document.getElementsByTagName("scratch-surface");
    scratch[0].style.background = `url('${itch.image}')`;
    scratch[0].style.backgroundSize = "cover";
}

function main() {
    const itch = getItches()[0];
    const scratchEffect = createAudioEffect(itch);

    prepareForScratching(document.body, itch);
    
    displayItch(itch);

    document.body.addEventListener('itch-satisfied', satisfactionReaction);

    document.body.addEventListener("scratch-up", presentSmells);
    document.body.addEventListener("scratch-down", presentSmells);
    
    document.body.addEventListener("scratch-up", vibrationSensation);
    document.body.addEventListener("scratch-down", vibrationSensation);

    document.body.addEventListener("scratch-up", scratchEffect.play);
    document.body.addEventListener("scratch-down", scratchEffect.play);
    
    document.body.addEventListener("pointerup", scratchEffect.stop);
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

function createAudioEffect(itch){
    const audio = document.createElement('audio');
    const source = document.createElement('source');
    source.setAttribute('src', itch.audio)
    audio.appendChild(source);
    
    return {
        play : () => audio.play(),
        stop : () => audio.pause()
    };
}