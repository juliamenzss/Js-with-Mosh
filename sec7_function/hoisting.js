walk();

//function Declaration. Funciona antes do codigo, iça para cima a funçao
function walk(){
    console.log('walk');
}


//function Expression, so funciona abaixo da linha do codigo, nao iça
run();

const run = function() {
    console.log('run');
};
