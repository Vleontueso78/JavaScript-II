// Imprimir los numeros del 1 al 10

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

// Funcion que imprima los numeros del 1 a N (Que pasa por argumento)

if (N >= 1) {
    console.log(1);
}
if (N >= 2) {
    console.log(2);
}
console.log(3);
console.log(4);

// Bucle for.

for (var i = 0; i <= 100; i++) {
    // bloque de codigo que se va a repetir.
}

for (var i = 1; i <= 100; i++) {
    console.log(i);
}

// Codigo N°1
// Funcion que imprime los numeros del 1 al N.

imprime1aN(10);

function imprime1aN(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}

// Codigo N°2
// Este codigo se utiliza para escribir solamente numeros pares.

imprime1aN(10);

function imprime1aN(n) {
    for (var i = 1; i <= n; i++) {
        if( i % 2 === 0) {
            console.log(i);
        }
    }
}

// Codigo N°3
// Este codigo se utiliza para imprimir numeros pares hasta un limite declarado por un return. 

imprime1aN(300);

function imprime1aN(n) {
    for (var i = 1; i <= n; i++) {
        if( i % 2 === 0) {
            console.log(i);
        }
        if( i > 200) {
            return;
        }
    }
}

// Codigo N°4
// Este codigo imprimi los numeros del 1 al 200 solos los pares hasta que llega al 200 y imprime del 0 al 9.
imprime1aN(201);

function imprime1aN(n) {
    for (var i = 1; i <= n; i++) {
        if( i % 2 === 0) {
            console.log(i);
        }
        if( i > 200) {
            for(var j = 0; j < 10; j++){
                console.log(j);
            }
            return;
        }
    }
}