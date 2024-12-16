function gerar() {
    var numero = document.getElementById("txtnum")
    var num_caixa = document.querySelector("div#caixa")
    var numero_conv = Number(numero.value)
    var i = 1
    var verificacao = false
    
    if (numero.value.length == 0) {
        window.alert("[ERRO] Por favor, insira um número!")
    }else if (numero_conv == 0) {
        window.alert("A tabuada de 0 é 0. Por favor, insira outro valor.")
    }else {
        verificacao = true
    }
    num_caixa.innerHTML = ''
    if (verificacao == true){
        for (i; i <= 10; i++) { 
            var multi = numero_conv * i
            num_caixa.innerHTML += `${numero_conv} x ${i} = ${multi}` + '<br>'
        }
    }
}