
const btn = document.querySelectorAll(".btn");
const visor = document.querySelector("#visor");
const clear = document.querySelector("#clear");
const conta = document.querySelector("#conta");
const enviar = document.querySelector("#enviar");
const acertosLb = document.querySelector('#acertosLb');
const errosLb = document.querySelector("#errosLb");

let erros = 0;
let acertos = 0;
let resultadoConta;
const operadores = ["+", "-", "*"];

btn.forEach(botao => {
    botao.addEventListener('click', function() {
        visor.innerText = `${visor.innerText}${botao.innerText}`;
    })
});
clear.addEventListener("click", function() {
    visor.innerText = visor.innerText.slice(0, -1);
});

function animationConta(nome, tempo) {
    conta.style.animationName = nome;
    conta.style.animationDuration = tempo;
    setTimeout( function() {
        conta.style.animationName = "";
        conta.style.animationDuration = "";
    }, 2000);
}

function resultado(n1, n2, operador) {
    switch(operadores[operador]) {
        case "+":
            return n1+n2;
        case "-":
            return n1-n2;
        case "*":
            return n1*n2;
    }
}
function createConta() {
    let n1 = Math.floor(Math.random() * 10);
    let n2 = Math.floor(Math.random() * 10);
    let operador = Math.floor(Math.random() * 3);
    resultadoConta = resultado(n1, n2, operador);
    conta.innerText = `${n1} ${operadores[operador]} ${n2}`;
}
createConta();

enviar.addEventListener("click", function() {
    let user = visor.innerText;
    if (user == resultadoConta) {
        createConta();
        visor.innerText = "";
        acertos++;
        acertosLb.innerText = `Acertos: ${acertos}`;
        animationConta("certo", "1s");
        
    } else {
        visor.innerText = "";
        erros++;
        errosLb.innerText = `Erros: ${erros}`;

        animationConta("errado", "1s");
    }
})