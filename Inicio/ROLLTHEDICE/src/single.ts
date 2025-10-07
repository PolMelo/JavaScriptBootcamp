
document.addEventListener('DOMContentLoaded', () => {
        const tirarun = document.getElementById("tirarun");
    const fotodado = document.getElementById("dadosoltirar") as HTMLImageElement;

    if (tirarun) {
    tirarun.onclick = function (): void {
        const numero1 = Math.floor(Math.random() * 6) + 1;
                console.log(numero1);
        fotodado.src = `IMG/${numero1}.png`;
           switch (numero1) {
                case 1:
                    console.log("Cayó el número 1");
                    // Foto del dado cara = 1
                    
                    break;
                case 2:
                    console.log("Cayó el número 2");
                    // Foto del dado cara = 2
                    break;
                case 3:
                    console.log("Cayó el número 3");
                    // Foto del dado cara = 3
                    break;
                case 4:
                    console.log("Cayó el número 4");
                    // Foto del dado cara = 4
                    break;
                case 5:
                    console.log("Cayó el número 5");
                    // Foto del dado cara = 5
                    break;
                case 6:
                    console.log("Cayó el número 6");
                    // Foto del dado cara = 6
                    break;
                default:
                    console.log("Número fuera de rango");
                    break;
        }
    };
}
});