export const capitalize = (word: string) => {
    const firstChart = word.charAt(0).toUpperCase()
    const restOfWord = word.slice(1, word.length)
    return `${firstChart}${restOfWord}`
}
