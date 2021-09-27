const torre01 = document.getElementById('torre01');
const torre02 = document.getElementById('torre02');
const torre03 = document.getElementById('torre03');

let modo = 'pegar'
let selecionado 
let torreAtual

function move(){
    torre01.addEventListener('click', (evt) =>{   

        if(selecionado === null){
            modo = 'pegar'
        }
        if(modo === 'pegar'){
            torreAtual = evt.currentTarget
            selecionado = torreAtual.lastChild
            modo = 'largar'
        }
        else if(modo === 'largar'){
            torre01.appendChild(selecionado)
            modo = 'pegar'
        }
    })

    torre02.addEventListener('click', (evt) =>{

        if(selecionado === null){
            modo = 'pegar'
        }
        if(modo === 'pegar'){
            torreAtual = evt.currentTarget
            selecionado = torreAtual.lastChild
            modo = 'largar'
            console.log(selecionado)
        }
        else if(modo === 'largar'){
            torre02.appendChild(selecionado)
            modo = 'pegar'
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
            console.log(selecionado)
        }
        else if(modo === 'largar'){
            torre03.appendChild(selecionado)
            modo = 'pegar'
        }
    })


}
move()