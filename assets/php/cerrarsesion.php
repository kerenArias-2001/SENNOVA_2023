<?php
    session_start();
    include('funciones.php');
      $miconexion=conectar_bd('', 'siadesos_planmaiz');    
      $verificarusuario = consulta($miconexion, "SELECT * FROM usuario WHERE id_usuario like '{$_SESSION['id_usuario']}'");
     while ($fila = $verificarusuario -> fetch_assoc()) {
    $correo_u = $fila['correo_u']; 
    $seleccionados = $fila['id_usuario'];
    
    if ($correo_u == null) {
    // elimina los datos  en las tabla de inventario
        $consulta = consulta($miconexion, "DELETE FROM `analisis_terreno` WHERE  id_user_analisis like '$seleccionados'");
        $consulta = consulta($miconexion, "DELETE FROM `preparacion_terreno` WHERE  id_user_preparacion like '$seleccionados'");
        $consulta = consulta($miconexion, "DELETE FROM `sistema_riego` WHERE  id_user_sistema_riego like '$seleccionados'");
        $consulta = consulta($miconexion, "DELETE FROM `proceso_siembra` WHERE  id_user_siembra like '$seleccionados'");
        $consulta = consulta($miconexion, "DELETE FROM `fertilizacion` WHERE  id_user_fertilizacion like '$seleccionados'");
        $consulta = consulta($miconexion, "DELETE FROM `control_plaga` WHERE  id_user_control_plaga like '$seleccionados'");
        $consulta = consulta($miconexion, "DELETE FROM `cosecha` WHERE  id_user_cosecha like '$seleccionados'");
        $consulta = consulta($miconexion, "DELETE FROM `pos_cosecha` WHERE  id_user_pos_cosecha like '$seleccionados'");
        $consulta = consulta($miconexion, "DELETE FROM `terreno` WHERE  id_user like '$seleccionados'");
        //elimina en las tabla de fecha
        $consulta = consulta($miconexion, "DELETE FROM `fecha_analisist` WHERE  id_user_fecha_analisist like '$seleccionados'");
        $consulta = consulta($miconexion, "DELETE FROM `fecha_preparaciont` WHERE  id_user_fecha_preparaciont like '$seleccionados'");
        $consulta = consulta($miconexion, "DELETE FROM `fecha_riego` WHERE  id_user_fecha_riego like '$seleccionados'");
        $consulta = consulta($miconexion, "DELETE FROM `fecha_siembra` WHERE  id_user_fecha_siembra like '$seleccionados'");
        $consulta = consulta($miconexion, "DELETE FROM `fecha_fertilizacion` WHERE  id_user_fecha_fertilizacion like '$seleccionados'");
        $consulta = consulta($miconexion, "DELETE FROM `fecha_control_plaga` WHERE  id_user_fecha_control_plaga like '$seleccionados'");
        $consulta = consulta($miconexion, "DELETE FROM `fecha_cosecha` WHERE  id_user_fecha_cosecha like '$seleccionados'");
        $consulta = consulta($miconexion, "DELETE FROM `fecha_poscosecha` WHERE  id_user_fecha_poscosecha like '$seleccionados'");
        $consulta = consulta($miconexion, "DELETE FROM `dofa` WHERE  id_user_dofa like '$seleccionados'");
       
        //elimina en la tabla usuario
        $consulta = consulta($miconexion, "DELETE FROM `usuario` WHERE  id_usuario like $seleccionados");
        
    }
   }
  
   session_destroy();
    header('Location:../../index.html');
    
?>
