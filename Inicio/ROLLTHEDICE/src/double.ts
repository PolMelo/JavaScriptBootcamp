document.addEventListener('DOMContentLoaded', () => {
    const tirardos = document.getElementById("tirardos");
    const fotodado1 = document.getElementById("doble1") as HTMLImageElement;
    const fotodado2 = document.getElementById("doble2") as HTMLImageElement;
    const apuestaForm = document.getElementById("apuestaForm") as HTMLFormElement;
    const apuestaNumero = document.getElementById("apuestaNumero") as HTMLInputElement;
    const apuestaTipo = document.getElementById("apuestaTipo") as HTMLSelectElement;

    //Registrar clases per treure anuimacio
    const dado1 = document.getElementById('doble1') as HTMLImageElement;
    const dado2 = document.getElementById('doble2') as HTMLImageElement;

    // Todo lo del toasttttttttttttttt
    // Función para mostrar notificaciones toast
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
            if (apuestaValor > 12 || apuestaValor < 2) {
                    mostrarToast("Apuesta inválida: el número debe estar entre 1 y 6", "error");
                    return;
                }
            apuestaTipoValor = apuestaTipo.value;

            if (apuestaValor == 12 && apuestaTipoValor == 'mayor') {
                    mostrarToast("Apuesta inválida, no puede ser mayor que 12 we", "error");
                    return;
                }
            if (apuestaValor == 2 && apuestaTipoValor == 'menor') {
                    mostrarToast("Apuesta inválida, no puede ser menor que 2 we", "error");
                    return;
                }



            mostrarToast(`Apuesta guardada: ${apuestaTipoValor} ${apuestaValor}`, 'exito');
        });
    }

    if (tirardos) {
        tirardos.onclick = function (): void {
            // Primer dado, escollim foto esquerra en base al png
            const numero1 = Math.floor(Math.random() * 6) + 1;
            fotodado1.src = `IMG/${numero1}esquerra.png`;
            console.log(numero1);

            // Segundo dado
            const numero2 = Math.floor(Math.random() * 6) + 1;
            fotodado2.src = `IMG/${numero2}dreta.png`;
            console.log(numero2);

            //Eliminar la clase:
            dado1.classList.remove('dadoModo');
            dado2.classList.remove('dadoModo');
            //añadir la clase
            dado1.classList.add('dadoDobleTirat');
            dado2.classList.add('dadoDobleTirat');

            // Suma total
            const suma = numero1 + numero2;

            // Compara la apuesta con la suma
            //Queremos que no sean null ninguna de las dos (si el user deja vacio no hay apuesta)
            if (apuestaValor !== null && apuestaTipoValor !== null) {

                if (apuestaValor > 12 || apuestaValor < 2) {
                    mostrarToast("Apuesta inválida: el número debe estar entre 1 y 6", "error");
                    return;
                }

                  if (apuestaValor == 12 && apuestaTipoValor == 'mayor') {
                    mostrarToast("Apuesta inválida, no puede ser mayor que 12 we", "error");
                    return;
                }
            if (apuestaValor == 2 && apuestaTipoValor == 'menor') {
                    mostrarToast("Apuesta inválida, no puede ser menor que 2 we", "error");
                    return;
                }
                //De primeres perd, si falla que sigui al favor de la casa
                let resultado = false;
                switch (apuestaTipoValor) {
                    //va variant entre true i fase, si es true escollira si
                    case "mayor":
                        resultado = suma > apuestaValor;
                        break;
                    case "menor":
                        resultado = suma < apuestaValor;
                        break;
                    case "igual":
                        resultado = suma === apuestaValor;
                        break;
                }
                const mensaje = `El total de los dados es ${suma}. ¿Ganaste? ${resultado ? "¡Sí!" : "No."}`;
                mostrarToast(mensaje, resultado ? 'exito' : 'error');
            }
        };
    }




});