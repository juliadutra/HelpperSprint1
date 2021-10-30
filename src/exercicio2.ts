import Person from './Person'

let lista: Array<Person> = [
  new Person(
    1,
    "Ada Lovelace",
    "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina",
  ),
  new Person(
    2,
    "Alan Turing",
    "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia",
  ),
  new Person(
    3,
    "Nikola Tesla",
    "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
  ),
  new Person(
    4,
    "Nicolau Copérnico",
    "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.",
  ),
];

/*Funcao que retorna a bio do id passado via parametro ao ser chamada, podendo retornar uma string ou um valor undefined,
caso nao seja encontrado na lista*/
function getBioByID(id : number) : string | undefined {
    for(let person of lista) {
        if(id === person.id) {
            return person.bio
        }    
    }
    return undefined;
}

/*Funcao que retorna a name do id passado via parametro ao ser chamada, podendo retornar uma string ou um valor undefined,
caso nao seja encontrado na lista*/
function getNameByID(id : number) : string | undefined {
    for(let person of lista) {
        if(id === person.id) {
            return person.name
        }    
    }
    return undefined;
}

/*Funcao que apaga um item da lista ao ser chamada com base no id passado via parametro*/
function deleteItemByID(id : number) : void {
    for(let personIndex = 0; personIndex < lista.length; personIndex++) {
        let person = lista[personIndex]
        if(id === person.id) {
            lista.splice(personIndex, 1)
        }
    }
}

/*Funcao que a partir de um id passado como primeiro parametro, altera os atributos name e bio
de uma pessoa, conforme, valores informados no segundo e terceiro parametros  */
function changeData(id : number, name : string, bio : string) : void {
    for(let personIndex = 0; personIndex < lista.length; personIndex++) {
        let person = lista[personIndex]
        if(id === person.id) {
            person = new Person(id, name, bio)
            lista.splice(personIndex, 1, person)
        }
    } 
}

console.log("Nome e bio por ID = 1:")
console.log(getNameByID(1))
console.log(getBioByID(1))

console.log("Nome e bio por ID = 2:")
console.log(getNameByID(2))
console.log(getBioByID(2))

console.log("Nome e bio por ID = 3:")
console.log(getNameByID(3))
console.log(getBioByID(3))

console.log("Nome e bio por ID = 4:")
console.log(getNameByID(4))
console.log(getBioByID(4))

console.log("Nome e bio por ID = 5:")
console.log(getBioByID(5))
console.log(getNameByID(5))

changeData(1, "Julia Dutra", "Julia Dutra foi lorem ipsum")
console.log("Nome e bio por ID = 1, após chamar change data:")
console.log(getNameByID(1))
console.log(getBioByID(1))

deleteItemByID(1)
console.log("Nome e bio por ID = 1, após chamar delete item:")
console.log(getNameByID(1))
console.log(getBioByID(1))