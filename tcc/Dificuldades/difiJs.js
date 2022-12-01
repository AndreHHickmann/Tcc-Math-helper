
let acerto = 0;
let erro = 0;
let tentativas = 0;

function numeroAleatorio() {
    return Math.floor(Math.random() * (0 - 100 + 1)) + 100
}
let total = ''
// gerando numero aleatorio nas variaiveis
    aleatorio1 = numeroAleatorio();
    aleatorio2 = numeroAleatorio();
// gerando numero aleatorio nas variaiveis

//dando get do valor do html
    let n1 = window.document.getElementById('num1')
    n1.innerText = aleatorio1

    let n2 = window.document.getElementById('num2')
    n2.innerText = aleatorio2
//dando get do valor do html
    

    let resultado = window.document.getElementById('resultado')

//gerador de operador aleatorio
    let operadorAleatorio = numeroAleatorio();
    if (operadorAleatorio >= 50) {
        var operador = window.document.getElementById('operador')
        operador.innerText = '+'
    } else {
        var operador = window.document.getElementById('operador')
        operador.innerText = '-'
    }
//gerador de operador aleatorio   

   if (operadorAleatorio >= 50){
     total = aleatorio1+aleatorio2;
   } else if(operadorAleatorio < 50) {
    total = aleatorio1-aleatorio2;
   }

   
let entrada = window.document.getElementById('inputt')

let acertosT = window.document.getElementById('acertos')
let errosT = window.document.getElementById('erros')
let tentativasT = window.document.getElementById('tentativas')

//botao de verificar acerto e confirmar

function botaoClick(){
    if(entrada.value == total){
        acerto++
        tentativas++
        acertosT.innerHTML = `Total de Acertos: ${acerto}`
        tentativasT.innerHTML = `Total de Tentativas: ${tentativas}`
        entrada.value ='' //limpa o valor do input para se clicar 2x no mesmo calculo nao da certo
    }   else if (entrada.value == ''){ //validador de entrada nao nula
        operador.innerText ='Por favor digite um valor valido'
    } else {
        erro++
        tentativas++
        errosT.innerHTML = `Total de Erros: ${erro}`
        tentativasT.innerHTML = `Total de Tentativas: ${tentativas}`
        entrada.value =''  //limpa o valor do input para se clicar 2x no mesmo calculo nao da certo
    }

    n1.innerText = ''
    n2.innerText = ''
    operador.innerText = 'Por favor clique em proximo'

    if (tentativas == 10) {
        if (acerto >=9 && erro <=1 ){
            alert('Você obteve um frequência alta de acertos, recomendamos que suba o nivel !!')
        } 
    }
    
}

//botao prox pergunta

function botaoProx() {
    let prox1 = numeroAleatorio();
    let prox2 = numeroAleatorio();

    n1.innerText = prox1
    n2.innerText = prox2
//gerador de operador aleatorio
    let operadorAleatorio = numeroAleatorio();
    if (operadorAleatorio >= 50) {
        var operador = window.document.getElementById('operador')
        operador.innerText = '+'
    } else {
        var operador = window.document.getElementById('operador')
        operador.innerText = '-'
    }
//gerador de operador aleatorio    
   if (operadorAleatorio >= 50){
     total = prox1+prox2;
   } else if(operadorAleatorio < 50) {
    total = prox1-prox2;
   }
}
