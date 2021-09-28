const torre01 = document.getElementById('torre01');
const torre02 = document.getElementById('torre02');
const torre03 = document.getElementById('torre03');

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
            modo = 'largar'
            mensagem("")
           
        }
        else if(modo === 'largar'){
            if(torre01.lastChild === null){
                torre01.appendChild(selecionado)
                contadorMovimento++
                modo = 'pegar'}

            else if (selecionado.clientWidth<torre01.lastChild.clientWidth){
                torre01.appendChild(selecionado)
                contadorMovimento++
                modo = 'pegar'}

            else{
                mensagem("Você não pode fazer isto!")
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
            mensagem("")
            modo = 'largar'
            
        }
        else if(modo === 'largar'){
            if(torre02.lastChild === null){
                torre02.appendChild(selecionado)
                contadorMovimento++
                modo = 'pegar'}

            else if (selecionado.clientWidth<torre02.lastChild.clientWidth){
                torre02.appendChild(selecionado)
                contadorMovimento++
                modo = 'pegar'}

            else{
                mensagem("Você não pode fazer isto!")
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
            modo = 'largar'
            mensagem("")
            
        }
        else if(modo === 'largar'){
            if(torre03.lastChild === null){
                torre03.appendChild(selecionado)
                contadorMovimento++
                modo = 'pegar'}

            else if (selecionado.clientWidth<torre03.lastChild.clientWidth){
                torre03.appendChild(selecionado)
                contadorMovimento++
                modo = 'pegar'
               
            }

            else{
                mensagem("Você não pode fazer isto!")
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


