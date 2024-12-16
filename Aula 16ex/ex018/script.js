var numero = document.getElementById("txtnum")
let num_caixa = document.querySelector("div#caixa")
let resultados = document.querySelector("div#result")
let lista = []
let maior_num = null
let menor_num = null
let media = null
let sum = 0

function Adicionar() {
    let numero_conv = Number(numero.value)
    console.log(lista)
    
    console.log(numero_conv)
    if (numero_conv.length == 0) {
        window.alert("[ERRO] Por favor insira um número válido.")
    } else if (numero_conv == 0 || numero_conv > 100) {
        window.alert("[ERRO] Por favor insira um número válido.")
    } else {  
        console.log(lista)
        Verificar()
    }
    
    resultados.innerHTML = ''
}

function Verificar() {
    let numero_conv = Number(numero.value)
    if (lista.includes(numero_conv)) {
        window.alert('[ERRO] Número já incluso no programa.')
    } else {
        lista.push(numero_conv)
        if (numero_conv > maior_num) {
            maior_num = numero_conv
        }
        if (menor_num == null) {
            menor_num = numero_conv
        } else if (numero_conv < menor_num) {
            menor_num = numero_conv
        }
        num_caixa.innerHTML += 'Valor ' + numero_conv + ' Adicionado.' + '<br>'
    }
}

function Finalizar() {
    for (let pos in lista){
        sum += lista[pos]
        
    }
    media = sum / lista.length

    resultados.innerHTML = `Ao todo, temos ${lista.length} números cadastrados.`
    resultados.innerHTML += `<br> <br> O maior valor informado foi ${maior_num}`
    resultados.innerHTML += `<br> <br> O menor valor informado foi ${menor_num}`
    resultados.innerHTML += `<br> <br> Somando todos os valores, temos ${sum}`
    resultados.innerHTML += `<br> <br> A média dos valores digitados é ${media}`
    sum = 0
}