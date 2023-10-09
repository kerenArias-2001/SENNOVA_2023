<?php
    session_start();
    include('funciones.php');
      $miconexion=conectar_bd('', 'siadesos_planmaiz');

      if ($_SESSION['id_usuario']!=NULL) {
    $resulta = consulta($miconexion, "SELECT * FROM `sistema_riego` WHERE id_user_sistema_riego like '{$_SESSION['id_usuario']}'");

    $tablaHTML = "<table><thead>";
    $tablaHTML.= "<tr class=' bg-gradient-success text-white'><th>Nombre Producto</th><th>Cantidad</th><th>Unidad de medida</th><th>Valor Unitario</th><th>Subtotal</th><th>Eliminar</th></tr></thead>";
    $tablaHTML.= "<tbody><tr>";
    $sumar = 0;

    while ($fila = $resulta -> fetch_assoc()) {
      $condicion = $fila['tipo_inventario'];
      if ($condicion == "alquilar_riego") {
        $numero1 = $fila['precio_unidad'];
        $numero2 = $fila['cantidad'];
        $hora = $fila['tiempo_alq'];
        $producto = intval($numero1) * intval($numero2) * intval($hora);
      }
      if ($condicion == "comprar_riego") {
        $numero1 = $fila['precio_unidad'];
        $numero2 = $fila['cantidad'];
        $producto = intval($numero1) * intval($numero2);
      }

      $sumar = $sumar + $producto;
      $id = $fila['id_sistema_riego'];
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
    $tablaHTML.= "<td colspan='4'><strong><h5 class='mx-auto text-end'>Total</h5> </strong></td>";
    $tablaHTML.= " <td id='totalAmount'>$".number_format($sumar, 2, ',', '.')."</td>";
    $resultado = $sumar;
    $tablaHTML.= "</tr></tfoot>";
    $tablaHTML.= "</table>";
    $_SESSION['riego'] = $resultado;

    echo $tablaHTML;
  }else {
    echo '<script language="javascript">window.location.href = "../index.html"</script>';
  }
?>