// VARIABLES
let movSuma = null;
let resultado1 = null;
let resultado2 = null;
let tarjeta1 = null;
let tarjeta2 = null;
let tarjetaRevelada=0;
let posCartas = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]; // vector para las posiciones de las cartas
// funcion para ordenar aleatoriamente
posCartas = posCartas.sort(()=>{return Math.random()-0.5});
console.log(posCartas);

// RECOGER ELEMENTOS HTML
let mostrarMov = document.getElementById(mov);


//FUNCIONES
function revelar(id){
    tarjetaRevelada ++;
    console.log(tarjetaRevelada);
    // mostrar primer carta
    if (tarjetaRevelada==1){
        tarjeta1=document.getElementById(id);
        resultado1=posCartas[id] // variable para comparar
        tarjeta1.innerHTML=resultado1; //asocia los id del html con el contenido del vector
        
        // deshabilitar primera carta
        tarjeta1.disabled = true;
        // mostrar segunda carta
    }else if(tarjetaRevelada == 2){
        tarjeta2=document.getElementById(id);
        resultado2=posCartas[id];
        tarjeta2.innerHTML=resultado2;
        tarjeta2.disabled = true;

        // contador de mov
        movSuma ++;
        mostrarMov.innerHTML= 'MOVIMIENTOS: '+ $movSuma;
    }
};
