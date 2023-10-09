<?php
   
session_start();
include('../php/funciones.php');
$Selection_pagina=$_POST['Selection_pagina'];
  $miconexion=conectar_bd('', 'siadesos_planmaiz');

  

  $guardar1 = $_POST['guardar1'];

  $guardar4 = $_POST['guardar4'];
  $guardar8 = $_POST['guardar8'];
  $guardar10 = $_POST['guardar10'];
  $guardar11 = $_POST['guardar11'];
  $guardar12 = $_POST['guardar12'];
  $guardar13 = $_POST['guardar13'];
  $guardar14 = $_POST['guardar14'];
  $guardar15 = $_POST['guardar15'];
  $guardar16 = $_POST['guardar16'];
  $guardar17 = $_POST['guardar17'];
  $guardar18 = $_POST['guardar18'];
  $guardar19 = $_POST['guardar19'];
  $guardar20 = $_POST['guardar20'];
  $guardar21 = $_POST['guardar21'];
  $guardar22 = $_POST['guardar22'];
  $guardar23 = $_POST['guardar23'];
  $guardar24 = $_POST['guardar24'];
  $guardar25 = $_POST['guardar25'];
  $guardar26 = $_POST['guardar26'];
  $guardar27 = $_POST['guardar27'];
  $guardar28 = $_POST['guardar28'];
  $guardar29 = $_POST['guardar29'];
  $guardar30 = $_POST['guardar30'];
  $guardar31 = $_POST['guardar31'];
  $guardar32 = $_POST['guardar32'];
  $guardar33 = $_POST['guardar33'];
  $guardar34 = $_POST['guardar34'];
  $guardar35 = $_POST['guardar35'];
  $guardar36 = $_POST['guardar36'];
  $guardar37 = $_POST['guardar37'];
  $guardar38 = $_POST['guardar38'];
  $guardar39 = $_POST['guardar39'];
  $guardar40 = $_POST['guardar40'];
  $guardar41 = $_POST['guardar41'];
  $guardar42 = $_POST['guardar42'];
  $guardar43 = $_POST['guardar43'];
  $guardar44 = $_POST['guardar44'];
  $guardar45 = $_POST['guardar45'];
  $guardar46 = $_POST['guardar46'];
  if ($Selection_pagina==="paso1") {
    $id=1;
   // $guardar2='fondo1.jpg';
  }elseif($Selection_pagina=='paso2'){
    $id=2;
    //$guardar2='fondo2.jpg';
  }elseif($Selection_pagina=='paso3'){
    $id=3;
    //$guardar2='fondo3.jpg';
  }elseif($Selection_pagina=='paso4'){
    $id=4;
    //$guardar2='fondo4.jpg';
  }elseif($Selection_pagina=='paso5'){
    $id=5;
    //$guardar2='fondo5.jpg';
  }elseif($Selection_pagina=='paso6'){
    $id=6;
    //$guardar2='fondo6.jpg';
  }elseif($Selection_pagina=='paso7'){
    $id=7;
    //$guardar2='fondo7.jpg';
  }elseif($Selection_pagina=='paso8'){
    $id=8;
 //   $guardar2='fondo8.jpg';
  }

  
  
  if (isset($_FILES['guardar2']['name']) && !empty($_FILES['guardar2']['name'])) { 
    $directorioImagenes = '../img';
    $guardar2 = $_FILES['guardar2']['name'];
  $caracteres_a_quitar = array("(", ")", "$", "%", "&", "/"," ","-","_","!","@","#");//   selecccion de caracteres que no son permitido
  $guardar2=str_replace($caracteres_a_quitar, '', $guardar2);// reemplaza al nuevo nombre
  
  $rutaImagen = $directorioImagenes . '/' . $guardar2;// ruta de para guardar imagen


  if (move_uploaded_file($_FILES['guardar2']['tmp_name'], $rutaImagen)) {
    $resultado = consulta($miconexion,
  "UPDATE `cambios_paginas` SET `cambio2`='$guardar2'  WHERE `id_cambios_paginas` LIKE $id");
  } 
}

  $resultado = consulta($miconexion,
  "UPDATE `cambios_paginas` SET `cambio1`='$guardar1',
   `cambio4`='$guardar4',
   `cambio8`='$guardar8',
   `cambio10`='$guardar10',
   `cambio11`='$guardar11',
   `cambio12`='$guardar12',
   `cambio13`='$guardar13',
   `cambio14`='$guardar14',
   `cambio15`='$guardar15',
   `cambio16`='$guardar16',
   `cambio17`='$guardar17',
   `cambio18`='$guardar18',
   `cambio19`='$guardar19',
   `cambio20`='$guardar20',
   `cambio21`='$guardar21',
   `cambio22`='$guardar22',
   `cambio23`='$guardar23',
   `cambio24`='$guardar24',
   `cambio25`='$guardar25',
   `cambio26`='$guardar26',
   `cambio27`='$guardar27',
   `cambio28`='$guardar28',  
   `cambio29`='$guardar29',
   `cambio30`='$guardar30',
   `cambio31`='$guardar31',
   `cambio32`='$guardar32',
   `cambio33`='$guardar33',
   `cambio34`='$guardar34',
   `cambio35`='$guardar35',
   `cambio36`='$guardar36',
   `cambio37`='$guardar37',
   `cambio38`='$guardar38',
   `cambio39`='$guardar39',
   `cambio40`='$guardar40',
   `cambio41`='$guardar41',
   `cambio42`='$guardar42',
   `cambio43`='$guardar43',
   `cambio44`='$guardar44',
   `cambio45`='$guardar45',
   `cambio46`='$guardar46'
  WHERE `id_cambios_paginas` LIKE $id");

if ($Selection_pagina==="paso1") {
 echo 1;
}elseif($Selection_pagina=='paso2'){
 echo 2;
}elseif($Selection_pagina=='paso3'){
 echo 3;
}elseif($Selection_pagina=='paso4'){
 echo 4;
}elseif($Selection_pagina=='paso5'){
 echo 5;
}elseif($Selection_pagina=='paso6'){
 echo 6;
}elseif($Selection_pagina=='paso7'){
 echo 7;
}elseif($Selection_pagina=='paso8'){
 echo 8;
}

  



 // $resultado = consulta($miconexion, "UPDATE `cambios_paso1` SET `cambio9`='$cambio9' WHERE `id_cambios_paso1`LIKE 1");


?>