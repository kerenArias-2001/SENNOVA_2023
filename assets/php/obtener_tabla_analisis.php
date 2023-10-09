<?php
    
  session_start();
  include('funciones.php');
    $miconexion=conectar_bd('', 'siadesos_planmaiz');
  $resulta = consulta($miconexion, "SELECT * FROM `analisis_terreno` WHERE id_user_analisis like '{$_SESSION['id_usuario']}'");
  $resulta1 = consulta($miconexion, "SELECT * FROM `terreno` WHERE id_user like '{$_SESSION['id_usuario']}'");
  $busqueda2 = consulta($miconexion, "SELECT * FROM cambios_paginas WHERE id_cambios_paginas like 1"); //

  $fila3 = $busqueda2 -> fetch_object();
  if ($_SESSION['id_usuario']!=NULL) {
    # code...

  $cambio22= $fila3 ->cambio22;
  $cambio23= $fila3 ->cambio23;
  $cambio24= $fila3 ->cambio24;
  $cambio25= $fila3 ->cambio25;
  $cambio26= $fila3 ->cambio26;
  $cambio27= $fila3 ->cambio27;
  $cambio28= $fila3 ->cambio28;


  $fila1 = $resulta1 -> fetch_assoc();
  $cotizar = $fila1['cotizar_lab'];
  $cotizar = intval($cotizar);
  $tablaHTML = "<table><thead>";
  $tablaHTML.= "<tr><th colspan='4'>".$cambio22."</th><th colspan='2'>$".number_format($cotizar, 2, ',', '.')."</th></tr></thead>";
  $tablaHTML.= "<tr class=' bg-gradient-success text-white'><th id='cambio22'>".$cambio23."</th><th>".$cambio24."</th><th>".$cambio25."</th><th>".$cambio26."</th><th>".$cambio27."</th><th class='text-center'>".$cambio28."</th></tr></thead>";
  $tablaHTML.= "<tbody><tr>";
  $sumar = 0;


  while ($fila = $resulta -> fetch_assoc()) {
    $condicion = $fila['tipo_inventario'];
    if ($condicion == "alquilar") {
      $numero1 = $fila['precio_unidad'];
      $numero2 = $fila['cantidad'];
      $hora = $fila['tiempo_alq'];

      $producto = intval($numero1) * intval($numero2) * intval($hora);
    }
    if ($condicion == "comprar") {
      $numero1 = $fila['precio_unidad'];
      $numero2 = $fila['cantidad'];

      $producto = intval($numero1) * intval($numero2);
    }

    $sumar = $sumar + $producto;
    $id = $fila['id'];
    $tablaHTML.= "<tr>";
    $tablaHTML.= "<td>".$fila['nombre_producto']. "</td>";
    $tablaHTML.= "<td>".$fila['cantidad']. "</td>";
    $tablaHTML.= "<td>".$fila['tiempo_alq']. "</td>";
    $tablaHTML.= "<td>". "$ ".number_format($fila['precio_unidad'], 2, ',', '.')."</td>";
    $tablaHTML.= "<td>"."$ ".number_format($producto, 2, ',', '.'). "</td>";
    $tablaHTML.= "<td><center><input type='checkbox' class='checkbox'onclick='eliminar_datos()' id='checkbox' name='checkbox[]' value='$id'></center></td>";
    $tablaHTML.= "</tr>";
  }
  $tablaHTML.= "</tbody>";
  $tablaHTML.= " <tfoot><tr>";
  $resultado = $sumar + $cotizar;
  $tablaHTML.= "<td colspan='4'><strong><h5 class='mx-auto text-end'>Total</h5> </strong></td>";
  $tablaHTML.= " <td id='totalAmount'><strong>$".number_format($resultado, 2, ',', '.')."</strong></td>";


  $tablaHTML.= "</tr></tfoot>";
  $tablaHTML.= "</table>";
  $_SESSION['cotizar'] = $cotizar;
  $_SESSION['analisis_terreno'] = $resultado;

  echo $tablaHTML;
      // Creamos un array con los valores
}else {
  echo '<script language="javascript">window.location.href = "../index.html"</script>';
}
        
?>