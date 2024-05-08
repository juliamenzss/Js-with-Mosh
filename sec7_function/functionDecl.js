walk();


//function Declaration. Funciona antes do codigo 
function walk(){
    console.log('walk');
}


//function Expression, so funciona abaixo da linha do codigo
const run = function() {
    console.log('run');
};

let move = run;
run();
move();