
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 10)
}

let select = document.querySelector('.cards')
let input = document.getElementById('jogar')
let mensagem = document.getElementById('mensagem')
let hisJogos = document.getElementById('hisJogos')

let arrayAleatorio = []
let arrayVitoria = []
let arrayDerrota = []
let arrayJogos = []

function clicar() {
        let numero = gerarNumeroAleatorio()
        arrayAleatorio.push(numero)
        arrayJogos.push(input.value)
        hisJogos.innerHTML = arrayJogos
        if(arrayJogos.length > 20) {
            arrayJogos.shift()
        }
        for (let i = 0; i < arrayAleatorio.length; i++) {
            let lp = document.getElementById('numeros')
            lp.innerHTML = arrayAleatorio
            if(arrayAleatorio.length > 20) {
                arrayAleatorio.shift()            
            }       
        }

        select.innerHTML = `<h1>${numero}</h1>`
        if (input.value == numero) {
            mensagem.innerHTML = 'Vocé acertou!!'
            arrayVitoria.push(numero)
            let vitoria = document.getElementById('placar-vitoria')
            vitoria.innerHTML = arrayVitoria.length       
        } else {
            mensagem.innerHTML = 'Vocé errou!!'
            arrayDerrota.push(numero)
            let derrota = document.getElementById('placar-derrota')
            derrota.innerHTML = arrayDerrota.length
        }
}
