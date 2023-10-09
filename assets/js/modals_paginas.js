function closed() {
    $("#modalContAnalisis").fadeOut();
    $("#modalFrameAnalisis").attr("src", "");
    $("#modalContPreparacion").fadeOut();
    $("#modalFramePreparacion").attr("src", "");
    $("#modalContRiego").fadeOut();
    $("#modalFrameRiego").attr("src", "");
    $("#modalContSiembra").fadeOut();
    $("#modalFrameSiembra").attr("src", "");
    $("#modalContFertilizacion").fadeOut();
    $("#modalFrameFertilizacion").attr("src", "");
   
    $("#modalContPlagas").fadeOut();
    $("#modalFramePlagas").attr("src", "");
    $("#modalContCosecha").fadeOut();
    $("#modalFrameCosecha").attr("src", "");
    $("#modalContPosCosecha").fadeOut();
    $("#modalFramePosCosecha").attr("src", "");
};

// separador de modal
$(document).ready(function() {
    $("#openGuiaAnalisis").click(function() {
    $("#modalContAnalisis").fadeIn();
    $("#modalFrameAnalisis").attr("src", "../instructivos/cartilla_paso1.html");
    });

// separador de modal
    $("#openGuiaPreparacion").click(function() {
    $("#modalContPreparacion").fadeIn();
    $("#modalFramePreparacion").attr("src", "../instructivos/cartilla_paso2.html");       
    });

// separador de modal
    $("#openGuiaRiego").click(function() {
    $("#modalContRiego").fadeIn();
    $("#modalFrameRiego").attr("src", "../instructivos/cartilla_paso3.html");
    });

// separador de modal
    $("#openGuiaSiembra").click(function() {
    $("#modalContSiembra").fadeIn();
    $("#modalFrameSiembra").attr("src", "../instructivos/cartilla_paso4.html");
    });

// separador de modal
    $("#openGuiaFertilizacion").click(function() {
    $("#modalContFertilizacion").fadeIn();
    $("#modalFrameFertilizacion").attr("src", "../instructivos/cartilla_paso5.html");
    });
    
    // separador de modal
    $("#openGuiaPlagas").click(function() {
    $("#modalContPlagas").fadeIn();
    $("#modalFramePlagas").attr("src", "../instructivos/cartilla_paso6.html");
    });
    
    // separador de modal
    $("#openGuiaCosecha").click(function() {
    $("#modalContCosecha").fadeIn();
    $("#modalFrameCosecha").attr("src", "../instructivos/cartilla_paso7.html");
    });

    // separador de modal
    $("#openGuiaPosCosecha").click(function() {
    $("#modalContPosCosecha").fadeIn();
    $("#modalFramePosCosecha").attr("src", "../instructivos/cartilla_paso8.html");
    });

});

var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});