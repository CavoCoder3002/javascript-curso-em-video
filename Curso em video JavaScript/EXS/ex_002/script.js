var result = window.document.getElementById("res")
var copy = window.document.getElementById("copyright")
copy.style.textAlign = "center"
result.style.textAlign = "center"
function resultado() {
    //Nome da Pessoa
    var nome = window.document.getElementsByName("txtnome")[0]
    //Ano atual
    var data = new Date()
    var ano = data.getFullYear()
    //Data de Nascimento
    var nasc = window.document.getElementById("ano")
    //Resultado mensagem
    var result = window.document.getElementById("res")
    //Imagem
    var img = window.document.getElementById("imagem")
    //Mensagem erro
    if (nasc.value == 0 || nasc.value > ano ){
        window.alert(`!DADOS INVALIDOS! TENTE NOVAMENTE POR FAVOR`)
    }else{
        var fsex = window.document.getElementsByName("radsex")
        var idade = (ano - Number(nasc.value))
        var genero = ""
        if (fsex[0].checked){
            genero = "um <strong>Homem</strong>"
            //Foto
            if (idade>=0 && idade<10){
                //Bebe
                img.src = "bebehomem.png"
                document.body.style.background = "#eed36c"
            }else if (idade<21){
                //Jovem
                img.src = "jovemhomem.png"
                window.document.body.style.background = "#978875"
            }else if (idade<50){
                //Adulto
                img.src = "homemadulto.png"
                window.document.body.style.background = "#636363"
            }else{
                //Idoso
                img.src = "homemidoso.png"
                window.document.body.style.background = "#"
            }
        }else if (fsex[1].checked){
            genero = "uma <strong>Mulher</strong>"
            //Foto
            if (idade>=0 && idade<10){
                //Bebe
                img.src = "bebemulher.png"
                window.document.body.style.background = "#a4e3f5"
            }else if (idade<21){
                //Jovem
                img.src = "jovemmulher.png"
                window.document.body.style.background = "#693d18"
            }else if (idade<50){
                //Adulto
                img.src = "mulheradulta.png"
                window.document.body.style.background = "#a2604a"
            }else{
                //Idoso
                img.src = "mulheridosa.png"
                window.document.body.style.background = "#"
            }
        }
        result.style.textAlign = "center"
        window.alert(`Olá ${nome.value}!`)
        result.innerHTML = `Segundo os dados coletados você é ${genero} de <strong>${idade}</strong> anos.`
    }
}