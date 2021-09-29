const torre01 = document.getElementById('torre01');
const torre02 = document.getElementById('torre02');
const torre03 = document.getElementById('torre03');

const movimento = document.getElementById('numero_movimentos')

const reset = document.getElementById('reset');
reset.addEventListener("click", ()=> resetGame())


let modo = 'pegar'
let selecionado 
let torreAtual
let contadorMovimento = 0

function move(){
    torre01.addEventListener('click', (evt) =>{   

        console.log(contadorMovimento)

        if(selecionado === null){
            modo = 'pegar'
        }
        if(modo === 'pegar'){
            torreAtual = evt.currentTarget
            selecionado = torreAtual.lastChild
            selecionado.style.margin = "0 0 10px 0"
            modo = 'largar'
            mensagem("")           
        }
        else if(modo === 'largar'){
            if(torre01.lastChild === null){
                
                torre01.appendChild(selecionado)
                selecionado.style.margin = "0"
                modo = 'pegar'
                nJogadas()
            }

            else if (selecionado.clientWidth<torre01.lastChild.clientWidth){
                
                torre01.appendChild(selecionado)
                selecionado.style.margin = "0"
                modo = 'pegar'
                nJogadas()
            }

            else{
                mensagem("Você não pode fazer isto!")
                selecionado.style.margin = "0"
                selecionado = null
                modo = 'pegar'

            }
        }
    })

    torre02.addEventListener('click', (evt) =>{

        if(selecionado === null){
            modo = 'pegar'
        }
        if(modo === 'pegar'){
            torreAtual = evt.currentTarget
            selecionado = torreAtual.lastChild
            selecionado.style.margin = "0 0 10px 0"
            mensagem("")
            modo = 'largar'
            
        }
        else if(modo === 'largar'){
            if(torre02.lastChild === null){
                torre02.appendChild(selecionado)
                selecionado.style.margin = "0"
                modo = 'pegar'
                nJogadas()
            }

            else if (selecionado.clientWidth<torre02.lastChild.clientWidth){
                torre02.appendChild(selecionado)
                selecionado.style.margin = "0"
                modo = 'pegar'
                nJogadas()
            }

            else{
                mensagem("Você não pode fazer isto!")
                selecionado.style.margin = "0"
                selecionado = null
                modo = 'pegar'
            }
        }
    })

    torre03.addEventListener('click', (evt) =>{

        if(selecionado === null){
            modo = 'pegar'
        }
        if(modo === 'pegar'){
            torreAtual = evt.currentTarget
            selecionado = torreAtual.lastChild
            selecionado.style.margin = "0 0 10px 0"
            modo = 'largar'
            mensagem("")
            
        }
        else if(modo === 'largar'){
            if(torre03.lastChild === null){
                torre03.appendChild(selecionado)
                selecionado.style.margin = "0"
                modo = 'pegar'
                nJogadas()
            }

            else if (selecionado.clientWidth<torre03.lastChild.clientWidth){
                torre03.appendChild(selecionado)
                selecionado.style.margin = "0"
                modo = 'pegar'
                nJogadas()
            }

            else{
                mensagem("Você não pode fazer isto!")
                selecionado.style.margin = "0"
                selecionado = null
                modo = 'pegar'
            }
        }
    })
}
move()

function mensagem(msg) {

    const paragrafoMensagem = document.getElementById("mensagem");

    paragrafoMensagem.innerText = msg;
}

function nJogadas(){
    contadorMovimento ++
    movimento.innerText = contadorMovimento
}

function resetGame(){
    contadorMovimento = 0
    movimento.innerText = contadorMovimento
}


