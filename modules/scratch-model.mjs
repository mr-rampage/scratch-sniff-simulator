const resistance = {
    low: 'low',
    medium: 'medium',
    high: 'high'
}

export default function createItch(name = "", resistance = "medium")
{
    return {
        "name" : name,
        "resistance" : resistance
    }
}
