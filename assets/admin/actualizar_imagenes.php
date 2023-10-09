<?php
   
session_start();
include('../php/funciones.php');

  $miconexion=conectar_bd('', 'siadesos_planmaiz');

  $busqueda2 = consulta($miconexion, "SELECT * FROM imagenes WHERE id_imagenes like 1");
  $fila3 = $busqueda2 -> fetch_object();
  $imagen_body = $fila3 -> nombre_imagen;
  $valores = array(
    'valor00'=>$imagen_body
  );

  // Devolvemos los valores como un JSON
  header('Content-Type: application/json');
    echo json_encode($valores);
        
?>