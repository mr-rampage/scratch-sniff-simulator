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
            ),
            createItch("Peach","low",
            "https://www.sustainablecooks.com/wp-content/uploads/2022/06/Peeling-Peaches-Process-1-540x540.jpg",
            "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-77317/zapsplat_cartoon_anime_beam_ray_transport_77703.mp3"),
            
            createItch("Pourcupine","high",
            "https://img.freepik.com/premium-photo/cute-baby-hedgehog-closeup-grass_488145-2207.jpg?w=2000",
            "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-77317/zapsplat_animals_mice_baby_whining_short_high_pitched_designed_002_80754.mp3"
            ),
            createItch("Velociraptor","low",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fjurassicpark.fandom.com%2Fwiki%2FBlue&psig=AOvVaw1GJA0mAsJbFiTlMRE0h5Ix&ust=1665953918540000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOiJvY-Q4_oCFQAAAAAdAAAAABAD",
            "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-the-sound-pack-tree/tspt_cockcrow_01_021.mp3"),
            createItch("Scratch","medium",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdevopedia.org%2Fscratch-language&psig=AOvVaw01cvJBF7eBGglcCMUgV-EZ&ust=1665955165650000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCICjg-aU4_oCFQAAAAAdAAAAABAD",
            "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-five/zapsplat_human_voice_male_american_pleasure_oh_yeah.mp3"),
            createItch("baby","high","https://www.google.com/url?sa=i&url=https%3A%2F%2Fblogs.scientificamerican.com%2Fobservations%2Fhappier-babies-have-an-edge%2F&psig=AOvVaw30Rmgc740d4YVAw6U-B-EU&ust=1665954296954000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNDYm8eR4_oCFQAAAAAdAAAAABAE",
            "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-audio-hero/audio_hero_Goat_DIGIVC2-92.mp3"),

            createItch("CN Tower","low",
            "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-84577/zapsplat_human_children_boys_x2_8_years_laughing_roomy_003_86872.mp3",          
            "https://images.skyscrapercenter.com/building/cntower_overall_aw.jpg"),
            createItch("chalkboard","medium",
            "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-69838/zapsplat_science_fiction_baby_alien_or_dinosaur_cry_sreech_single_001_72258.mp3"
            ),
            createItch("Sleeping man","low",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FwJbimx_transparent-guy-sleeping-clipart-man-sleeping-png-png%2F&psig=AOvVaw1q2RiPTyLK3IcBuRBSOlXd&ust=1665956095622000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCMjGwaOY4_oCFQAAAAAdAAAAABAE",
            "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-69838/zapsplat_human_male_man_angry_grunt_growl_short_004_74265.mp3")
        
    ];
}