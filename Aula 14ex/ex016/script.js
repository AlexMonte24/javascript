function contar() {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.querySelector('div#res')
    var cont = document.querySelector('div#cont')
    var sem_erro = null

    if (inicio.value.length == 0 || fim.value.length == 0) {
        var sem_erro = 0
        res.innerHTML = '[ERRO] Insira um valor para iniciar a contagem!'
    }else if (Number(passo.value) == 0) {
        var sem_erro = 0
        window.alert('[ERRO] Impossível contar com passo 0. CONSIDERAR PASSO 1')
    }else {
        var sem_erro = 1
    }

    // Converter os valores para numeros
    var inicionum = Number(inicio.value)
    var fimnum = Number(fim.value)
    var passonum = Number(passo.value)
    
    if (sem_erro == 1) {
        res.innerHTML = 'Contando:'
        if (passonum == 1){
            cont.innerHTML = ''
            for (inicionum; inicionum <= fimnum; inicionum++) {
                if (inicionum == fimnum) {
                    cont.innerHTML += `${inicionum}` 
                }else {
                    cont.innerHTML += `${inicionum} > `
                }
                
            }
        }
        if (passonum > 1) {
            cont.innerHTML = ''
            for (inicionum; inicionum <= fimnum; inicionum+=passonum) {
                console.log(inicionum)
                if (inicionum >= fimnum) {
                    if (inicionum < 10 || inicionum > 10)
                        cont.innerHTML += `${inicionum}` 
                }else {
                    cont.innerHTML += `${inicionum} > `
                }
                
            }
        }
        //cont.innerHTML = ``
    }
}
