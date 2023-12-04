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
                //criança
            }else if (idade < 21){
                img.setAttribute('src', 'jovemHomem.png')
                //jovem
            }else if (idade < 50){
                img.setAttribute('src', 'adultoHomem.png')
                //Adulto
            }else{
                img.setAttribute('src', 'velhoHomem.png')
                //idoso
            }
        }else if (fsex[1].checked) {
            gênero = 'Mulher'

            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'criancamulher.png')
                //criança
            }else if (idade < 21){
                img.setAttribute('src', 'adultoMulher.png')
                //jovem
            }else if (idade < 50){
                img.setAttribute('src', 'jovemMulher.png')
                //Adulto
            }else{
                img.setAttribute('src', 'velhoMulher.png')
                //Idosa
            }
        }
        
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        
    }

}

