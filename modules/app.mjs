import ScratchSurface from "./scratch-surface.mjs";
import prepareForScratching from './itch.mjs';
import chooseRandomItem from "./scratch-smell.mjs";
import getItches from "./itch-database.mjs";
import getSmells from "./smell-database.mjs";

customElements.define("scratch-surface", ScratchSurface);
document.addEventListener("DOMContentLoaded",main);

function displayItch(itch) {
    const scratch = document.getElementsByTagName("scratch-surface");
    scratch[0].style.background = `url('${itch.image}')`;
    scratch[0].style.backgroundSize = "cover";
}

function main() {
    const itch = chooseRandomItem(getItches());
    const scratchEffect = createAudioEffect(itch.audio);
    const satisfiedEffect =  createAudioEffect(itch.satisfiedAudio);

    prepareForScratching(document.body, itch);
    
    displayItch(itch);

    document.body.addEventListener('itch-satisfied', satisfiedEffect.play);

    document.body.addEventListener("scratch-up", presentSmells);
    document.body.addEventListener("scratch-down", presentSmells);
    
    document.body.addEventListener("scratch-up", vibrationSensation);
    document.body.addEventListener("scratch-down", vibrationSensation);

    document.body.addEventListener("scratch-up", scratchEffect.play);
    document.body.addEventListener("scratch-down", scratchEffect.play);
    
    document.body.addEventListener("pointerup", scratchEffect.stop);
}

function presentSmells() {
    const smellDatabase = [{"name": "good", "strength": "high"}, {"name": "bad", "strength":"low"}, {"name": "yucky", "strength":"medium"}];
    const smell = chooseRandomItem(smellDatabase);
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

function createAudioEffect(audioUrl){
    const audio = document.createElement('audio');
    const source = document.createElement('source');
    source.setAttribute('src', audioUrl)
    audio.appendChild(source);
    
    return {
        play : () => audio.play(),
        stop : () => audio.pause()
    };
}