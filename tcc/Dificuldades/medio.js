
let acerto = 0;
let erro = 0;
let tentativas = 0;

function numeroAleatorio() {
    return Math.floor(Math.random() * (0 - 100 + 1)) + 100
}

function numeroAleatorioDez(){  //numero aleatorio de 1 a 10
    return Math.floor(Math.random() * 10 + 1)
}

let total = ''
// gerando numero aleatorio nas variaiveis
    aleatorio1 = numeroAleatorio();
    aleatorio2 = numeroAleatorio();
    aleatorio3 = numeroAleatorioDez();
// gerando numero aleatorio nas variaiveis

//dando get do valor do html
    let n1 = window.document.getElementById('num1')
    n1.innerText = aleatorio1

    let n2 = window.document.getElementById('num2')
    n2.innerText = aleatorio2

    let n3 = window.document.getElementById('num3')
    n3.innerText = aleatorio3

    let p1 = window.document.getElementById('parenteses1')

    let p2 = window.document.getElementById('parenteses2')
    

    let operador2 = window.document.getElementById('operador2')
    operador2.innerText = 'X';
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
     total = total * aleatorio3;
   } else if(operadorAleatorio < 50) {
    total = aleatorio1-aleatorio2;
    total = total * aleatorio3;
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
    } else {
        erro++
        tentativas++
        errosT.innerHTML = `Total de Erros: ${erro}`
        tentativasT.innerHTML = `Total de Tentativas: ${tentativas}`
    }

    n1.innerText = ''
    n2.innerText = ''
    operador.innerText = 'Por favor clique em proximo'
    operador2.innerText = ''
    n3.innerText = ''
    parenteses1.innerText = ''
    parenteses2.innerText= ''
  
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
    let prox3 = numeroAleatorioDez();

    n1.innerText = prox1
    n2.innerText = prox2
    n3.innerText = prox3
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
     total = total * prox3;
   } else if(operadorAleatorio < 50) {
    total = prox1-prox2;
    total = total * prox3;
   }
   operador2.innerText = 'X'
   parenteses1.innerText = '('
   parenteses2.innerText= ')'
}
