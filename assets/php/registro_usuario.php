<?php
  session_start();
  include('funciones.php');
    $miconexion=conectar_bd('', 'siadesos_planmaiz');
  $registro = $_POST['valida_opcion'];

  $nombre_u = $_POST['nombres'];
  $apellido_u = $_POST['apellidos'];
  $correo_u = $_POST['correo'];
  $psw_u = $_POST['psw'];
  if ($registro == 'registrar') {
    if (isset($_SESSION['username']) == false) {


      $enviar = 0;
      $eliminar = 0;
      $validacion = 0;



      $validacion_usuario = consulta($miconexion, "SELECT  EXISTS(select * from usuario where  trim(correo_u) like '{$correo_u}' ) ");
      $row0 = mysqli_fetch_row($validacion_usuario);
      if ($row0[0] == "0") {

        /* $verificacion=consulta($miconexion,"SELECT  EXISTS(select * from usuario where trim(correo_adm) like '{$correo_usuario}'  ) ");
          $row1=mysqli_fetch_row($verificacion);
          if ($row1[0]=="0" ) { */
            $verificacion = consulta($miconexion, "ALTER TABLE conteo_usuarios AUTO_INCREMENT=1");

        $verificacion0 = consulta($miconexion, "SELECT MAX(id_usuario) as max_id from usuario");
        if ($verificacion0) {
          $verificacion = consulta($miconexion, "ALTER TABLE usuario AUTO_INCREMENT=1");
          $verificaci = consulta($miconexion, "ALTER TABLE terreno AUTO_INCREMENT=1");
          $fila0 = $verificacion0 -> fetch_object();
          $valor = $fila0 -> max_id;
          $valor = $valor + 1;

        } else {

          $fila0 = $verificacion0 -> fetch_object();
          $valor = $fila0 -> max_id;
          $valor = $valor + 1;

        }


        if ($valor > 0) {
          //+$row0;//$_POST[''];
          // $password=$_POST[''];SELECT * FROM terreno WHERE id_user
          $resultado = consulta($miconexion, "INSERT INTO `conteo_usuarios`( `id_usuarios_registrados`,`nombres_usuarios`)
          values('$valor','$correo_u')");
          $resultado = consulta($miconexion, "INSERT INTO `usuario`( `nombre_u`,`apellido_u`,`correo_u`,`psw_u`)
                values('$nombre_u', '$apellido_u', '$correo_u', '$psw_u')");
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
                $resultadof8 = consulta($miconexion, "INSERT INTO `dofa`(`id_user_dofa`)
                values('$valor')");
                             
             
                $validacion = 1;
                echo $validacion;
        }
      } else {
        $validacion = 2;
          echo $validacion;
      }

    }
  } else if ($registro == 'actualizar') {
    $nombre_u1 = $_POST['nombre_u'];

    $verificarusuario = consulta($miconexion, "SELECT * FROM usuario WHERE nombre_u like '%$nombre_u1%'");

    /*         echo"***************+++++++++++++++++++++++*****************************",$_SESSION['nusuario'];*/
    $fila1 = $verificarusuario -> fetch_object();

    $id_usuario = $fila1 -> id_usuario;

    $resultado = consulta($miconexion, "UPDATE `usuario` SET `nombre_u`='$nombre_u',`psw_u`='$psw_u',`apellido_u`='$apellido_u',`correo_u`='$correo_u'  WHERE `id_usuario`LIKE  '$id_usuario'");

      echo "3";


  }
 // }

?>