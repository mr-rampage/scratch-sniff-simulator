export default function createItch(name = "", scratchShape = scratchShape.star, resistance = resistance.medium, coat = coat.twoLayer)
{
    return {
        "name" : name,
        "scratchShape" : scratchShape,
        "resistance" : resistance,
        "coat" : coat
    }
}

const scratchShape = {
    square: 'square',
    circle: 'circle',
    rectangle: 'rectangle',
    star: 'star'
}

const resistance = {
    low: 'low',
    medium: 'medium',
    high: 'high'
}

const coat = {
    oneLayer: 'one-layer',
    twoLayer: 'two-layer',
    threeLayer: 'three-layer'
}