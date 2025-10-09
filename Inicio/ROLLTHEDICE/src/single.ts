document.addEventListener('DOMContentLoaded', () => {
    const tirarun = document.getElementById("tirarun");
    const fotodado = document.getElementById("dadosoltirar") as HTMLImageElement;
    const apuestaForm = document.getElementById("apuestaForm") as HTMLFormElement;
    const apuestaNumero = document.getElementById("apuestaNumero") as HTMLInputElement;
    const apuestaTipo = document.getElementById("apuestaTipo") as HTMLSelectElement;


    //Registrar clases per treure anuimacio
    const dadosoltirar = document.getElementById('dadosoltirar') as HTMLImageElement;

    // todo lo del toastttttttttttt
    function mostrarToast(mensaje: string, tipo: 'exito' | 'error' | 'info' = 'info') {
        const toast = document.createElement('div');
        toast.textContent = mensaje;
        toast.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%) translateY(-50px);
    padding: 12px 20px;
    background: ${tipo === 'exito' ? '#4CAF50' : tipo === 'error' ? '#f44336' : '#2196F3'};
    color: white;
    border-radius: 4px;
    z-index: 1000;
    opacity: 0;
    transition: all 0.3s ease;
    max-width: 300px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
`;

        document.body.appendChild(toast);

        // Animación de entrada
        setTimeout(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateX(-50%) translateY(0)';
        }, 100);

        // Auto-eliminar después de 3 segundos
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(-50%) translateY(-50px)';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }




    // Variables para guardar la apuesta
    let apuestaValor: number | null = null;
    let apuestaTipoValor: string | null = null;

    if (apuestaForm) {
        apuestaForm.addEventListener("submit", function (e) {
            e.preventDefault();
            apuestaValor = parseInt(apuestaNumero.value, 10);

            if (apuestaValor > 6 || apuestaValor < 1) {
                    mostrarToast("Apuesta inválida: el número debe estar entre 1 y 6", "error");
                    return;
                }
            apuestaTipoValor = apuestaTipo.value;

            if (apuestaValor == 6 && apuestaTipoValor == 'mayor') {
                    mostrarToast("Apuesta inválida, no puede ser mayor que 6 we", "error");
                    return;
                }
            if (apuestaValor == 1 && apuestaTipoValor == 'menor') {
                    mostrarToast("Apuesta inválida, no puede ser menor que 1 we", "error");
                    return;
                }


            mostrarToast(`Apuesta guardada: ${apuestaTipoValor} ${apuestaValor}`, 'exito');
        });
    }

    if (tirarun) {
        tirarun.onclick = function (): void {
            const numero1 = Math.floor(Math.random() * 6) + 1;
            fotodado.src = `IMG/${numero1}.png`;


            //Eliminar la clase para que no gire mas
            dadosoltirar.classList.remove('dadoModo');

            // Compara la apuesta con el resultado
            if (apuestaValor !== null && apuestaTipoValor !== null) {
                if (apuestaValor > 6 || apuestaValor < 1) {
                    mostrarToast("Apuesta inválida: el número debe estar entre 1 y 6", "error");
                    return;
                }
            if (apuestaValor == 6 && apuestaTipoValor == 'mayor') {
                    mostrarToast("Apuesta inválida, no puede ser mayor que 6 we", "error");
                    return;
                }
            if (apuestaValor == 1 && apuestaTipoValor == 'menor') {
                    mostrarToast("Apuesta inválida, no puede ser menor que 1 we", "error");
                    return;
                }

                let resultado = false;
                switch (apuestaTipoValor) {
                    case "mayor":
                        resultado = numero1 > apuestaValor;
                        break;
                    case "menor":
                        resultado = numero1 < apuestaValor;
                        break;
                    case "igual":
                        resultado = numero1 === apuestaValor;
                        break;
                }
                const mensaje = `Ha salido el: ${numero1}. ¿Ganaste? ${resultado ? "¡Sí!" : "No."}`;
                mostrarToast(mensaje, resultado ? 'exito' : 'error');
            }
        };
    }
});