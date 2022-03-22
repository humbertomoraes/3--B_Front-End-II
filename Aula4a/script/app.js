const nome = "Humberto"
const meutemplate = `Meu nome é ${nome}`;

console.log(meutemplate)


function escreverHTML(titulo, texto) {
    const body = document.getElementById('body');
    const meuTemplate = `
    <h1>${titulo}</h1>
    <p>${texto}</p>
    `;
    body.innerHTML += meuTemplate;
}

escreverHTML('Olá', 'Isso é o primeiro exemplo de template string');
escreverHTML('Olá', 'Isso é o segundo exemplo de template string');