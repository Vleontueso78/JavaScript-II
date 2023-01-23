
// Codigo que sirve para compararlo con el bucle while.

for( var i = 0; i < 100; i++) {
    // Bloque de codigo
}

// Codigo N°1
// Este codigo lo que hace es que mientras que i sea menor que 100 se comple el console.log.
// ACLARACION: ¡SIEMPRE PONER UN i++ o j++ PARA QUE EL BUCLE SE DETENGA, SINO VA A SER INFINITO!.

var i = 0;

while (i < 100) {
    console.log(i);
    i++;
}

// Codigo N°2
// ACLARACION: ¡SIEMPRE PONER UN i++ o j++ PARA QUE EL BUCLE SE DETENGA, SINO VA A SER INFINITO!.
 
matriz(2, 3);

function matriz(n, m) {

var j = 0;
var i = 0;

while (i < n) {
    while(j < m) {
        console.log(i, j);
        j = j + 1;
    }
    j = 0;
    i = i + 1;
 }  
}

// Codigo N°2
// ACLARACION: ¡SIEMPRE PONER UN i++ o j++ PARA QUE EL BUCLE SE DETENGA, SINO VA A SER INFINITO!.

matriz(2, 3);

function matriz(n, m) {

var j = 0;
var i = 0;

while (i < n) {
    while(j < m) {
        console.log(i, j);
        j = j + 1;
    }
    j = 0;
    i = i + 1;
 }  
}

/* La diferencia entre el while y el for: Cuando se escribe el for, esta sabiendo
la condicion de parada, pero si no se sabe la condicion de parada. vamos a tener
que utilizar un while.

. Mientras se cumple esta condicion va a seguir...
Cuando se deja de cumplir termina.

.Pero no se sabe cuantas veces va a pasar hasta 
que termine.
*/

for (var j = 0; j < m; j++){
}