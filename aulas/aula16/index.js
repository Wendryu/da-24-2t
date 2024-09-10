//exercicio 1 interpretação de código

/*
function minhaFuncao(variavel){
    return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhafuncao(10))
*/
//a) 10 50

/*
Nada será impresso no console. As chamadas de função minhaFuncao(2) e minhaFuncao(10) vão calcular e retornar os valores 10 e 50,
 respectivamente, mas esses valores não são exibidos porque não há uma instrução que faça com que eles sejam mostrados no console.
*/


//exercicio 2 interpretação de código
/*
let textoDoUsuario = prompt("insira um texto")
const outraFuncao = function (texto){
    return texto.toLowerCase().incluides("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a)
Função
Captura um Texto: Solicita ao usuário um texto.
Verifica Palavra: Checa se "cenoura" está no texto.
Utilidade
Busca de Palavra: Verifica a presença de uma palavra específica em um texto.

b)
"Eu gosto de cenoura" — true
"CENOURA é bom pra vista" — true
"Cenouras crescem na terra" — false

*/


//Exercício 1 de escrita de código

/*
function informacoesSobreMim() {
    console.log("Olá! Meu nome é Luis Henrique.");
    console.log("Tenho 19 anos.");
    console.log("Moro em Sapucaia Do Sul.");
    console.log("Atualmente, sou estudante: sim.");
}


informacoesSobreMim();

*/


//Exercício 2 de escrita de código

//a)
/*
function somarDoisNumeros(num1, num2) {
    return num1 + num2;
}

const resultado = somarDoisNumeros(5, 3);  
console.log(resultado);  
*/

//b)
/*
function éMaiorOuIgual(num1, num2) {
    return num1 >= num2;
}


const resultado = éMaiorOuIgual(5, 3);  
console.log(resultado);  
*/

//c)
/*
function éPar(numero) {
    return numero % 2 === 0;
}


const resultado = éPar(4);  
console.log(resultado);  
*/

//d)
/*
function mensagemInfo(mensagem) {
    console.log("Tamanho da mensagem:", mensagem.length);
    console.log("Mensagem em maiúsculas:", mensagem.toUpperCase());
}


mensagemInfo("Olá, mundo!");  

*/

/* //Exercício 3 de escrita de código




function soma(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    
    if (num2 === 0) {
        return "Não é possível dividir por zero.";
    }
    return num1 / num2;
}


const numero1 = Number(prompt("Insira o primeiro número:"));
const numero2 = Number(prompt("Insira o segundo número:"));


console.log("Soma:", soma(numero1, numero2));
console.log("Subtração:", subtracao(numero1, numero2));
console.log("Multiplicação:", multiplicacao(numero1, numero2));
console.log("Divisão:", divisao(numero1, numero2));
*/


