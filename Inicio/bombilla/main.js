const btn = document.getElementById('botofuncionament');
const box = document.getElementById('llum');
const botofoto = document.getElementById("botofoto")

if (box.src === "IMG/on.jpg") {box.dataset.estado = "encendido";}
else if (box.src === "IMG/off.jpg"){box.dataset.estado = "apagado";}

btn.addEventListener('click', function onClick(event) {
  
  if (box.dataset.estado === 'apagado') {
    box.src = 'IMG/on.jpg';
    botofoto.src = "IMG/bon.jpg"
    box.dataset.estado = 'encendido';
  } else {
    box.src = 'IMG/off.jpg';
    botofoto.src = "IMG/boff.jpg"
    box.dataset.estado = 'apagado';
    
  }
});