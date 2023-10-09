<?php
    
  session_start();
  include('funciones.php');

  // Creamos un array con los valores
    $miconexion=conectar_bd('', 'siadesos_planmaiz');
 
    $verificacion0 = consulta($miconexion, "SELECT MAX(id) as max_id from terreno");
    $fila = $verificacion0 -> fetch_object();
    $conteo_terreno = $fila -> max_id;

  $suma1 = consulta($miconexion, "SELECT area, SUM(CAST(area AS integer)) AS total_area FROM terreno GROUP BY area");
  $fila4 = $suma1 -> fetch_object();
  $total_area = $fila4 -> total_area;
  


  // Creamos un array con los valores
  $valores = array(
    'valor00' => $total_area,
    'valor01' =>$conteo_terreno

    );

  // Devolvemos los valores como un JSON
  header('Content-Type: application/json');
    echo json_encode($valores);
        
?>