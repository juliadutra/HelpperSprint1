import Valores from "./Valores";
/*PARADIGMA IMPERATIVO:
 Calcula o menor valor, o maior valor e o valor médio dos números presentes na lista fornecida
como argumento. Retorna um objeto do tipo Valores que contem um atributo para cada um destes valores.
A função aceita como argumento um array de number, o que valida o argumento utilizado para invocá-la,
impedindo a presença de elementos não numéricos. */
const calcularValores = (lista : Array<number>) : Valores => {
    let menorValor = lista[0];
    let somaValores = 0;
    let maiorValor = lista[0];
    for(let number of lista) {
        somaValores+=number;
        menorValor = number > menorValor? menorValor : number;
        maiorValor = number > maiorValor? number : maiorValor;
    }
    const valorMedio = somaValores/lista.length;
    return new Valores(menorValor, valorMedio, maiorValor);
};

console.log(calcularValores([5,7,2,1,4]));