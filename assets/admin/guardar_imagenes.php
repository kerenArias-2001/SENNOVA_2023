<?php

include('../php/funciones.php');

  $miconexion=conectar_bd('', 'siadesos_planmaiz');
      

$directorioImagenes = 'C:/xampp/htdocs/NUEVO_PROYECTO/assets/img';
$pagina=$_POST['pagina'];
$nombreImagen = $_FILES['imagen']['name'];
if ($pagina=="paso1") {
  $nombreImagen = "fondopaso1.jpg";
}elseif($pagina=="paso1"){
  $nombreImagen = "fondopaso2.jpg";
}


$caracteres_a_quitar = array("(", ")", "$", "%", "&", "/"," ","-","_","!","@","#");//   selecccion de caracteres que no son permitido
$nombreImagen=str_replace($caracteres_a_quitar, '', $nombreImagen);// reemplaza al nuevo nombre

$rutaImagen = $directorioImagenes . '/' . $nombreImagen;// ruta de para guardar imagen
if (move_uploaded_file($_FILES['imagen']['tmp_name'], $rutaImagen)) {
  $resultado = consulta($miconexion, "UPDATE `imagenes` SET `nombre_imagen`='$nombreImagen' WHERE `id_imagenes`LIKE 1");

  echo 1;// alerta para exitoso
} else {
  echo 2;'Error al subir la imagen.';// alerta para error
}
?>