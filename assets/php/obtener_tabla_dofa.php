<?php
    session_start();
    include('funciones.php');
  $miconexion=conectar_bd('', 'siadesos_planmaiz');

   //   $miconexion = conectar_bd('', 'siadesos_planmaiz');
 //     if ($_SESSION['id_usuario']!=NULL) {
      $busqueda = consulta($miconexion, "SELECT * FROM dofa WHERE id_user_dofa like '{$_SESSION['id_usuario']}'");
     
      
  $fila1 = $busqueda -> fetch_assoc();
      $nombre_d = $fila1['nombre_d'];
      $descripcion_d=$fila1['descripcion_d'];
      $nombre_o = $fila1['nombre_o'];
      $descripcion_o=$fila1['descripcion_o'];
      $nombre_f = $fila1['nombre_f'];
      $descripcion_f=$fila1['descripcion_f'];
      $nombre_a = $fila1['nombre_a'];
      $descripcion_a=$fila1['descripcion_a'];
  

    //-----------------------tabla de costos-----------------------------
    $tablaHTML = "<table class'mx-auto col-12 my-3'><thead>";
    $tablaHTML.= "<tr class='bg-gradient-success text-white' style='font-weight: bold;' >
    <td colspan='1' class='text-center'>Debilidades</td><td>Oportunidades</td><td>Fortalezas</td><td>Amenzas</td></tr></thead>";// Encabezado de la tabla
    $tablaHTML.= "<tbody><tr>";
    $tablaHTML.= "<td>".$nombre_d. ":<br>".$descripcion_d."</td>";
    $tablaHTML.= "<td>".$nombre_o.":<br>".$descripcion_o."</td>";
    $tablaHTML.= "<td>".$nombre_f.":<br>".$descripcion_f."</td>";
    $tablaHTML.= "<td>".$nombre_a.":<br>".$descripcion_a."</td>";

    $tablaHTML.= "</tr></tfoot>";
    $tablaHTML.= "</table>";

    echo $tablaHTML;
  //}else {
   // echo '<script language="javascript">window.location.href = "../index.html"</script>';
  //}
      
?>
