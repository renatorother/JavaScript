console.log('Estamos usando o console.log');

function doSomething(){
    console.log('Executamos a função doSomething() a partir do console')
}

function changeParagraph(){
    const paragraph = document.getElementById('paragrafo1');
    paragraph.innerHTML = 'O parágrafo foi alterado a partir do console';
}