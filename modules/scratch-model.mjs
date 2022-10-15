export const resistance = {
    low: 'low',
    medium: 'medium',
    high: 'high'
}

export default function createItch(
    name = "", 
    resistance = "medium", 
    audio = "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-four/foley_scratchcard_scratching_off_covering_long.mp3",
    image = "https://dinoanimals.com/wp-content/uploads/2021/01/Burmese-cat-16.jpg"
)
{
    return {
        name,
        resistance,
        audio,
        image
    }
}
