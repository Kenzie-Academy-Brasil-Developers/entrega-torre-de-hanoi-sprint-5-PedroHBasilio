
const section = document.getElementById("secao__hanoi");

section.addEventListener("click", ()=>vitoria(nDiscos))

let nDiscos = 3
criarTorres()
criarDiscos(nDiscos)


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
// criarTorres()

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






