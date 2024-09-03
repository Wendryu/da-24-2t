/*let valor = 0
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    valor += i

}
console.log(valor)

//o valor impresso é 10 e o codigo está somando os valores de i de 0 a 4
*/

/*const lista = [10,11,12,15,18,19,21,23,25,27,30]

for(let numero of lista) {
    if (numero > 18) {
        console.log(numero)
    }
}
// foi impresso no console os seguintes números : 19,21,23,25,27 e 30
    // O for...of não fornece acesso ao índice dos elementos. Para acessar o índice, você pode usar um for tradicional ou o forEach com um parâmetro adicional.
    */

    /*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeAtual){
        let linha = ""
        for(let asterisco = 0; asterisco < quantidadeAtual +1; asterisco++){
            linha+= "*"
        }
        console.log(linha)
        quantidadeAtual++
    }
        */
    
    //1. Exercícios de escrita de código

/*
const quantidadeBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"));

if (quantidadeBichinhos === 0) {
    console.log("Que pena! Você pode adotar um pet!");
} else {
    
    const nomesBichinhos = [];
    
   
    for (let i = 0; i < quantidadeBichinhos; i++) {
        const nome = prompt(Digite o nome do bichinho ${i + 1}:);
        nomesBichinhos.push(nome);
    }
    
    
    console.log(nomesBichinhos);
}
*/

//2.

/*
const arrayOriginal = [5, 12, 23, 8, 33, 18, 4];


function imprimirValores(array) {
    array.forEach(valor => console.log(valor));
}

imprimirValores(arrayOriginal);


function imprimirDivididosPor10(array) {
    array.forEach(valor => console.log(valor / 10));
}

imprimirDivididosPor10(arrayOriginal);


function filtrarPares(array) {
    const pares = array.filter(valor => valor % 2 === 0);
    console.log(pares);
    return pares;
}

filtrarPares(arrayOriginal);


function criarArrayDeStrings(array) {
    const arrayDeStrings = array.map((valor, index) => O elemento do índice ${index} é: ${valor});
    console.log(arrayDeStrings);
    return arrayDeStrings;
}

criarArrayDeStrings(arrayOriginal);


function imprimirMaiorEMenor(array) {
    const maior = Math.max(...array);
    const menor = Math.min(...array);
    console.log(O maior número é: ${maior});
    console.log(O menor número é: ${menor});
}

imprimirMaiorEMenor(arrayOriginal);


consegui fazer graças a um video do youtube ensinando como fazer esse codigo usando outros metodos que não usamos, 
entendi mais ou menos sobre esses codigos diferentes, mas consegui realizar.


Explicação:
Imprimir Valores:

Usa forEach para iterar sobre o array e imprimir cada valor.
Imprimir Valores Divididos por 10:

Usa forEach para iterar sobre o array e imprimir cada valor dividido por 10.
Filtrar Números Pares:

Usa filter para criar um novo array contendo apenas os números pares e imprime o resultado.
Criar Array de Strings:

Usa map para transformar cada valor em uma string com o formato especificado e imprime o novo array.
Imprimir Maior e Menor Número:

Usa Math.max e Math.min para encontrar e imprimir o maior e o menor número do array.


o que ensinava com as escrita do video.


*/

//desafio 1

/*
function jogarAdivinhação() {
   
    const numeroPensado = Number(prompt("Jogador 1: Digite o número em que você está pensando (não mostre para o outro jogador):"));
    
    
    if (isNaN(numeroPensado)) {
        console.log("Número inválido! O jogo será encerrado.");
        return;
    }
    
    console.log("Vamos jogar!");
    
    let numeroChutado;
    let tentativas = 0;

    
    do {
        numeroChutado = Number(prompt("Jogador 2: Chute um número:"));
        
        
        if (isNaN(numeroChutado)) {
            console.log("Entrada inválida! Por favor, digite um número.");
            continue; 
        }
        
        tentativas++;
        
        
        if (numeroChutado < numeroPensado) {
            console.log(O número chutado foi: ${numeroChutado}. Errrrrrrrou, o número escolhido é maior!);
        } else if (numeroChutado > numeroPensado) {
            console.log(O número chutado foi: ${numeroChutado}. Errrrrrrrou, o número escolhido é menor!);
        } else {
            console.log(O número chutado foi: ${numeroChutado}. Acertou!!);
            console.log(O número de tentativas foi: ${tentativas});
        }
        
    } while (numeroChutado !== numeroPensado);
}

jogarAdivinhação();




vi em um video explicando como funcionava esse tipo de codigo, bem parecido com o que usamos.

*/

/*let vida = 1; 
let recursos = 0; 
let rodadas = 0; 


function explorar() {
  rodadas++; 
  let chance = Math.random(); 

  if (chance < 0.50) {
    
    recursos++;
    console.log("Você encontrou um recurso. Recursos totais: " + recursos);
  } else if (chance < 0.75) {
    
    console.log("Você encontrou um perigo. Cuidado!");
  } else {
    
    vida--;
    console.log("Você encontrou um Gamemaker. Vida restante: " + vida);
  }
}


function descansar() {
  vida++; 
  console.log("Você descansou. Vida atual: " + vida);
}


function jogar() {
  while (vida > 0 && recursos < 10) {
    let escolha = prompt("Escolha uma ação: 'explorar' ou 'descansar'");

    if (escolha === "explorar") {
      explorar();
    } else if (escolha === "descansar") {
      descansar();
    } else {
      console.log("Escolha inválida.");
    }

    
    if (recursos >= 10) {
      console.log("Parabéns! Você coletou todos os recursos necessários.");
      break;
    } else if (vida <= 0) {
      console.log("Você perdeu todas as suas vidas. Fim de jogo.");
      break;
    }
  }

  
  console.log("Total de recursos coletados: " + recursos);
  console.log("Número total de rodadas exploradas: " + rodadas);
}


jogar();
*/

let vida = 1; 
let recursos = 0; 
let rodadas = 0; 


function explorar() {
  rodadas++; 
  let chance = Math.random(); 

  if (chance < 0.50) {
    
    recursos++;
    alert("Você encontrou um recurso. Recursos totais: " + recursos);
  } else if (chance < 0.75) {
    
    alert("Você encontrou um perigo. Cuidado!");
  } else {
    
    vida--;
    alert("Você encontrou um Gamemaker. Vida restante: " + vida);
  }
}


function descansar() {
  vida++; 
  alert("Você descansou. Vida atual: " + vida);
}


function jogar() {
  while (vida > 0 && recursos < 10) {
    let escolha = prompt("Escolha uma ação: 'explorar e o 1' ou 'descansar e o 2'");

    if (escolha === "1") {
      explorar();
    } else if (escolha === "2") {
      descansar();
    } else {
      alert("Escolha inválida.");
    }

    
    if (recursos >= 10) {
      alert("Parabéns! Você coletou todos os recursos necessários.");
      break;
    } else if (vida <= 0) {
      alert("Você perdeu todas as suas vidas. Fim de jogo.");
      break;
    }
  }

  
 alert("Total de recursos coletados: " + recursos);
  alert("Número total de rodadas exploradas: " + rodadas);
}


jogar();