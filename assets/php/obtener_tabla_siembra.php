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
     $precio_vender = $fila2 -> precio_vender;

     $busqueda2 = consulta($miconexion, "SELECT * FROM proceso_siembra WHERE id_user_siembra like $id_usuario");

     $fila3 = $busqueda2 -> fetch_object();
     $precio_sembrar = $fila3 -> precio_semilla;
     $nombre_producto = $fila3 -> nombre_producto;

     $area = $fila2 -> area;
     $dist_surcos = $fila2 -> surcos;
     $dist_semillas = $fila2 -> distancia;
     $dist_semillasm = intval($dist_semillas) / 100;
     $dist_surcosm = intval($dist_surcos) / 100;
     $cant_plantas = round(intval($area) / ($dist_semillasm * $dist_surcosm));
     $cant_obtenida = (($cant_plantas * 100) / 1000);
     $cant_sembrar = number_format(intval($cant_plantas * 3) / (10000), 2)." Kg";

     $cant_sembrar1 = intval($cant_plantas * 3) / (10000);
     $area = $area = intval($area);
     $area = $area." m²";
     $dist_semillas = $dist_semillas." cm";
     $dist_surcos = $dist_surcos." cm";
     $cant_obtenida = number_format($cant_obtenida / 1000, 2)." T - ".number_format(($cant_obtenida / 1000) * .75, 2)." T";

     $precio_sembrar1 = intval($precio_sembrar);
     $precio_sembrar = intval($precio_sembrar);
     $respuesta_valor_maiz = "$ ".number_format($cant_sembrar1 * $precio_sembrar1, 2);
     $respuesta_valor_maiz1 = $cant_sembrar1 * $precio_sembrar1;
     $_SESSION['valormaiz'] = $precio_sembrar;

     $tablaHTML = "<table><thead>";
     $tablaHTML.= "<tr class=' bg-gradient-success text-white'><th>Tipo de maíz</th><th>Valor actual</th><th>Valor a vender</th><th>Total</th></tr></thead>";
     $tablaHTML.= "<tbody><tr>";
     $tablaHTML.= "<td>".$nombre_producto. "</td>";
     $tablaHTML.= "<td>". "$".number_format($precio_sembrar, 2, ',', '.'). "</td>";
     $tablaHTML.= "<td>". "$".number_format($precio_vender, 2, ',', '.'). "</td>";
     $tablaHTML.= "<td>".$respuesta_valor_maiz. "</td>";


     $tablaHTML.= "</tbody></tr>";
     $tablaHTML.= "</table>";
     $_SESSION['siembra'] = $respuesta_valor_maiz1;
     echo $tablaHTML;
    }else {
      echo '<script language="javascript">window.location.href = "../index.html"</script>';
    }
?>





