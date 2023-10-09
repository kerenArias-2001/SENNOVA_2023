<?php
    session_start();
    include('funciones.php');
      $miconexion=conectar_bd('', 'siadesos_planmaiz');
      if ($_SESSION['id_usuario']!=NULL) {
    $busqueda1 = consulta($miconexion, "SELECT * FROM terreno WHERE id_user like '{$_SESSION['id_usuario']}'");

    $fila2 = $busqueda1 -> fetch_object();
    $busqueda2 = consulta($miconexion, "SELECT * FROM proceso_siembra WHERE id_user_siembra like '{$_SESSION['id_usuario']}'");

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
    $precio_sembrar = "$".intval($precio_sembrar);
    $respuesta_valor_maiz = "$ ".number_format($cant_sembrar1 * $precio_sembrar1, 2);
    $respuesta_valor_maiz1 = $cant_sembrar1 * $precio_sembrar1;


    $resulta1 = consulta($miconexion, "SELECT * FROM `analisis_terreno` WHERE id_user_analisis like '{$_SESSION['id_usuario']}'");
    $resulta2 = consulta($miconexion, "SELECT * FROM `preparacion_terreno` WHERE id_user_preparacion like '{$_SESSION['id_usuario']}'");
    $resulta3 = consulta($miconexion, "SELECT * FROM `sistema_riego` WHERE id_user_sistema_riego like '{$_SESSION['id_usuario']}'");
    $resulta5 = consulta($miconexion, "SELECT * FROM `fertilizacion` WHERE id_user_fertilizacion like '{$_SESSION['id_usuario']}'");
    $resulta7 = consulta($miconexion, "SELECT * FROM `control_plaga` WHERE id_user_control_plaga like '{$_SESSION['id_usuario']}'");
    $resulta8 = consulta($miconexion, "SELECT * FROM `cosecha` WHERE id_user_cosecha like '{$_SESSION['id_usuario']}'");
    $resulta9 = consulta($miconexion, "SELECT * FROM `pos_cosecha` WHERE id_user_pos_cosecha like '{$_SESSION['id_usuario']}'");

    $verificacion0 = consulta($miconexion, " SELECT COUNT(*) as repeticiones1 from analisis_terreno WHERE id_user_analisis like '{$_SESSION['id_usuario']}'");
    $fila0 = $verificacion0 -> fetch_object();
    $repeticiones1 = $fila0 -> repeticiones1;
    $repeticiones1 = $repeticiones1 + 1;

    $verificacion0 = consulta($miconexion, " SELECT COUNT(*) as repeticiones2 from preparacion_terreno WHERE id_user_preparacion like '{$_SESSION['id_usuario']}'");
    $fila0 = $verificacion0 -> fetch_object();
    $repeticiones2 = $fila0 -> repeticiones2;
    $repeticiones2 = $repeticiones2 + 1;
    $verificacion0 = consulta($miconexion, " SELECT COUNT(*) as repeticiones3 from sistema_riego WHERE id_user_sistema_riego like '{$_SESSION['id_usuario']}'");
    $fila0 = $verificacion0 -> fetch_object();
    $repeticiones3 = $fila0 -> repeticiones3;
    $repeticiones3 = $repeticiones3 + 1;


    $verificacion0 = consulta($miconexion, " SELECT COUNT(*) as repeticiones4 from preparacion_terreno WHERE id_user_preparacion like '{$_SESSION['id_usuario']}'");
    $fila0 = $verificacion0 -> fetch_object();
    $repeticiones4 = $fila0 -> repeticiones4;
    $repeticiones4 = $repeticiones4 + 1;

    $verificacion0 = consulta($miconexion, " SELECT COUNT(*) as repeticiones5 from fertilizacion WHERE id_user_fertilizacion like '{$_SESSION['id_usuario']}'");
    $fila0 = $verificacion0 -> fetch_object();
    $repeticiones5 = $fila0 -> repeticiones5;
    $repeticiones5 = $repeticiones5 + 1;


    $verificacion0 = consulta($miconexion, " SELECT COUNT(*) as repeticiones7 from `control_plaga` WHERE id_user_control_plaga like '{$_SESSION['id_usuario']}'");
    $fila0 = $verificacion0 -> fetch_object();
    $repeticiones7 = $fila0 -> repeticiones7;
    $repeticiones7 = $repeticiones7 + 1;

    $verificacion0 = consulta($miconexion, " SELECT COUNT(*) as repeticiones8 from `cosecha` WHERE id_user_cosecha like '{$_SESSION['id_usuario']}'");
    $fila0 = $verificacion0 -> fetch_object();
    $repeticiones8 = $fila0 -> repeticiones8;
    $repeticiones8 = $repeticiones8 + 1;

    $verificacion0 = consulta($miconexion, " SELECT COUNT(*) as repeticiones9 from `pos_cosecha` WHERE id_user_pos_cosecha like '{$_SESSION['id_usuario']}'");
    $fila0 = $verificacion0 -> fetch_object();
    $repeticiones9 = $fila0 -> repeticiones9;
    $repeticiones9 = $repeticiones9 + 1;

    //-----------------------tabla de costos-----------------------------
    $tablaHTML = "<table class'mx-auto col-12 my-3'><thead>";
    $tablaHTML.= "<tr class='bg-gradient-success text-white' style='font-weight: bold;' ><td colspan='1' class='text-center'>Etapas del cultivo</td><td>Descripción</td><td>Cantidad</td><td>Unidad de medida</td><td>Valor Unitario</td><td>Subtotal</td></tr></thead>";// Encabezado de la tabla
    $tablaHTML.= "<tbody><tr>";
    $sumapaso1 = 0;
    $sumapaso2 = 0;
    $sumapaso3 = 0;
    $sumapaso4 = 0;
    $sumapaso5 = 0;
    $sumapaso6 = 0;
    $sumapaso6 = 0;
    $sumapaso7 = 0;

    $tablaHTML.= "<th style='border: none;'></th>";// Esto separa los procesos en la tabla
    // ------------Tabla Análisis-----------
    $tablaHTML.= "<tr>";
    $tablaHTML.= " <th  rowspan='$repeticiones1' class='text-center'>Realizar Análisis del suelo</th>";
    $cotizar = $_SESSION['cotizar'];
    if ($cotizar > 0) {
      $tablaHTML.= "<td> Costos de laboratorio</td>";
      $tablaHTML.= "<td></td>";
      $tablaHTML.= "<td></td>";
      $tablaHTML.= "<td>".number_format($cotizar, 2, ',', '.')."</td>";
      $tablaHTML.= "<td>".number_format($cotizar, 2, ',', '.'). "</td>";
    }

    while ($fila = $resulta1 -> fetch_assoc()) {
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

      $sumapaso1 = $sumapaso1 + $producto;
      $id = $fila['id'];
      $tablaHTML.= "<tr>";
      $tablaHTML.= "<td>".$fila['nombre_producto']. "</td>";
      $tablaHTML.= "<td>".$fila['cantidad']. "</td>";
      $tablaHTML.= "<td>".$fila['tiempo_alq']. "</td>";
      $tablaHTML.= "<td>". "$ ".number_format($fila['precio_unidad'], 2, ',', '.')."</td>";
      $tablaHTML.= "<td>"."$ ".number_format($producto, 2, ',', '.'). "</td>";
      $tablaHTML.= "</tr>";
    }
    $tablaHTML.= "</tr>";
    // ------------Fin Tabla Análisis----------- 

    $tablaHTML.= "<th style='border: none;'></th>";// Esto separa los procesos en la tabla

    // ------------Tabla Preparacion-----------
    $tablaHTML.= "<tr>";

    $tablaHTML.= " <th  rowspan=' $repeticiones2' class='text-center'>Preparar el terreno</th>";
    while ($fila = $resulta2 -> fetch_assoc()) {
      $condicion = $fila['tipo_inventario'];
      if ($condicion == "alquilar_preparacion") {
        $numero1 = $fila['precio_unidad'];
        $numero2 = $fila['cantidad'];
        $hora = $fila['tiempo_alq'];
        $producto = intval($numero1) * intval($numero2) * intval($hora);
      }
      if ($condicion == "comprar_preparacion") {
        $numero1 = $fila['precio_unidad'];
        $numero2 = $fila['cantidad'];
        $producto = intval($numero1) * intval($numero2);
      }

      $sumapaso2 = $sumapaso2 + $producto;
      $id = $fila['id_terreno'];
      $tablaHTML.= "<tr>";
      $tablaHTML.= "<td>".$fila['nombre_producto']. "</td>";
      $tablaHTML.= "<td>".$fila['cantidad']. "</td>";
      $tablaHTML.= "<td>".$fila['tiempo_alq']. "</td>";
      $tablaHTML.= "<td>". "$ ".number_format($fila['precio_unidad'], 2, ',', '.')."</td>";
      $tablaHTML.= "<td>"."$ ".number_format($producto, 2, ',', '.'). "</td>";
      $tablaHTML.= "</tr>";
    }
    $tablaHTML.= "</tr>";
    // ------------Fin Tabla preparacion-----------


    $tablaHTML.= "<th style='border: none;'></th>";// Esto separa los procesos en la tabla
    // ------------Tabla Riego-----------
    $tablaHTML.= "<tr>";
    $tablaHTML.= " <th  rowspan=' $repeticiones3' class='text-center'>Instalar Sistema de Riego</th>";
    while ($fila = $resulta3 -> fetch_assoc()) {
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

      $sumapaso3 = $sumapaso3 + $producto;
      $id = $fila['id_sistema_riego'];
      $tablaHTML.= "<tr>";
      $tablaHTML.= "<td>".$fila['nombre_producto']. "</td>";
      $tablaHTML.= "<td>".$fila['cantidad']. "</td>";
      $tablaHTML.= "<td>".$fila['tiempo_alq']. "</td>";
      $tablaHTML.= "<td>". "$ ".number_format($fila['precio_unidad'], 2, ',', '.')."</td>";
      $tablaHTML.= "<td>"."$ ".number_format($producto, 2, ',', '.'). "</td>";
      $tablaHTML.= "</tr>";
    }
    $tablaHTML.= "</tr>";

    // ------------Fin Tabla riego-----------


    $tablaHTML.= "<th style='border: none;'></th>";// Esto separa los procesos en la tabla
    // ------------Tabla Siembra-----------
    $tablaHTML.= "<tr>";

    $tablaHTML.= " <th  rowspan=' 1' class='text-center'>Realizar siembra</th>";
    if ($precio_sembrar1 > 0) {
          # code...
      $sumapaso4 = $respuesta_valor_maiz1;
      $tablaHTML.= "<td>Maíz  ".$nombre_producto. "</td>";
      $tablaHTML.= "<td>".$_SESSION['kg_maiz']. "</td>";

      $tablaHTML.= "<td> Kg </td>";

      $tablaHTML.= "<td>".$precio_sembrar."</td>";
      $tablaHTML.= "<td>".$respuesta_valor_maiz. "</td>";

    }

    $tablaHTML.= "</tr>";
    // ------------Fin Tabla riego-----------

    $tablaHTML.= "<th style='border: none;'></th>";// Esto separa los procesos en la tabla
    // ------------Tabla Fertilizacion-----------
    $tablaHTML.= "<tr>";

    $tablaHTML.= " <th  rowspan=' $repeticiones5' class='text-center'> Realizar Fertilización</th>";
    while ($fila = $resulta5 -> fetch_assoc()) {
      $condicion = $fila['tipo_inventario'];
      if ($condicion == "alquilar_fertilizacion") {
        $numero1 = $fila['precio_unidad'];
        $numero2 = $fila['cantidad'];
        $hora = $fila['tiempo_alq'];
        $producto = intval($numero1) * intval($numero2) * intval($hora);
      }
      if ($condicion == "comprar_fertilizacion") {
        $numero1 = $fila['precio_unidad'];
        $numero2 = $fila['cantidad'];
        $producto = intval($numero1) * intval($numero2);
      }

      $sumapaso5 = $sumapaso5 + $producto;
      $id = $fila['id_fertilizacion'];
      $tablaHTML.= "<tr>";
      $tablaHTML.= "<td>".$fila['nombre_producto']. "</td>";
      $tablaHTML.= "<td>".$fila['cantidad']. "</td>";
      $tablaHTML.= "<td>".$fila['tiempo_alq']. "</td>";
      $tablaHTML.= "<td>"."$ ".number_format($producto, 2, ',', '.'). "</td>";
      $tablaHTML.= "<td>". "$ ".number_format($fila['precio_unidad'], 2, ',', '.')."</td>";
      $tablaHTML.= "</tr>";
    }
    $tablaHTML.= "</tr>";

    // ------------Fin Tabla Fertilizacion-----------


    $tablaHTML.= "<th style='border: none;'></th>";// Esto separa los procesos en la tabla
    // ------------Tabla control de plagas-----------
    $tablaHTML.= "<tr>";

    $tablaHTML.= " <th  rowspan=' $repeticiones7' class='text-center'>Realizar Control de Plagas y Enfermedades</th>";
    while ($fila = $resulta7 -> fetch_assoc()) {
      $condicion = $fila['tipo_inventario'];
      if ($condicion == "alquilar_control") {
        $numero1 = $fila['precio_unidad'];
        $numero2 = $fila['cantidad'];
        $hora = $fila['tiempo_alq'];
        $producto = intval($numero1) * intval($numero2) * intval($hora);
      }
      if ($condicion == "comprar_control") {
        $numero1 = $fila['precio_unidad'];
        $numero2 = $fila['cantidad'];
        $producto = intval($numero1) * intval($numero2);
      }

      $sumapaso6 = $sumapaso6 + $producto;
      $id = $fila['id_control_plaga'];
      $tablaHTML.= "<tr>";
      $tablaHTML.= "<td>".$fila['nombre_producto']. "</td>";
      $tablaHTML.= "<td>".$fila['cantidad']. "</td>";
      $tablaHTML.= "<td>".$fila['tiempo_alq']. "</td>";
      $tablaHTML.= "<td>". "$ ".number_format($fila['precio_unidad'], 2, ',', '.')."</td>";
      $tablaHTML.= "<td>"."$ ".number_format($producto, 2, ',', '.'). "</td>";

      $tablaHTML.= "</tr>";
    }
    $tablaHTML.= "</tr>";

    // ------------Fin Tabla control de plagas-----------

    $tablaHTML.= "<th style='border: none;'></th>";// Esto separa los procesos en la tabla
    // ------------Tabla cosecha-----------
    $tablaHTML.= "<tr>";

    $tablaHTML.= " <th  rowspan=' $repeticiones8' class='text-center'>Preparar Cosecha</th>";
    while ($fila = $resulta8 -> fetch_assoc()) {
      $condicion = $fila['tipo_inventario'];
      if ($condicion == "alquilar_cosecha") {
        $numero1 = $fila['precio_unidad'];
        $numero2 = $fila['cantidad'];
        $hora = $fila['tiempo_alq'];
        $producto = intval($numero1) * intval($numero2) * intval($hora);
      }
      if ($condicion == "comprar_cosecha") {
        $numero1 = $fila['precio_unidad'];
        $numero2 = $fila['cantidad'];
        $producto = intval($numero1) * intval($numero2);
      }

      $sumapaso6 = $sumapaso6 + $producto;
      $id = $fila['id_cosecha'];
      $tablaHTML.= "<tr>";
      $tablaHTML.= "<td>".$fila['nombre_producto']. "</td>";
      $tablaHTML.= "<td>".$fila['cantidad']. "</td>";
      $tablaHTML.= "<td>".$fila['tiempo_alq']. "</td>";
      $tablaHTML.= "<td>". "$ ".number_format($fila['precio_unidad'], 2, ',', '.')."</td>";
      $tablaHTML.= "<td>"."$ ".number_format($producto, 2, ',', '.'). "</td>";

      $tablaHTML.= "</tr>";
    }
    $tablaHTML.= "</tr>";

    // ------------Fin Tabla cosecha-----------

    $tablaHTML.= "<th style='border: none;'></th>";// Esto separa los procesos en la tabla
    // ------------ Tabla Pos cosecha-----------
    $tablaHTML.= "<tr>";

    $tablaHTML.= " <th  rowspan=' $repeticiones9' class='text-center'>Preparar Pos-Cosecha</th>";
    while ($fila = $resulta9 -> fetch_assoc()) {
      $condicion = $fila['tipo_inventario'];
      if ($condicion == "alquilar_pos_cosecha") {
        $numero1 = $fila['precio_unidad'];
        $numero2 = $fila['cantidad'];
        $hora = $fila['tiempo_alq'];
        $producto = intval($numero1) * intval($numero2) * intval($hora);
      }
      if ($condicion == "comprar_pos_cosecha") {
        $numero1 = $fila['precio_unidad'];
        $numero2 = $fila['cantidad'];
        $producto = intval($numero1) * intval($numero2);
      }

      $sumapaso7 = $sumapaso7 + $producto;
      $id = $fila['id_pos_cosecha'];
      $tablaHTML.= "<tr>";
      $tablaHTML.= "<td>".$fila['nombre_producto']. "</td>";
      $tablaHTML.= "<td>".$fila['cantidad']. "</td>";
      $tablaHTML.= "<td>".$fila['tiempo_alq']. "</td>";
      $tablaHTML.= "<td>". "$ ".number_format($fila['precio_unidad'], 2, ',', '.')."</td>";
      $tablaHTML.= "<td>"."$ ".number_format($producto, 2, ',', '.'). "</td>";

      $tablaHTML.= "</tr>";

      // ------------Fin Tabla Pos cosecha-----------

    }

    $resultado = $sumapaso1 + $sumapaso2 + $sumapaso3 + $sumapaso4 + $sumapaso5 + $sumapaso6 + $sumapaso6 + $sumapaso7 + $_SESSION['cotizar'];
    $tablaHTML.= "</tr>";
    $tablaHTML.= "<th style='border: none;'></th>";// Esto separa los procesos en la tabla

    $tablaHTML.= "</tbody>";
    $tablaHTML.= " <tfoot><tr>";
    $tablaHTML.= " <th  colspan=' 5'>Total</th>";
    $tablaHTML.= " <td id='totalAmount'><strong>$ $resultado</strong></td>";

    $tablaHTML.= "</tr></tfoot>";
    $tablaHTML.= "</table>";

    echo $tablaHTML;
  }else {
    echo '<script language="javascript">window.location.href = "../index.html"</script>';
  }
      
?>



