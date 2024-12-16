vetor = []
num_maior = 0
num_menor = 0


for (let pos=0; pos <= 5; pos++) {
    vetor.push(pos)
    console.log(vetor)
    if (pos > num_maior) {
        num_maior = pos
    }
    if (pos < num_menor) {
        num_menor = pos
    }
}

console.log(vetor)
console.log(num_maior)
console.log(num_menor)
