

$("#carta").on("mouseover", function () {
    $('#carta').attr('src','card-front.png');
});

$("#carta").on("mouseleave", function () {
    $('#carta').attr('src','card-back.png');
});
