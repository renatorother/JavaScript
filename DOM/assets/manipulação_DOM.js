const paragrafo = document.getElementById('paragrafo');

document.querySelector('#botao_texto').addEventListener('click', function(){
    paragrafo.innerHTML = 'Texto alterado com JavaScript';
})

document.querySelector('#botao_cor').addEventListener('click', function(){
    paragrafo.classList.add("text-red-500");
})

document.querySelector('#botao_visibilidade').addEventListener('click', function(){
    paragrafo.classList.toggle("hidden");
})