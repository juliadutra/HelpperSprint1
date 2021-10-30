/*Classe criada para reresentação do objeto do tipo pessoa com seus atributos,
além de construtor para inicialização*/

export default class Person {
    id : number;
    name : string;
    bio : string;
    constructor(id : number, name : string, bio : string) {
        this.id = id;
        this.name = name;
        this.bio =  bio;
    }
    
}