function tabuada(){

let num = document.getElementById('num')
let tab = document.getElementById('seltab')

if (num.value.length == 0){
    window.alert('Por favor, digite um numero!')
}else{
    let n = Number(num.value)
    let c = 0 //começa a contagem com esse numero
    tab.innerHTML = '' // limpa o option para a proxima contagem a ser exibida

    while( c <= 10 ){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++
    }
}
}
