document.addEventListener('DOMContentLoaded', () => {
    const dadosingle = document.getElementById("dadosingle");
    const dadodouble = document.getElementById("dadodouble");

    if (dadosingle) {
        dadosingle.addEventListener('click', () => {
            window.location.href = "single.html";
        });
    }

    if (dadodouble) {
        dadodouble.addEventListener('click', () => {
            window.location.href = "double.html";
        });
    }
});


