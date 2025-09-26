/*1. Crea una función arrow function que retorne tu nombre y tus apellidos e imprímelos por pantalla desde fuera de la función 
2. Crea una función con nombre y sin return. Pásale un tipo de dato boolean y dentro de la función imprime el 
valor el valor que hemos pasado por los parámetros. 
3. Crea una función que reciba parámetros infinitos, haz la llamada con los valores 1,2,3,4,5 y muestra dichos mediante un forEach. */

//ejercicio 1
const arrowFunctionNombre = (nom, apellido) => {
    console.log("Bienvenido " + nom +" " + apellido) ;
};

arrowFunctionNombre("Pol", "Melo");

//ejercicio 2

function ejercicio2 (boolean = false) {

    console.log(boolean);
}
ejercicio2(true);

//ejercicio 3
function infinito (...num) {
    num.forEach(num => {
        console.log(num);
        
    });
}

infinito(1,2,3,4,5);


/*1. A partir de la siguiente instrucción que genera un número aleatorio console.log(Math.round(Math.random())); 
que genera un número aleatorio O o 1. Haz una función con return, 
invocala y muestra por consola cara si el. valor es 1 y cruz si el. valor es O. */

function jugar() {
    return(Math.round(Math.random(0,1)));
}

const resultado = jugar ();

if (resultado === 1) {
    console.log("cara");
} else if (resultado === 0) {
    console.log("cruz");
}
else {
    console.log("algo has fet malament");
}


/* EJERCICIO  
1. Crea una función pasa 3 números por parámetros súmalos y devuelve el resultado mediante a return. 
Finalmente muéstralos por pantalla 
2. Crea una función y escribe tu nombre completo en 3 parámetros: nombre, apellido1, apellido2 y concaténalos y muéstralos por pantalla 
3. Crea una función que acepte dos números y devuelva el número mayor */

//Ejercicio 1

function sumador (num1, num2, num3) {
    return(num1 + num2 +num3);
}

console.log(sumador(3,4,9));

//Ejercicio 2
const FunctionNombre = (nom, apellido, apellido2) => {
    console.log("Bienvenido " + nom +" " + apellido +" " +apellido2) ;
};

FunctionNombre("Pol", "Melo", "Subirat");

//Ejercicio 3
function mayorque(num1, num2){
    if (num1 > num2) {
        console.log(num1);
    }
    else if (num2 > num1){
         console.log(num2);
    }
    else if (num2 = num1) {
        console.log("Son igualesssss")
    }
    else {
        console.log("Algo esta mal")
    }

   
}

mayorque(1,3);

/* 1. Realiza un switch case que muestre el. mes del año cuando lo introduzcamos en formato numérico (1 al 12) 
2. Realiza un switch case en el. que puedas introducir un número del uno al cinco en un string y lo transforme a un número 
*/

//Ejercicio 1

let mesnumero = 9 //introduce numero del 1-12

switch (mesnumero){
        case 1:
        console.log("enero");
        break;
        case 2:
        console.log("febrero");
        break;
        case 3:
        console.log("marzo");
        break;
        case 4:
        console.log("abril");
        break;
        case 5:
        console.log("mayo");
        break;
        case 6:
        console.log("junio");
        break;
        case 7:
        console.log("julio");
        break;
        case 8:
        console.log("agosto");
        break;
        case 9:
        console.log("septiembre");
        break;
        case 10:
        console.log("octubre");
        break;
         case 11:
        console.log("noviembre");
        break;
         case 12:
        console.log("diciembre");
        break;
}

let unoacinco = "cinco" //introduce numero del uno al cinco

switch (unoacinco){
    case "uno":
        console.log("1");
        break;
         case "dos":
        console.log("2");
        break;
         case "tres":
        console.log("3");
        break;
         case "cuatro":
        console.log("4");
        break;
         case "cinco":
        console.log("5");
        break;
}


/*1. Investiga como crear un número aleatorio (O o 1) con el método random de Math.
 2. Investiga como redondear el. valor de Math.Pl 3,1415... a la parte decimal 3.*/

 console.log(Math.random());

const pi = Math.PI;
console.log(pi.toFixed(3));
