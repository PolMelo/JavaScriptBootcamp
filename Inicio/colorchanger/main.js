const btn = document.getElementById('colortoggle');
const box = document.getElementById('colorin');

btn.addEventListener('click', function onClick(event) {
  box.style.color = 'red';
});


const btn2 = document.getElementById('colortoggle2');

$('#colortoggle2').click(function(event) {
    $('#colorin').css('color', 'blue');
});