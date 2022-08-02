var  num = [5, 4, 8, 9, 3]
num[5] = 1
// num.sort() coloca os elementos em ordem crescente
num.push(6) //sempre na última posição
num.length //o comprimento do array


console.log(`Nosso vetor é o ${num} `)
console.log(`O vetor tem ${num.length} posições`)
console.log(num[1])

var pos = num.indexOf(7)
// caso o valor procurado não exista no array, o JS retorna o -1
if (pos == -1){
    console.log('O valor não foi encontrado')
} else{
console.log(`O valor está na posição ${pos}`) 
}



