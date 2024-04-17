// VARIABLES

let resultado1 = null;
let resultado2 = null;
let tarjeta1 = null;
let tarjeta2 = null;
let tarjetaRevelada=0;
let posCartas = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]; // vector para las posiciones de las cartas
// funcion para ordenar aleatoriamente
posCartas = posCartas.sort(()=>{return Math.random()-0.5});
console.log(posCartas);
let movSuma = null;
let scoreSuma = null;
let reloj = false;
let tiempo = 60;

// RECOGER ELEMENTOS HTML
let mostrarMov = document.getElementById('mov');
let mostrarScore = document.getElementById('puntos');
let mostrarTiempo = document.getElementById('tiempo');

//FUNCIONES
function tempReloj(){
    setInterval(()=>{
        tiempo --;
        mostrarTiempo.innerHTML = `TIEMPO: ${tiempo}s`;
    },1000)
}

function revelar(id){

    if(reloj == false){
        tempReloj();
        reloj=true;
    }

    tarjetaRevelada ++;
    console.log(tarjetaRevelada);
    // mostrar primer carta
    if (tarjetaRevelada==1){
        tarjeta1=document.getElementById(id);
        resultado1=posCartas[id]; // variable para comparar
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
        mostrarMov.innerHTML= `MOVIMIENTOS: ${movSuma}`; // INVESTIGAR (``) !!!!!

        // verificar la igualdad de las dos cartas
        if(resultado1 == resultado2){
            tarjetaRevelada = 0; // reiniciar pq ya se verifico igualdad
            // score suma puntaje
            scoreSuma ++;
            mostrarScore.innerHTML=`SCORE: ${scoreSuma}`;
            // si no son iguales, se muestran y ocultan por un tiempo
        }else{
            setTimeout(()=>{
                tarjeta1.innerHTML = '';
                tarjeta1.disabled=false;
                tarjeta2.innerHTML = '';
                tarjeta2.disabled=false;
                tarjetaRevelada = 0;
            },1000) // temporizador
        }

        if(scoreSuma==8){
            mostrarScore.innerHTML=`SCORE: ${scoreSuma} ✨🎊`;
            mostrarMov.innerHTML=`MOVIMIENTOS: ${movSuma} 🤔😮`;
        }
    }
};
