import Valores from "./Valores";

/*PARADIGMA FUNCIONAL:
 Calcula o menor valor, o maior valor e o valor médio dos números presentes na lista fornecida
como argumento. Retorna um objeto do tipo Valores que contem um atributo para cada um destes valores.
A função aceita como argumento um array de number, o que valida o argumento utilizado para invocá-la,
impedindo a presença de elementos não numéricos. */
const calcularValores = (lista : Array<number>) : Valores => {
    const valorMedio = lista.reduce((numA, numB) => (numA + numB), 0) / lista.length;
    const valorMinimo = lista.reduce((numA, numB) => Math.min(numA, numB));
    const valorMaximo = lista.reduce((numA, numB) => Math.max(numA, numB));
    return new Valores(valorMinimo, valorMedio, valorMaximo);
};

console.log(calcularValores([5,7,2,1,4]));