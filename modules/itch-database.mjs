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
        createItch("Peach", "low",
            "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-77317/zapsplat_cartoon_anime_beam_ray_transport_77703.mp3",
            "https://www.sustainablecooks.com/wp-content/uploads/2022/06/Peeling-Peaches-Process-1-540x540.jpg"),

        createItch("Pourcupine", "high",
            "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-77317/zapsplat_animals_mice_baby_whining_short_high_pitched_designed_002_80754.mp3",
            "https://img.freepik.com/premium-photo/cute-baby-hedgehog-closeup-grass_488145-2207.jpg?w=2000"
        ),
        createItch("Velociraptor", "low",
            "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-the-sound-pack-tree/tspt_cockcrow_01_021.mp3",
            "https://vignette.wikia.nocookie.net/tsjpfew/images/c/c6/Raptor.jpg/revision/latest?cb=20161224040138"
        ),
        createItch("Scratch", "medium",
            "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-five/zapsplat_human_voice_male_american_pleasure_oh_yeah.mp3",
            "https://devopedia.org/images/article/331/1110.1618044404.png"
        ),
        createItch("baby", "high",
            "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-audio-hero/audio_hero_Goat_DIGIVC2-92.mp3",
            "https://static.scientificamerican.com/blogs/cache/file/7069F0BB-A9AB-4932-84F508BBC0136458_source.jpg?w=590&h=800&F754D658-CE37-41EE-BE2C0EFC7134D582"
        ),

        createItch("CN Tower", "low",
            "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-84577/zapsplat_human_children_boys_x2_8_years_laughing_roomy_003_86872.mp3",
            "https://images.skyscrapercenter.com/building/cntower_overall_aw.jpg"
        ),
        createItch("chalkboard", "medium",
            "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-69838/zapsplat_science_fiction_baby_alien_or_dinosaur_cry_sreech_single_001_72258.mp3",
            "https://cf.ltkcdn.net/cleaning/images/std/102418-375x276-Chalkboardcleaningtips.jpg"
        ),
        createItch("Sleeping man", "low",
            "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-69838/zapsplat_human_male_man_angry_grunt_growl_short_004_74265.mp3",
            "https://media.istockphoto.com/photos/sleepy-thick-guy-lying-on-couch-picture-id638744752?k=6&m=638744752&s=170667a&w=0&h=zGtYMkTswH4p4qad0rNGJE4GvoQzdwIez7aEpHamFmA="
        ),
        createItch("Toe Fungus", "high",
            null,
            "https://www.windyhillpodiatry.com/images/toenail-fungus-infection(1).png"
        )
    ];
}