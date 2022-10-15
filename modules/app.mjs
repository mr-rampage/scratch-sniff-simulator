import ScratchSurface from "./scratch-surface.mjs";
import prepareForScratching from './itch.mjs';
import chooseRandomItem from "./scratch-smell.mjs";
import getItches from "./itch-database.mjs";
import getSmells from "./smell-database.mjs";

customElements.define("scratch-surface", ScratchSurface);
document.addEventListener("DOMContentLoaded", main);

function displayItch(itch) {
    const scratch = document.getElementsByTagName("scratch-surface");
    scratch[0].style.background = `url('${itch.image}')`;
    scratch[0].style.backgroundSize = "cover";
}

function main() {
    const itch = chooseRandomItem(getItches());
    const scratchEffect = createAudioEffect(itch.audio);
    const satisfiedEffect = createAudioEffect(itch.satisfiedAudio);

    prepareForScratching(document.body, itch);

    displayItch(itch);

    document.body.addEventListener('itch-satisfied', satisfiedEffect.play);

    document.body.addEventListener("scratch-up", shake);
    document.body.addEventListener("scratch-down", shake);

    document.body.addEventListener("scratch-up", throttle(presentSmells));
    document.body.addEventListener("scratch-down", throttle(presentSmells));

    document.body.addEventListener("scratch-up", vibrationSensation);
    document.body.addEventListener("scratch-down", vibrationSensation);

    document.body.addEventListener("scratch-up", scratchEffect.play);
    document.body.addEventListener("scratch-down", scratchEffect.play);

    document.body.addEventListener("pointerup", scratchEffect.stop);
    document.body.addEventListener("pointerup", unshake);

    runTutorial();
}
function shake(){
    if (document.body.classList.contains("shaking")) return 0;
    document.body.classList.add("shaking");
}
function unshake(){
    document.body.classList.remove("shaking");
}

function throttle(f)
{
    let execute = true;
    return () => {
        if (execute === true) {
            f();
            execute = false;
            setTimeout(() => execute = true, 1000);
        }
    }
    
}

function presentSmells() {
    const smellDatabase = getSmells();
    const smell = chooseRandomItem(smellDatabase);
    const smellContainer = document.getElementById("smells")
    smellContainer.appendChild(createSmell(smellContainer, smell));
}

function createSmell(parent, smell) {
    const text = document.createElement("span");
    text.classList.add('smell');
    text.style.left = randomX() + "vw";
    text.innerText = smell.name
    text.style.color = smell.color

    if (smell.strength === "high") {
        text.style.fontSize = "2em";
    } else if (smell.strength === "medium") {
        text.style.fontSize = "1.5em";
    } else {
        text.style.fontSize = "1em";
    }
    setTimeout(() => text.classList.add('magictime', 'puffOut'), 2000)
    setTimeout(() => parent.removeChild(text), 4000);
    return text; 
}

function randomX() {
    return Math.floor(Math.random() * 72);
}

function vibrationSensation() {
    navigator.vibrate(200);
}

function createAudioEffect(audioUrl) {
    const audio = document.createElement('audio');
    const source = document.createElement('source');
    source.setAttribute('src', audioUrl)
    audio.appendChild(source);

    return {
        play: () => audio.play(),
        stop: () => audio.pause()
    };
}

function runTutorial() {
    const text = document.createElement('span')
    text.classList.add('tutorial', 'magictime', 'vanishIn')
    text.innerText = "Scratch me!"
    document.body.appendChild(text);
    setTimeout(() => {
        text.classList.add('vanishOut')
    }, 2000);
    setTimeout(() => document.body.removeChild(text), 4000);
}