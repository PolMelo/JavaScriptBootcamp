document.addEventListener('DOMContentLoaded', () => {
    //!CAMBIOOOOOOOO
    // Código para la página double.html (dos dados)
    const tirardos = document.getElementById("tirardos");
    const fotodado1 = document.getElementById("doble1");
    const fotodado2 = document.getElementById("doble2");
    if (tirardos) {
        tirardos.onclick = function () {
            // Primer dado
            const numero1 = Math.floor(Math.random() * 6) + 1;
            console.log("Dado 1:", numero1);
            fotodado1.src = `IMG/${numero1}esquerra.png`;
            switch (numero1) {
                case 1:
                    console.log("Dado 1 - Cayó el número 1");
                    break;
                case 2:
                    console.log("Dado 1 - Cayó el número 2");
                    break;
                case 3:
                    console.log("Dado 1 - Cayó el número 3");
                    break;
                case 4:
                    console.log("Dado 1 - Cayó el número 4");
                    break;
                case 5:
                    console.log("Dado 1 - Cayó el número 5");
                    break;
                case 6:
                    console.log("Dado 1 - Cayó el número 6");
                    break;
                default:
                    console.log("Dado 1 - Número fuera de rango");
                    break;
            }
            // Segundo dado
            const numero2 = Math.floor(Math.random() * 6) + 1;
            console.log("Dado 2:", numero2);
            fotodado2.src = `IMG/${numero2}dreta.png`;
            switch (numero2) {
                case 1:
                    console.log("Dado 2 - Cayó el número 1");
                    break;
                case 2:
                    console.log("Dado 2 - Cayó el número 2");
                    break;
                case 3:
                    console.log("Dado 2 - Cayó el número 3");
                    break;
                case 4:
                    console.log("Dado 2 - Cayó el número 4");
                    break;
                case 5:
                    console.log("Dado 2 - Cayó el número 5");
                    break;
                case 6:
                    console.log("Dado 2 - Cayó el número 6");
                    break;
                default:
                    console.log("Dado 2 - Número fuera de rango");
                    break;
            }
            // También puedes mostrar la suma
            const suma = numero1 + numero2;
            console.log("Suma total:", suma);
        };
    }
});
