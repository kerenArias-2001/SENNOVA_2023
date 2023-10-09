<?php
session_start();
include('../php/funciones.php');

  $miconexion=conectar_bd('', 'siadesos_planmaiz');
  $busqueda = consulta($miconexion, "SELECT * FROM usuario WHERE id_usuario like '{$_SESSION['id_usuario']}'");
  $fila1 = $busqueda -> fetch_object();
  $nombre = $fila1 -> nombre_u;
  $id_usuario = $fila1 -> id_usuario;
  $tipo_usuario = $fila1 -> tipo_usuario;
    if ($tipo_usuario!=null) {
        echo "1";
    }else{
        echo $nombre;
    }
  ?>