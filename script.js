window.onload = gerarValor

function gerarValor() {
    let valorMin = parseInt(document.querySelector('#valorMin').value)
    let  valorMax = parseInt(document.querySelector('#valorMax').value)
    let aleatorio = Math.floor(Math.random() * (valorMax - valorMin + 1) ) + valorMin
    
    document.querySelector('#visor').innerText = aleatorio
}