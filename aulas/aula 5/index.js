//let a = 10  variavel "a" inserindo um numero 10.

//let b = 10  variavel "b" inserindo um numero 10.

//console.log(b) impressão do console. 

 //b = 5 equivalente da variavel "b" sendo trocado por outro numero.

 // console.log(a, b).

 //  a função de codigo e tranformar á variavel "b" de 10 para 5.


//let a = 10 variavel a inserindo numero 10.

//let b = 20 variavel b inserindo numero 20.

//c=a  o valor de "c" agora tera o mesmo valor de "a".

//b=c o valor de "b" agora tera o mesmo valor de "c".

//a=b o valor de "a" agora tera o mesmo valor de "b".

//console.log(a, b ,c ) imprimindo a variavel de origem "a" "b" "c".

/*

let horasTrabalhadasPorDia = prompt("quantas horas voce trabalha por dia ? ") usa uma variavel para saber quantas horas trablha usando o "prompt" 
let salarioDiario = prompt("quantos voce recebe por dia?") usa uma variavel para saber quanto ela recebe usando "prompt"
console.log("voce receb",salarioDiario,"/",horasTrabalhadasPorDia,"por hora") o console.log daria o resultado

horasTrabalhadasPorDia: Representa a quantidade de horas que o usuário trabalha por dia.
salarioDiario: Representa o valor que o usuário recebe por dia.


*/

//1. declare uma variavel para armazenar um nome, sem atribuir um valor.
let nome;

//2. declare uma variavel para armazenar uma idade sem atribuir o valor.
let idade;  

// 3. Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.

console.log(typeof nome);  // Deve imprimir "undefined"
console.log(typeof idade); // Deve imprimir "undefined"

/*
4. Por que esse tipo foi impresso?
   As variáveis nome e idade foram declaradas, mas não foram inicializadas com valores. Portanto, o tipo impresso é "undefined".
*/

// 5. Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar
nome = prompt("Qual é o seu nome?");
idade = prompt("Qual é a sua idade?");

// 6. Imprima na tela o tipo dessas variáveis.
console.log(typeof nome);  // Deve imprimir "string"
console.log(typeof idade); // Deve imprimir "string"

/*
7. Para finalizar, imprima na tela a mensagem: "Olá 'nome', você tem idade anos". Onde 'nome' e 'idade' são os valores que o usuário inseriu.
*/
console.log("ola ${nome}, voce tem ${idade} anos.")

//perguntas
// pergunta1 = input("voce esta usando roupa azul ?")
// pergunta2 = input("voce ja é maior de idade ?")

//let roupaAzul = Sim
//let calcadoPreto = sim
//let boneCinza = não
//console.log(voce esta usando uma roupa azul hoje?, roupaAzul)
//console.log( voce esta usando  calçado preto hoje?, calcadoPreto)
//console.log(voce esta usando  bone cinza hoje?, boneCinza)






//let c = a
  // a = b
 //  b = c

//let numero 1 = prompt ("digite o numero 1")
//let numero 2 = prompt ("digite o numero 2")

//let x = numero 1 + numero 2
//let y = numero 1 + numero 2
