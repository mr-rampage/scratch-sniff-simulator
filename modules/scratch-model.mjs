export default function createItch(name = "", resistance = resistance.medium)
{
    return {
        "name" : name,
        "resistance" : resistance
    }
}

const resistance = {
    low: 'low',
    medium: 'medium',
    high: 'high'
}
