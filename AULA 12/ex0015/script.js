function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value) > ano){
        window.alert ('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gênero = '' // variavel vazia
        var img = document.createElement('img')
        img.setAttribute ('id','foto') //serve para criar um id para img
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && 10){
                //Criança 
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovemHomem.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'homem.png')
            } else {
                img.setAttribute('src', 'idoso.png')
                //Idoso
            }

        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && 10){
                //Criança 
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovemMulher.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center' //deixa o texto centralizado
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img) //adicionar a imagem 
    }

    
}
  