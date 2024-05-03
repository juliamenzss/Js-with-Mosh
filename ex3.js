//speed  Limit = 70
// 5 -> 1 point
// Mat.floor(1.3)
// 12 points -> suspended

//criar controle de velocidade maxima
//velocidade atual menos velocidade permitida dividido por 5


let velocidadeMaxima = 70;
let kmPorPonto = 5;

function verificaVelocidade(velocidade){
    const pontos = Math.floor((velocidade - velocidadeMaxima) / 5)
    if(velocidade <= velocidadeMaxima){
        console.log('OK');
    }else if(velocidade > velocidadeMaxima && pontos < 12){
        console.log(`Velocidade maxima ultrapassada, voce perdeu ${pontos} pontos na carteira`);
    }else if(velocidade > velocidadeMaxima && pontos > 12){
        console.log('Voce perdeu sua carteira.');
    }
}

verificaVelocidade(200);