function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value >= ano){
        window.alert('[Error] Verifique os dados novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'

            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'criançaHomem.png')

            }else if (idade < 21){
                img.setAttribute('src', 'jovemHomem.png')
            }else if (idade < 50){
                img.setAttribute('src', 'adultoHomem.png')
            }else{
                img.setAttribute('src', 'velhoHomem.png')
            }
        }else if (fsex[1].checked) {
            gênero = 'Mulher'

            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'criancamulher.png')
            }else if (idade < 21){
                img.setAttribute('src', 'adultoMulher.png')
            }else if (idade < 50){
                img.setAttribute('src', 'jovemMulher.png')
            }else{
                img.setAttribute('src', 'velhoMulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}

