const vowels : Array<string> = ["a", "e", "i", "o", "u"];

/* Funcao que recebe como parametro uma palavra e retorna a quantidade de vogais contidas nela*/
function countVowels(word: string) : number {
    let numberOfVowels : number = 0
    for(let character of word) {
        if (vowels.includes(character.toLowerCase())) {
            numberOfVowels++
        }
    }
    return numberOfVowels
}

/*Funcao acionada quando o usuario clica no botao 'Confirmar' contido no formulario HTML. Obtem
 o valor digitado e conta a quantidade de vogais*/

function onButtonClick() {
    const word = (<HTMLInputElement>document.getElementById("wordField")).value
    const number = countVowels(word)
    alert(`A palavra ${word} possui ${number} vogais.`)
 }

const sampleWord = "origins"
console.log(`A palavra ${sampleWord} possui ${countVowels(sampleWord)} vogais.`);
