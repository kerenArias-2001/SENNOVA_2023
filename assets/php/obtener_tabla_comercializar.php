<?php
    
  session_start();
  include('funciones.php');
    $miconexion=conectar_bd('', 'siadesos_planmaiz');
  $resulta = consulta($miconexion, "SELECT * FROM `comercializar` WHERE id_user_comercializar like '{$_SESSION['id_usuario']}'");

  $tablaHTML = "<table><thead>";
  $tablaHTML.= "<tr class=' bg-gradient-success text-white' ><th>Nombre Producto</th><th>Cantidad</th><th>Unidad de medida</th><th>Valor Unitario</th><th>Subtotal</th><th>Eliminar</th></tr></thead>";
  $tablaHTML.= "<tbody><tr>";
  $sumar = 0;

  while ($fila = $resulta -> fetch_assoc()) {
    $condicion = $fila['tipo_inventario'];
    if ($condicion == "alquilar_comercializar") {
      $numero1 = $fila['precio_unidad'];
      $numero2 = $fila['cantidad'];
      $hora = $fila['tiempo_alq'];
      $producto = floatval($numero1) * floatval($numero2) * floatval($hora);
    }
    if ($condicion == "comprar_comercializar") {
      $numero1 = $fila['precio_unidad'];
      $numero2 = $fila['cantidad'];
      $producto = floatval($numero1) * floatval($numero2);
    }

    $sumar = $sumar + $producto;
    $id = $fila['id_comercializar'];
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
  $tablaHTML.= "<td colspan='5'><strong><h4 class='mx-auto text-center'>Total:</h4> </strong></td>";
  $tablaHTML.= " <td id='totalAmount'>$".number_format($sumar, 2, ',', '.')."</td>";
  $resultado = $sumar;
  $tablaHTML.= "</tr></tfoot>";
  $tablaHTML.= "</table>";
  $_SESSION['comercializar'] = $resultado;

  echo $tablaHTML;
     // Creamos un array con los valores ...

      
?>