import ScratchSurface from "./scratch-surface.mjs";
import ScratchSmell from "./scratch-smell.mjs";

customElements.define("scratch-surface", ScratchSurface);
customElements.define("scratch-smell", ScratchSmell, { extends: "span"});