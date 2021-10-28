let vowels : Array<string> = ["a", "e", "i", "o", "u"];

function countVowels(word: string) : number {
    let numberOfVowels : number = 0
    for(let character of word) {
        if (vowels.includes(character.toLowerCase())) {
            numberOfVowels++
        }
    }
    return numberOfVowels
}
const palavra = "origins"
console.log(`A palavra ${palavra} possui ${countVowels(palavra)} vogais.`);
