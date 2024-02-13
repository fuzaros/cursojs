let despesas = ['Aluguel', 'Energia', 'Água', 'Crunchuroll', 'EBAC', 'Cartão de Crédito']
let valorDespesas = [800, 310, 72, 15, 270, 700]
let total = 0
console.log('Essas são minhas despesas:')

for(let pos = 0; pos < despesas.length; pos++){
    console.log(`${despesas[pos]} com custo de ${valorDespesas[pos]}`)
}

for( i in valorDespesas){
    total += valorDespesas[i]
}
console.log(`Total das despesas ${total}`)