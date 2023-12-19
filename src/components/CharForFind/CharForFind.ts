const charForFind = (str: string): [string, string] => {

    const curWord = str![0].toUpperCase() + str!.slice(1)
    const lastChar = curWord.at(-1)?.toLowerCase()
    const currentLastChar = /[ьыъ]/g.test(lastChar!) ? curWord.at(-2) : lastChar
    return [curWord, currentLastChar!.toUpperCase()]
}

export default charForFind
