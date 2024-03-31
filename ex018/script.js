let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n)<= 100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores) ){
        valores.push(Number(num.value))

        let item = document.createElement('option') //fazer o criador
        item.text = `Valor ${num.value} adicionado` //fazer o criador
        list.appendChild(item) // fazer o criador mostrar no 'option'
        res.innerHTML = ''
    }else{
        window.alert('Valor invalido ou ja encontrado na lista.')
        
    }
    num.value = '' //zerar na caixa do adicionar
    num.focus()  //deixar o focus na caixa, p/ não precisar clicar de novo
}
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]

            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = (soma / total).toFixed(2)
        
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${total} números cadastrado</p>`
        res.innerHTML += `<p> O maior valor é ${maior} dos números cadastrado</p>`
        res.innerHTML += `<p> O menor valor é ${menor} dos números cadastrado</p>`
        res.innerHTML +=`<p>Somando todos os valores, temos ${soma} </p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media} </p>`
    }
}
