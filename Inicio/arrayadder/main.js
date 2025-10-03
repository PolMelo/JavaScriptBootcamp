

//! Creem array base amb numeros aleatoris
let randomNumbers = Array.from({length: 3}, () => Math.floor(Math.random() * 100));

mostrararray();

// Afegir items
push.onclick = function () {  
randomNumbers.push(Math.floor(Math.random() * 100));
console.log('Después de push:', randomNumbers);
mostrararray();
}

unshift.onclick = function (){
randomNumbers.unshift(Math.floor(Math.random() * 100));
console.log('Después de unshift:', randomNumbers);
mostrararray();
}

let posicioinsert = document.getElementById("posicioinsert").value;

insertat.onclick = function(event) {
    // Prevenir el comportamiento por defecto del submit
    event.preventDefault();
    
    // Obtener el valor actual del input
    let posicioinsert = document.getElementById("posicioinsert").value;
    
    // Convertir a número (los valores de inputs son strings)
    posicioinsert = parseInt(posicioinsert);

randomNumbers.splice(posicioinsert, 0, Math.floor(Math.random() * 100));
console.log('Después de insert at' + posicioinsert +":", randomNumbers);
mostrararray();
}

// Eliminar item
pop.onclick = function () { ;
randomNumbers.pop();
console.log('Después de pop:', randomNumbers);
mostrararray();
}

shift.onclick = function (){
randomNumbers.shift();
console.log('Después de shift:', randomNumbers);
mostrararray();
}


let posicioremove = document.getElementById("posicioremove").value;

removeat.onclick = function(event) {
    // Prevenir el comportamiento por defecto del submit
    event.preventDefault();
    
    // Obtener el valor actual del input
    let posicioremove = document.getElementById("posicioremove").value;
    
    // Convertir a número (los valores de inputs son strings)
    posicioremove = parseInt(posicioremove);


randomNumbers.splice(posicioremove, 1);
console.log('Array final:', randomNumbers);
mostrararray();
}




function mostrararray (){
//! El primer output (el que mostra l'array) esta buit
let output = "";

//! Recorrem l'array i l'anem emmagatzemant en output
for (let i = 0; i < randomNumbers.length; i++) {
  output += randomNumbers[i] + " ";
}

document.getElementById("parray").textContent = "[" + output + "]";

}
