const reset = document.getElementById('reset');
const section = document.getElementById("secao__hanoi");

const jogar = document.getElementById("jogar")
const level = document.getElementById("level")

let valor = level.value

console.log(valor)

section.addEventListener("click", ()=>vitoria(valor))
reset.addEventListener("click", ()=> resetGame())

criarTorres()


jogar.addEventListener("click", () => {
    torre01.innerHTML = ""
    torre02.innerHTML = ""
    torre03.innerHTML = ""
    criarDiscos(valor)    
    console.log(valor) 
})


function criarTorres() {

    const torre01 = document.createElement("div");
    const torre02 = document.createElement("div");
    const torre03 = document.createElement("div");

    torre01.setAttribute("id", "torre01");
    torre01.classList.add("torre")
    torre02.setAttribute("id", "torre02");
    torre02.classList.add("torre")
    torre03.setAttribute("id", "torre03");
    torre03.classList.add("torre")

    section.appendChild(torre01)
    section.appendChild(torre02)
    section.appendChild(torre03)

}

function criarDiscos(numDiscos){

    const torre01 = document.getElementById("torre01");

    for (let i =numDiscos; i>=1 ; i--){
        const disco = document.createElement("div");

        disco.setAttribute("id", `disco${i}`);

        torre01.appendChild(disco);

    }
}

function vitoria(n) {

    if(torre02.childElementCount>= n || torre03.childElementCount>= n )  {
        mensagem("Você ganhou!")
    
    }
}

function mensagem(msg) {

    const paragrafoMensagem = document.getElementById("mensagem");

    paragrafoMensagem.innerText = msg;
}

function resetGame(){

    const torre01 = document.getElementById('torre01')

    for(let i = valor; i >= 1; i--){
        const disco = document.getElementById(`disco${i}`)
        torre01.appendChild(disco)
    }
}
   



    
    

