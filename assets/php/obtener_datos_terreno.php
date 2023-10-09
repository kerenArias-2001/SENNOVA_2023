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

    $busqueda1 = consulta($miconexion, "SELECT * FROM terreno WHERE id_user like $id_usuario");
    $fila2 = $busqueda1 -> fetch_object();
    

    $suma1 = consulta($miconexion, "SELECT 'area', SUM(CAST('area' AS integer)) AS total_area FROM terreno GROUP BY 'area'");
    $fila4 = $suma1 -> fetch_object();
    $total_area = $fila2 -> total_area;

    $area = $fila2 -> area;
    $dist_surcos = $fila2 -> surcos;
    $dist_semillas = $fila2 -> distancia;

    $dist_semillasm = (intval($dist_semillas) / 100);
    $dist_surcosm = ((intval($dist_surcos) / 100));
    $cant_plantas = round(intval($area) / ($dist_semillasm * $dist_surcosm));
    $cant_obtenida = number_format(((($cant_plantas * 100) / 1000) / 1000), 2)." T - ".number_format((((($cant_plantas * 100) / 1000) / 1000) * 0.77778), 2)." T ";
    $cant_sembrar = number_format(intval($cant_plantas * 3) / (10000), 2)." Kg";

    $cant_sembrar1 = intval($cant_plantas * 3) / (10000);
    


    // Creamos un array con los valores
    $valores = array(
      'valor1' => $nombre,
      'valor2' =>($area." m²"),
      'valor3' => ($dist_surcos." cm"),
      'valor4' => ($dist_semillas." cm"),
      'valor5' => $cant_plantas,
      'valor6' => $cant_obtenida,
      'valor7' => $cant_sembrar,
      'valor8' => $total_area

      );

    // Devolvemos los valores como un JSON
    header('Content-Type: application/json');
      echo json_encode($valores);

}else {
  echo '<script language="javascript">window.location.href = "../index.html"</script>';
}
      
?>