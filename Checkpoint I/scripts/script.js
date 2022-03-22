let titulo = document.getElementById("titulo");
let descricao = document.getElementById("descricao");
let url = document.getElementById("url");

let h2 = document.querySelector("#h2Atual")
let img = document.querySelector("#imagemAtual")
let texto = document.querySelector("#pAtual")

let enviar = document.getElementById("enviar");
let resetar = document.getElementById("resetar");


alert("Insira as informações e clique em ENVIAR")

enviar.addEventListener("click", function(event) {
    event.preventDefault();
    // console.log(titulo.value);

    h2.innerText = titulo.value;
    img.setAttribute("src", url.value);
    // https://picsum.photos/200/300

    texto.innerText = descricao.value;

    form = document.querySelector("form")
    form.removeChild(form[3])
    alert("Para adicionar novos cards, clique em LIMPAR CAMPOS, escreva as novas informações e clique em ADICIONAR NOVO CARD")

});

resetar.addEventListener("click", function(clean) {})

enviarNovos.addEventListener("click", function(again) {
    again.preventDefault();

    // quando clicar aqui, criar uma nova div card na div container pra adicionar novas coisas

    let container = document.getElementById("container");

    let novoCard = document.createElement('div');
    novoCard.id = "card"
    novoCard.innerHTML = ` 
    <h2></h2>
    <img  id="imagem" src="" alt="" srcset="">
    <p></p>
    `;

    container.insertBefore(novoCard, container.firstChild);

    let h2 = document.querySelector("h2")
    let img = document.querySelector("img")
    let texto = document.querySelector("p")

    h2.innerText = titulo.value;
    img.setAttribute("src", url.value);
    // https://picsum.photos/200/300

    texto.innerText = descricao.value;

    alert("Para adicionar outro card, limpe os campos e insira novamente.")


});