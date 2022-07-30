

function carregar() {

    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    //var hora = data.getHours()
    var hora =  15
    if (hora >= 0 && hora <= 12) {
        msg.innerHTML =  `Agora são ${hora} horas. <br> Bom Dia`
        img.src= 'imagens/manha.png'
        document.body.style.background = '#f5cd60e8'
    } else if (hora >= 12 && hora <= 18){
        msg.innerHTML =  `Agora são ${hora} horas. <br> Boa Tarde`
        img.src= 'imagens/tarde.png'
        document.body.style.background = '#ad401fe8'
    } else {
        msg.innerHTML =  `Agora são ${hora} horas. <br> Boa Noite`    
        img.src= 'imagens/noite.png'
        document.body.style.background = '#0f2970da'
    }
}
