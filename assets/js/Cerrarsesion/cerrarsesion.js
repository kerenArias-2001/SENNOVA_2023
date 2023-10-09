function Cerrarsesion(){
    
    console.log("aqui");
      Swal.fire({
          type: 'success',
          title: '<h4>Alerta</h4>',
          text: 'Asegurese de guardar los cambios antes de salir',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Guardar',
          denyButtonText: `No guardar`
      }).then((result) => {
          if (result.isConfirmed) {
              // Acci��n a realizar al hacer clic en "Guardar" // man daria crear el usuario
              openModal1();
          } else if (result.isDenied) {
              // Acci��n a realizar al hacer clic en "No guardar" elimina la informasion del  usuario incluyendo la bd
              window.location.href=("../assets/php/cerrarsesion.php");
          } else {
              // Acci��n a realizar al hacer clic en "Cancelar"
              alert('Has seleccionado Cancelar');//continua el proceso 
          }
      });
  }
  
  function openModal1() {
    var modal = document.getElementById("modal_usuario");
    
    modal.style.display = "block"; // muestra el modal
  }
  
  function closeModal1() {
  var modal = document.getElementById("modal_usuario");
  
  modal.style.display = "none"; // oculta el modal
  }



    
    