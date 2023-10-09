<?php
      
      session_start();
  include('funciones.php');
  // Creamos un array con los valores
    $miconexion=conectar_bd('', 'siadesos_planmaiz');
  if ($_SESSION['id_usuario']!=NULL) {
  $busqueda = consulta($miconexion, "SELECT * FROM proceso_siembra WHERE id_user_siembra like '{$_SESSION['id_usuario']}'");
  $busqueda2 = consulta($miconexion, "SELECT * FROM terreno WHERE id_user like '{$_SESSION['id_usuario']}'");

  /*         echo"***************+++++++++++++++++++++++*****************************",$_SESSION['nusuario'];*/
  $fila1 = $busqueda -> fetch_object();
  $fila2 = $busqueda2 -> fetch_object();

  $tonelada = $fila1 -> valor_tonelada;
  $precio_maiz = $fila1 -> precio_semilla;
  $vender = $fila2 -> precio_vender;

  $analisis_terreno = $_SESSION['analisis_terreno'];
  $preparacion = $_SESSION['preparacion'];
  $siembra = $_SESSION['siembra'];
  $fertilizacion = $_SESSION['fertilizacion'];
  $cosecha = $_SESSION['cosecha'];
  $pos_cosecha = $_SESSION['pos_cosecha'];
  $riego = $_SESSION['riego'];
  $control = $_SESSION['control'];


  //resultado de TODOS los procesod
  $total_proceso = $analisis_terreno + $preparacion + $siembra + $fertilizacion + $cosecha + $pos_cosecha + $riego + $control;
  $ganancias = intval($tonelada) * intval($vender);
  $ganancia_esperada = $ganancias - $total_proceso;
  if ($total_proceso > 0) {
    $porcentaje_analisis_terreno = number_format(($analisis_terreno / $total_proceso) * 100, 2);
    $porcentaje_preparacion = number_format(($preparacion / $total_proceso) * 100, 2);
    $porcentaje_siembra = number_format(($siembra / $total_proceso) * 100, 2);
    $porcentaje_fertilizacion = number_format(($fertilizacion / $total_proceso) * 100, 2);
    $porcentaje_cosecha = number_format(($cosecha / $total_proceso) * 100, 2);
    $porcentaje_pos_cosecha = number_format(($pos_cosecha / $total_proceso) * 100, 2);
    $porcentaje_riego = number_format(($riego / $total_proceso) * 100, 2);
    $porcentaje_control = number_format(($control / $total_proceso) * 100, 2);
  } else {
    $porcentaje_analisis_terreno = 0;
    $porcentaje_preparacion = 0;
    $porcentaje_siembra = 0;
    $porcentaje_fertilizacion = 0;
    $porcentaje_cosecha = 0;
    $porcentaje_pos_cosecha = 0;
    $porcentaje_comencializar = 0;
    $porcentaje_riego = 0;
    $porcentaje_control = 0;


  }

  $valores_resultado = array(
    'valor_analisis' => number_format($analisis_terreno, 2, ',', '.'),
    'valor_preparacion' => number_format($preparacion, 2, ',', '.'),
    'valor_siembra' => number_format($siembra, 2, ',', '.'),
    'valor_fertilizacion' => number_format($fertilizacion, 2, ',', '.'),
    'valor_cosecha' => number_format($cosecha, 2, ',', '.'),
    'valor_pos_cosecha' => number_format($pos_cosecha, 2, ',', '.'),
    'valor_riego' => number_format($riego, 2, ',', '.'),
    'valor_control' => number_format($control, 2, ',', '.'),
    'valor_total_proceso' => $total_proceso,

    'v_analisis' => $porcentaje_analisis_terreno,
    'v_preparacion' => $porcentaje_preparacion,
    'v_siembra' => $porcentaje_siembra,
    'v_fertilizacion' => $porcentaje_fertilizacion,
    'v_cosecha' => $porcentaje_cosecha,
    'v_pos_cosecha' => $porcentaje_pos_cosecha,
    'v_riego' => $porcentaje_riego,
    'v_control' => $porcentaje_control,


    'ganancias' => $ganancias,
    'ganancias_esperada' => $ganancia_esperada

  );

  // Devolvemos los valores como un JSON
  header('Content-Type: application/json');
  echo json_encode($valores_resultado);
}else {
  echo '<script language="javascript">window.location.href = "../index.html"</script>';
}
?>