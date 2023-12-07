function carregar(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var txtdia = window.document.getElementById('textoDoDia')
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12){

    img.src = 'manha.png'
    document.body.style.background = '#e2cd9f'
    txtdia.innerHTML = ('Bom dia')
} else if (hora >= 12 && hora <= 18) {

    img.src = 'tarde.png'
    document.body.style.background = '#b9846f'
    txtdia.innerHTML = ('Boa tarde')
} else {
    img.src = 'noite.png'
    document.body.style.background = '#515154'
    txtdia.innerHTML = ('Boa noite')
}
}

