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




     $area = $fila2 -> area;
     $dist_surcos = $fila2 -> surcos;
     $dist_semillas = $fila2 -> distancia;

     $dist_semillasm = (intval($dist_semillas) / 100);
     $dist_surcosm = ((intval($dist_surcos) / 100));
     $cant_plantas = round(intval($area) / ($dist_semillasm * $dist_surcosm));
     $cant_obtenida = number_format(((($cant_plantas * 100) / 1000) / 1000))." T - ".number_format((((($cant_plantas * 100) / 1000) / 1000) * 0.77778), 2)." T ";
     $cant_sembrar = number_format(intval($cant_plantas * 3) / (10000), 2, ',', '.')." Kg";
     $cant_sembrar2 = number_format(intval($cant_plantas * 3) / (10000));

     $cant_sembrar1 = intval($cant_plantas * 3) / (10000);

     $tablaHTML = "<table><thead>";
     $tablaHTML.= "<tbody><tr>";
     $sumar = 0;
     $tablaHTML.= " <thead class='bg-gradient-success text-white'>";
     $tablaHTML.= " <tr>";
     $tablaHTML.= " <td><strong>Área del terreno</strong></td>";
     $tablaHTML.= " <td><strong>Kg para Comprar</strong></td>";
     $tablaHTML.= " <td><strong>Distancia entre semillas</strong></td>";
     $tablaHTML.= " <td><strong>Distancia entre surcos</strong></td>";
     $tablaHTML.= " <td><strong>Cantidad de plantas</strong></td>";
     $tablaHTML.= " <td><strong>Toneladas en cosecha</strong></td>";
     $tablaHTML.= " </tr>";
     $tablaHTML.= " </thead>";
     $tablaHTML.= "<tbody>";
     $tablaHTML.= " <tr>";
     $tablaHTML.= " <td><span id='area'>".number_format($area, 2, ',', '.')."</span></td>";
     $tablaHTML.= " <td><span id='cant_sembrar'>$cant_sembrar</span></td>";
     $tablaHTML.= " <td><span id='dist_semilla'>$dist_semillas</span></td>";
     $tablaHTML.= " <td><span id='dist_surcos'>$dist_surcos</span></td>";
     $tablaHTML.= " <td><span id='cant_plantas'>".number_format($cant_plantas, 2, ',', '.'). "</span></td>";
     $tablaHTML.= " <td><span id='cant_obtenida'>$cant_obtenida</span></td>";
     $tablaHTML.= " </tr>";
     $tablaHTML.= "</tbody>";


     $tablaHTML.= "</tbody>";
     $tablaHTML.= " <tfoot><tr>";



     $tablaHTML.= "</tr></tfoot>";
     $tablaHTML.= "</table>";
     $_SESSION['kg_maiz'] = $cant_sembrar2;

     echo $tablaHTML;
    }else {
      echo '<script language="javascript">window.location.href = "../index.html"</script>';
    }
?>