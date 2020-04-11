function carregar(){
    var msg = window.document.querySelector("div#msg")
    var img = window.document.getElementById("img")
    var data = new Date()
    var hora = Number(data.getHours())
    var min = Number(data.getMinutes())
    var per = window.document.querySelector("div#per")
    if (min<=9){
        min = `0${min}`
    }
    if (hora >=0 && hora <=12) {
        //bom dia
        img.src = "manha.png"
        var peri = 'um bom dia'
        window.document.body.style.background= '#fb5f47'
    }else if (12<hora && hora<=18){
        //boa tarde
        img.src = "tarde.png"
        var peri = 'uma boa tarde'
        window.document.body.style.background= '#c5848c'
    }else {
        //boa noite
        img.src = "noite.png"
        var peri = 'uma boa noite'
        window.document.body.style.background= '#19282d'
    }
    if (hora<=9){
        hora = `0${hora}`
    }
    msg.innerHTML = `Agora são ${hora}:${min}.`
    per.innerHTML = `Tenha ${peri}!`

    
}
