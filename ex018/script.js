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
        
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${total} números cadastrado</p>`
    }
}
