export default function createSmell(name = '', description = '', 
                                    strength = 'low')
{
    return {
        name,
        description,
        strength
    }
}
