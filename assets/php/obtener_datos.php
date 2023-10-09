<?php
    
  session_start();
  include('funciones.php');

  // Creamos un array con los valores
    $miconexion=conectar_bd('', 'siadesos_planmaiz');
    if ($_SESSION['id_usuario']!=NULL) {
    $busqueda = consulta($miconexion, "SELECT * FROM usuario WHERE id_usuario like '{$_SESSION['id_usuario']}'");

    /*         echo"***************+++++++++++++++++++++++*****************************",$_SESSION['nusuario'];*/
    $fila1 = $busqueda -> fetch_object();
    $nombre = $fila1 -> nombre_u;
    $id_usuario = $fila1 -> id_usuario;



    $busqueda2 = consulta($miconexion, "SELECT * FROM fecha_analisist WHERE id_user_fecha_analisist like $id_usuario");

    $fila3 = $busqueda2 -> fetch_object();
    $fecha_inicial_analisist = $fila3 -> fecha_inicial;
    $fecha_final_analisist = $fila3 -> fecha_final;


    $resultadof1 = consulta($miconexion, "SELECT * FROM `fecha_control_plaga`WHERE(`id_user_fecha_control_plaga`) like $id_usuario");
    $fila3 = $resultadof1 -> fetch_object();
    $fecha_inicial_control = $fila3 -> fecha_inicial;
    $fecha_final_control = $fila3 -> fecha_final;

    $resultadof2 = consulta($miconexion, "SELECT * FROM `fecha_riego`WHERE(`id_user_fecha_riego`) like $id_usuario");
    $fila3 = $resultadof2 -> fetch_object();
    $fecha_inicial_riego = $fila3 -> fecha_inicial;
    $fecha_final_riego = $fila3 -> fecha_final;

    $resultadof4 = consulta($miconexion, "SELECT * FROM `fecha_fertilizacion`WHERE(`id_user_fecha_fertilizacion`) like $id_usuario");
    $fila3 = $resultadof4 -> fetch_object();
    $fecha_inicial_fertilizacion = $fila3 -> fecha_inicial;
    $fecha_final_fertilizacion = $fila3 -> fecha_final;

    $resultadof5 = consulta($miconexion, "SELECT * FROM `fecha_cosecha`WHERE(`id_user_fecha_cosecha`) like $id_usuario");
    $fila3 = $resultadof5 -> fetch_object();
    $fecha_inicial_cosecha = $fila3 -> fecha_inicial;
    $fecha_final_cosecha = $fila3 -> fecha_final;

    $resultadof6 = consulta($miconexion, "SELECT * FROM `fecha_poscosecha`WHERE(`id_user_fecha_poscosecha`) like $id_usuario");
    $fila3 = $resultadof6 -> fetch_object();
    $fecha_inicial_poscosecha = $fila3 -> fecha_inicial;
    $fecha_final_poscosecha = $fila3 -> fecha_final;

    $resultadof7 = consulta($miconexion, "SELECT * FROM `fecha_preparaciont`WHERE(`id_user_fecha_preparaciont`) like $id_usuario");
    $fila3 = $resultadof7 -> fetch_object();
    $fecha_inicial_preparacion = $fila3 -> fecha_inicial;
    $fecha_final_preparacion = $fila3 -> fecha_final;

    $resultadof8 = consulta($miconexion, "SELECT * FROM `fecha_siembra`WHERE(`id_user_fecha_siembra`) like $id_usuario");
    $fila3 = $resultadof8 -> fetch_object();
    $fecha_inicial_siembra = $fila3 -> fecha_inicial;
    $fecha_final_siembra = $fila3 -> fecha_final;


    // Creamos un array con los valores
    $valores = array(
      'valor1' => $nombre,
      'valor_0' => $fecha_inicial_analisist,//
      'valor_1' => $fecha_final_analisist,//
      'valor2' => $fecha_inicial_preparacion,//
      'valor3' => $fecha_final_preparacion,
      'valor4' => $fecha_inicial_riego,
      'valor5' => $fecha_final_riego,
      'valor6' => $fecha_inicial_siembra,
      'valor7' => $fecha_final_siembra,
      'valor8' => $fecha_inicial_fertilizacion,
      'valor9' => $fecha_final_fertilizacion,
      'valor10' => $fecha_inicial_control,
      'valor11' => $fecha_final_control,
      'valor12' => $fecha_inicial_cosecha,
      'valor13' => $fecha_final_cosecha,
      'valor14' => $fecha_inicial_poscosecha,
      'valor15' => $fecha_final_poscosecha,



    );

    // Devolvemos los valores como un JSON
    header('Content-Type: application/json');
      echo json_encode($valores);
    }else {
      echo '<script language="javascript">window.location.href = "../index.html"</script>';
    }          
?>