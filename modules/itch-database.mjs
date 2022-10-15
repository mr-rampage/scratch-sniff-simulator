import createItch from "./scratch-model.mjs";

export default function getItches() {
    return [
        createItch("Cat"),
        createItch("Dog", "high", 
            "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-one/animals_dogs_x2_barking_small_001.mp3",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpupstoday.com%2Fwp-content%2Fuploads%2F2020%2F09%2FScreenshot_1-2.png&f=1&nofb=1&ipt=08b35c6a656e4af2eb074303117f60c11e7a785932e705c2feaf7d87e069ed39&ipo=images"),
        createItch("Paper Shredder", "high",
            "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-two/office-paper-shredder-overload-struggle-001.mp3",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.chinagads.com%2F957-medium_default%2Fmicro-cut-paper-shredder-fellowes-36c-12-l-4-x-40-mm-50-sheets-black_94619.jpg&f=1&nofb=1&ipt=b16308c2b5bd7c00993bca4e6cc22c8f16c3e1645ecc51861f92e07920bf1b2e&ipo=images"
            )
        
    ];
}