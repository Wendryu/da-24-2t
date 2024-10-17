/*let matrix = [
    [1,2,3],
    [4,5,6]
]

console.log(matrix[0][1])
*/
/*let matriz = []

matriz[0] = [0,0,0]
matriz[1] = [0,0,0]
matriz[2] = [0,0,0]

matriz[0] = [0,0,0]
matriz[1] = [0,0,1]
matriz[2] = [0,0,0]

console.log(matriz)
*/

/*let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for(let i=0; i<matriz.length;i++){
    for(let j=0; j<matriz[i].length;j++){
        console.log(matriz[i][j])
        soma += matriz[i][j]
    }
}
console.log(soma)
*/

//exercicio 1
//a)
let matriz = []

matriz[0] = [0,0,0]
matriz[1] = [0,0,0]
matriz[2] = [0,0,0]

//b)

matriz[1][2] = 1

console.log(matriz[0][0],matriz[0][1],matriz[0][2])
console.log(matriz[1][0],matriz[1][1],matriz[1][2])
console.log(matriz[2][0],matriz[2][1],matriz[2][2])


//acesando elementos de uma matriz

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for(let i=0; i<matriz.length;i++){
    for(let j=0; j<matriz[i].length;j++){
        console.log(matriz[i][j])
    }
}

//soma de elementos da matriz

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let soma = 0
for(let i=0; i<matriz.length;i++){
    for(let j=0; j<matriz[i].length;j++){
        console.log(matriz[i][j])
        soma += matriz[i][j]
    }
}
console.log(soma)


//alterar um valor especifico

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let soma = 0
for(let i=0; i<matriz.length;i++){
    for(let j=0; j<matriz[i].length;j++){
        matriz[i][j]*=2
        console.log(matriz[i][j])

    }
}

//exercicio 2

let matriz = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];
function somaMatriz(matriz) {
    let soma = 0; 
    for (let i = 0; i < matriz.length; i++) { 
        for (let j = 0; j < matriz[i].length; j++) { 
            soma += matriz[i][j]; 
        }
    }
    return soma; 
}
let resultado = somaMatriz(matriz);
console.log("Soma dos elementos da matriz:", resultado); 
*/


//exercicio 3


let tabuleiro = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
]

