const vowels = ['a', 'e', 'i', 'o', 'u']

function vowelCount(str) {
    const vowelMap = new Map()
    for (char of str) {
        const lowerCase = char.toLowerCase()
        if (vowels.includes(lowerCase))
            if (vowelMap.has(lowerCase))
                vowelMap.set(lowerCase, vowelMap.get(lowerCase) + 1)
            else
                vowelMap.set(lowerCase, 1)
    }
    return vowelMap
}

console.log(vowelCount("quick brown fox jumps over lazy dog"));