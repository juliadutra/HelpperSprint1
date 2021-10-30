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

/* Utilizando a funcao find() para identificar a pessoa por id e entao retornando a bio, caso encontrada.
O operador ? (interrogacao) logo apos o método find garante que sera retornada a bio apenas caso encontre
alguma pessoa para o id, ou undefined caso contrario */
function getBioByIDFunc(id : number) : string | undefined {
   return lista.find((person) => (person.id === id))?.bio
}

/* Utilizando a funcao find() para identificar a pessoa por id e entao retornando o name, caso encontrada.
O operador ? (interrogacao) logo apos o método find garante que sera retornado o name apenas caso encontre
alguma pessoa para o id, ou undefined caso contrario */
function getNameByIDFunc(id : number) : string | undefined {
   return lista.find((person) => (person.id === id))?.name
}

/* Utilizando a funcao filter() para gerar uma nova lista apenas com os itens cujo id seja diferente
do id informado via parametro, excluindo, portanto, a pessoa daquele id da lista. */
function deleteItemByIDFunc(id : number) : void {
    lista = lista.filter((person) => (person.id !== id))
}

/* Utilizando a funcao map() para gerar uma nova lista a partir da anterior, substituindo apenas o item
cujo id seja igual ao id informado via parametro. A pessoa que substitui a anterior possui name e bio
de acordo com os parametros informados ao executar a funcao. */
function changeDataFunc(id : number, name : string, bio : string) : void {
    lista = lista.map((person) => (person.id === id ? new Person(id, name, bio) : person))
}

console.log("Nome e bio por ID = 1:")
console.log(getNameByIDFunc(1))
console.log(getBioByIDFunc(1))

console.log("Nome e bio por ID = 2:")
console.log(getNameByIDFunc(2))
console.log(getBioByIDFunc(2))

console.log("Nome e bio por ID = 3:")
console.log(getNameByIDFunc(3))
console.log(getBioByIDFunc(3))

console.log("Nome e bio por ID = 4:")
console.log(getNameByIDFunc(4))
console.log(getBioByIDFunc(4))

console.log("Nome e bio por ID = 5:")
console.log(getBioByIDFunc(5))
console.log(getNameByIDFunc(5))

changeDataFunc(1, "Julia Dutra", "Julia Dutra foi lorem ipsum")
console.log("Nome e bio por ID = 1, após chamar change data:")
console.log(getNameByIDFunc(1))
console.log(getBioByIDFunc(1))

deleteItemByIDFunc(1)
console.log("Nome e bio por ID = 1, após chamar delete item:")
console.log(getNameByIDFunc(1))
console.log(getBioByIDFunc(1))
