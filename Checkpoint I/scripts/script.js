let titulo = document.getElementById("titulo");
let descricao = document.getElementById("descricao");
let url = document.getElementById("url");
let genero = document.getElementById("genero")
let nota = document.getElementById("nota")
let enviar = document.getElementById("enviar");
let resetar = document.getElementById("resetar");


alert("Insira as informações e clique em ENVIAR")


enviar.addEventListener("click", function(again) {
    again.preventDefault();

    // quando clicar aqui, criar uma nova div card na div container pra adicionar novas coisas

    let container = document.getElementById("container");

    let novoCard = document.createElement('div');
    novoCard.id = "card"
    novoCard.innerHTML = ` 
    <h2 id="tituloCard"></h2>
    <img  id="imagem" src="" alt="" srcset="">
    <p class="descreve"></p>
    <h3 id="generoEscolhido"></h3>
    <h4 id="h4Nota">Nota: </h4>
    `;

    container.insertBefore(novoCard, container.firstChild);

    let h2Titulo = document.getElementById("tituloCard")
    let img = document.querySelector("img")
    let texto = document.querySelector("p")
    let generoEscolhido = document.getElementById("generoEscolhido")
    let h4Nota = document.getElementById("h4Nota")

    h2Titulo.innerText = titulo.value;
    img.setAttribute("src", url.value);
    texto.innerText = descricao.value;
    generoEscolhido.innerText = genero.value;
    h4Nota.innerText += " " + nota.value

    alert("Para adicionar outro card, clique em LIMPAR CAMPOS, insira as informações e ENVIAR.")


});