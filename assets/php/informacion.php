<?php
session_start();
include('funciones.php');
  $miconexion = conectar_bd('', 'siadesos_planmaiz');
$busqueda2 = consulta($miconexion, "SELECT * FROM cambios_paginas WHERE id_cambios_paginas like 1"); //

$fila3 = $busqueda2 -> fetch_object();

$cambio3= $fila3 ->cambio3;
$cambio6= $fila3 ->cambio6;
?>