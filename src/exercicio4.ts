class Person {
    id : number;
    name : string;
    bio : string;
    constructor(id : number, name : string, bio : string) {
        this.id = id;
        this.name = name;
        this.bio =  bio;
    }
    
}

let lista: Array<Person> = [
    new Person(
      1,
      "Ada Lovelace",
      "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina.",
    ),
    new Person(
      2,
      "Alan Turing",
      "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia.",
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

const tbody = document.getElementById("corpo-tabela")!;
for (let pessoa of lista) {
    const tr = document.createElement("tr");
    
    const tdId = document.createElement("td");
    const textId = document.createTextNode(pessoa.id.toString());
    tdId.appendChild(textId);

    const tdNome = document.createElement("td");
    const textNome = document.createTextNode(pessoa.name);
    tdNome.appendChild(textNome);


    const tdBio = document.createElement("td");
    const textBio = document.createTextNode(pessoa.bio);
    tdBio.appendChild(textBio);


    const tdAcoes = document.createElement("td");
    const linkEditar = document.createElement("a");
    linkEditar.href = ""

    linkEditar.onclick = () => alert(`Editar id ${pessoa.id}`);

    linkEditar.appendChild(document.createTextNode("Editar"));
    
    tdAcoes.appendChild(linkEditar);

    tr.appendChild(tdId);
    tr.appendChild(tdNome);
    tr.appendChild(tdBio);
    tr.appendChild(tdAcoes);
    
    tbody.appendChild(tr);
}

