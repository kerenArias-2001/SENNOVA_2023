<?php

session_start();


if (isset($_SESSION['username']) == false) {
  include('funciones.php');
  $enviar = 0;
  $eliminar = 0;

  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $miconexion=conectar_bd('', 'siadesos_planmaiz');
$verificacion = consulta($miconexion, "ALTER TABLE conteo_usuarios AUTO_INCREMENT=1");
    $verificacion0 = consulta($miconexion, "SELECT MAX(id_usuario) as max_id from usuario");
$verificacion1 = consulta($miconexion, "SELECT MAX(id_conteo_usuarios) as conteo from conteo_usuarios");
    if ($verificacion0) {
      $verificacion = consulta($miconexion, "ALTER TABLE usuario AUTO_INCREMENT=1");
      $verificaci = consulta($miconexion, "ALTER TABLE terreno AUTO_INCREMENT=1");
      $verificacionf = consulta($miconexion, "ALTER TABLE fecha_analisist AUTO_INCREMENT=1");
      $fila0 = $verificacion0 -> fetch_object();
      $valor = $fila0 -> max_id;
      $valor = $valor + 1;
      $username = "User".$valor;


    } else {

      $fila0 = $verificacion0 -> fetch_object();
      $valor = $fila0 -> max_id;
      $valor = $valor + 1;
      $username = "user".$valor;

    }

    //$verificacion0=$verificacion0+1;


    if ($valor > 0) {
      //+$row0;//$_POST[''];
      // $password=$_POST[''];SELECT * FROM terreno WHERE id_user
$resultado = consulta($miconexion, "INSERT INTO `conteo_usuarios`( `id_usuarios_registrados`,`nombres_usuarios`)
              values('$valor','$username')");
      $resultado = consulta($miconexion, "INSERT INTO `usuario`( `nombre_u`)
            values('$username')");
            $resultado2 = consulta($miconexion, "INSERT INTO `terreno`(`surcos`,`distancia`,`id_user`)
            values(90, 15, '$valor')");
            $resultado3 = consulta($miconexion, "INSERT INTO `proceso_siembra`(`precio_semilla`,`id_user_siembra`)
            values(0, '$valor')");
            $resultadof = consulta($miconexion, "INSERT INTO `fecha_analisist`(`id_user_fecha_analisist`)
            values('$valor')");
            $resultadof1 = consulta($miconexion, "INSERT INTO `fecha_control_plaga`(`id_user_fecha_control_plaga`)
            values('$valor')");
            $resultadof2 = consulta($miconexion, "INSERT INTO `fecha_riego`(`id_user_fecha_riego`)
            values('$valor')");
            $resultadof4 = consulta($miconexion, "INSERT INTO `fecha_fertilizacion`(`id_user_fecha_fertilizacion`)
            values('$valor')");
            $resultadof5 = consulta($miconexion, "INSERT INTO `fecha_cosecha`(`id_user_fecha_cosecha`)
            values('$valor')");
            $resultadof6 = consulta($miconexion, "INSERT INTO `fecha_poscosecha`(`id_user_fecha_poscosecha`)
            values('$valor')");
            $resultadof7 = consulta($miconexion, "INSERT INTO `fecha_preparaciont`(`id_user_fecha_preparaciont`)
            values('$valor')");
            $resultadof8 = consulta($miconexion, "INSERT INTO `fecha_siembra`(`id_user_fecha_siembra`)
            values('$valor')");
            $resultadof9 = consulta($miconexion, "INSERT INTO `dofa`(`id_user_dofa`)
            values('$valor')");


  if ($resultado) {
        $_SESSION['username'] = $username;
        $_SESSION['id_usuario'] = $valor;
          //echo"inciciando sesion  '{$_SESSION['id_usuario']}'";
          echo '<script language="javascript">window.location.href = "../../pages/cargando.html"</script>';
      } else {
            echo "Error al guardar los datos: ".$miconexion -> error;
      }
    }
  }
} else {
        echo '<script language="javascript">window.location.href = "../../pages/paso1.html"</script>';
}

?>