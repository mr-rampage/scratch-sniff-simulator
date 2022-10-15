export default function createSmell(name = '', description = '', 
                                    strength = 'low', color = 'gray')
{
    return {
        name,
        description,
        strength,
        color
    }
}
