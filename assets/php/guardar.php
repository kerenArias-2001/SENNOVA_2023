

<?php
   
session_start();
include('funciones.php');

  $miconexion=conectar_bd('', 'siadesos_planmaiz');
$nombre_u = $_POST['nombre_u'];

$verificarusuario = consulta($miconexion, "SELECT * FROM usuario WHERE nombre_u like '%$nombre_u%'");

/*         echo"***************+++++++++++++++++++++++*****************************",$_SESSION['nusuario'];*/
$fila1 = $verificarusuario -> fetch_object();

$id_usuario = $fila1 -> id_usuario;
 echo $id_usuario;
// Obtener el dato enviado desde JavaScript
$hectarea = $_POST['hectareas'];



$pagina = $_POST['pagina'];

/* Guarda al seleccionar el Botón comprar 909 =hectareas*/


$tipo = $_POST['tipo_transaccion'];

/* Guarda al seleccionar el Botón comprar */
if ($tipo === "comprar") {

  $nombre_a = $_POST['nombre_c'];
  $cantidad_a = $_POST['cantidad_c'];
  $precio_a = $_POST['precio_c'];
  $tiempo_a = $_POST['tiempo'];


  //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
  $verificacion = consulta($miconexion, "ALTER TABLE analisis_terreno AUTO_INCREMENT=1");
  //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
  $resultado = consulta($miconexion, "INSERT INTO `analisis_terreno`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user_analisis`)
      values('$nombre_a', '$tipo', '$cantidad_a', '$precio_a', '$tiempo_a', '$id_usuario')");
      if ($resultado) {
    //echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
  }
  else {
          echo "Error al guardar los datos: ".$miconexion -> error;
  }

}

/*Guarda al seleccionar el Botón Alquilar */
elseif($tipo === "alquilar"){
  $nombre_a = $_POST['nombre'];
  $cantidad_a = $_POST['cantidad'];
  $precio_a = $_POST['precio'];
  $tiempo_a = $_POST['tiempo'];


  //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
  $verificacion = consulta($miconexion, "ALTER TABLE analisis_terreno AUTO_INCREMENT=1");
  //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
  $resultado = consulta($miconexion, "INSERT INTO `analisis_terreno`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user_analisis`)
    values('$nombre_a', '$tipo', '$cantidad_a', '$precio_a', '$tiempo_a', '$id_usuario')");
 
      if ($resultado) {
    //echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
  }
  else {
            echo "Error al guardar los datos: ".$miconexion -> error;
  }
}


// 2 Funciones para guardar los datos en bd de la $pagina paso2.html 

/*Guarda al seleccionar el Botón Alquilar */
elseif($tipo === "alquilar_preparacion"){
  $nombre_a = $_POST['nombre'];
  $cantidad_a = $_POST['cantidad'];
  $precio_a = $_POST['precio'];
  $tiempo_a = $_POST['tiempo'];


  //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
  $verificacion = consulta($miconexion, "ALTER TABLE preparacion_terreno AUTO_INCREMENT=1");
  //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
  $resultado = consulta($miconexion, "INSERT INTO `preparacion_terreno`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user_preparacion`)
    values('$nombre_a', '$tipo', '$cantidad_a', '$precio_a', '$tiempo_a', '$id_usuario')");

      if ($resultado) {
    //  echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
  }
  else {
            echo "Error al guardar los datos: ".$miconexion -> error;
  }
}

/* Guarda al seleccionar el Botón comprar */
if ($tipo === "comprar_preparacion") {

  $nombre_a = $_POST['nombre_c'];
  $cantidad_a = $_POST['cantidad_c'];
  $precio_a = $_POST['precio_c'];
  $tiempo_a = $_POST['tiempo'];


  //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
  $verificacion = consulta($miconexion, "ALTER TABLE preparacion_terreno AUTO_INCREMENT=1");
  //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
  $resultado = consulta($miconexion, "INSERT INTO `preparacion_terreno`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user_preparacion`)
    values('$nombre_a', '$tipo', '$cantidad_a', '$precio_a', '$tiempo_a', '$id_usuario')");

    if ($resultado) {
    // echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
  }
  else {
        echo "Error al guardar los datos: ".$miconexion -> error;
  }

}
elseif($tipo === "siembra"){

  $precio_a = $_POST['precio'];
  $nombre = $_POST['nombre'];
  $distancia_semillas = $_POST['distancia_semillas'];
  $surcos = $_POST['distancia_surcos'];
  $vender = $_POST['precio_vender'];
  $resultado = consulta($miconexion, "UPDATE `terreno` SET `surcos`='$surcos',`distancia`='$distancia_semillas', `precio_vender`='$vender' WHERE `id_user`LIKE  '$id_usuario'");

  //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
  $verificacion = consulta($miconexion, "ALTER TABLE proceso_siembra AUTO_INCREMENT=1");
  //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
  $busqueda1 = consulta($miconexion, "SELECT * FROM terreno WHERE id_user like '$id_usuario'");
  $fila2 = $busqueda1 -> fetch_object();
  $area = $fila2 -> area;
  $dist_surcos = $fila2 -> surcos;
  $dist_semillas = $fila2 -> distancia;

  $dist_semillasm = intval($dist_semillas) / 100;
  $dist_surcosm = intval($dist_surcos) / 100;
  $cant_plantas = round(intval($area) / ($dist_semillasm * $dist_surcosm));
  $cant_obtenida = (($cant_plantas * 100) / 1000);
  $cant_sembrar = number_format(intval($cant_plantas * 3) / (10000), 2)." Kg";

  $cant_sembrar1 = intval($cant_plantas * 3) / (10000);

  $precio_sembrar1 = intval($precio_a);

  $respuesta_valor_maiz1 = number_format($cant_sembrar1 * $precio_sembrar1, 2);


  $resultado = consulta($miconexion, "UPDATE `proceso_siembra` SET `nombre_producto`='$nombre',`precio_semilla`='$precio_a',`valor_semilla`='$respuesta_valor_maiz1',`valor_tonelada`='$cant_obtenida'WHERE `id_user_siembra`LIKE '$id_usuario'");



  if ($resultado) {
    //      echo '<script  language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
  }
  else {
            echo "Error al guardar los datos: ".$miconexion -> error;
  }
      echo $id_usuario;
}

/* Guarda al seleccionar el Botón comprar */
if ($tipo === "fertilizacion") {

  $nombre_a = $_POST['nombre'];
  $cantidad_a = $_POST['cantidad'];
  $precio_a = $_POST['precio'];
  $tiempo_a = $_POST['tiempo'];


  //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
  $verificacion = consulta($miconexion, "ALTER TABLE fertilizacion AUTO_INCREMENT=1");
  //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
  $resultado = consulta($miconexion, "INSERT INTO `fertilizacion`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user_fertilizacion`)
    values('$nombre_a', '$tipo', '$cantidad_a', '$precio_a', '$tiempo_a', '$id_usuario')");

    if ($resultado) {
    // echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
  }
  else {
        echo "Error al guardar los datos: ".$miconexion -> error;
  }   
    echo $id_usuario;
}

//-------------------------------------------------------------------------------------------------------------------------

//  Funciones para guardar los datos en bd de la $pagina paso4.html 

/*Guarda al seleccionar el Botón Alquilar */
elseif($tipo === "alquilar_fertilizacion"){
  $nombre_a = $_POST['nombre'];
  $cantidad_a = $_POST['cantidad'];
  $precio_a = $_POST['precio'];
  $tiempo_a = $_POST['tiempo'];


  //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
  $verificacion = consulta($miconexion, "ALTER TABLE fertilizacion AUTO_INCREMENT=1");
  //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
  $resultado = consulta($miconexion, "INSERT INTO `fertilizacion`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user_fertilizacion`)
    values('$nombre_a', '$tipo', '$cantidad_a', '$precio_a', '$tiempo_a', '$id_usuario')");

      if ($resultado) {
    // echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
  }
  else {
            echo "Error al guardar los datos: ".$miconexion -> error;
  }
}

/* Guarda al seleccionar el Botón comprar */
if ($tipo === "comprar_fertilizacion") {

  $nombre_a = $_POST['nombre_c'];
  $cantidad_a = $_POST['cantidad_c'];
  $precio_a = $_POST['precio_c'];
  $tiempo_a = $_POST['tiempo'];


  //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
  $verificacion = consulta($miconexion, "ALTER TABLE fertilizacion AUTO_INCREMENT=1");
  //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
  $resultado = consulta($miconexion, "INSERT INTO `fertilizacion`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user_fertilizacion`)
    values('$nombre_a', '$tipo', '$cantidad_a', '$precio_a', '$tiempo_a', '$id_usuario')");

    if ($resultado) {
    // echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
  }
  else {
        echo "Error al guardar los datos: ".$miconexion -> error;
  }

}



//  Funciones para guardar los datos en bd de la $pagina paso5.html 

/*Guarda al seleccionar el Botón Alquilar */
elseif($tipo === "alquilar_cosecha"){
  $nombre_a = $_POST['nombre'];
  $cantidad_a = $_POST['cantidad'];
  $precio_a = $_POST['precio'];
  $tiempo_a = $_POST['tiempo'];


  //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
  $verificacion = consulta($miconexion, "ALTER TABLE cosecha AUTO_INCREMENT=1");
  //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
  $resultado = consulta($miconexion, "INSERT INTO `cosecha`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user_cosecha`)
    values('$nombre_a', '$tipo', '$cantidad_a', '$precio_a', '$tiempo_a', '$id_usuario')");

      if ($resultado) {
    //      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
  }
  else {
            echo "Error al guardar los datos: ".$miconexion -> error;
  }
}

/* Guarda al seleccionar el Botón comprar */
if ($tipo === "comprar_cosecha") {
  $nombre_a = $_POST['nombre_c'];
  $cantidad_a = $_POST['cantidad_c'];
  $precio_a = $_POST['precio_c'];
  $tiempo_a = $_POST['tiempo'];

  $verificacion = consulta($miconexion, "ALTER TABLE cosecha AUTO_INCREMENT=1");
  //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
  $resultado = consulta($miconexion, "INSERT INTO `cosecha`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user_cosecha`)
    values('$nombre_a', '$tipo', '$cantidad_a', '$precio_a', '$tiempo_a', '$id_usuario')");

    if ($resultado) {
    //      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
  }
  else {
        echo "Error al guardar los datos: ".$miconexion -> error;
  }

}




//  Funciones para guardar los datos en bd de la $pagina paso6.html 

/*Guarda al seleccionar el Botón Alquilar */
elseif($tipo === "alquilar_pos_cosecha"){
  $nombre_a = $_POST['nombre'];
  $cantidad_a = $_POST['cantidad'];
  $precio_a = $_POST['precio'];
  $tiempo_a = $_POST['tiempo'];


  //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
  $verificacion = consulta($miconexion, "ALTER TABLE pos_cosecha AUTO_INCREMENT=1");
  //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
  $resultado = consulta($miconexion, "INSERT INTO `pos_cosecha`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user_pos_cosecha`)
    values('$nombre_a', '$tipo', '$cantidad_a', '$precio_a', '$tiempo_a', '$id_usuario')");

      if ($resultado) {
    //      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
  }
  else {
            echo "Error al guardar los datos: ".$miconexion -> error;
  }
}

/* Guarda al seleccionar el Botón comprar */
if ($tipo === "comprar_pos_cosecha") {

  $nombre_a = $_POST['nombre_c'];
  $cantidad_a = $_POST['cantidad_c'];
  $precio_a = $_POST['precio_c'];
  $tiempo_a = $_POST['tiempo'];


  //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
  $verificacion = consulta($miconexion, "ALTER TABLE pos_cosecha AUTO_INCREMENT=1");
  //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
  $resultado = consulta($miconexion, "INSERT INTO `pos_cosecha`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user_pos_cosecha`)
    values('$nombre_a', '$tipo', '$cantidad_a', '$precio_a', '$tiempo_a', '$id_usuario')");

    if ($resultado) {
    //      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
  }
  else {
        echo "Error al guardar los datos: ".$miconexion -> error;
  }

}



//  Funciones para guardar los datos en bd de la $pagina paso6.html 

/*Guarda al seleccionar el Botón Alquilar */
elseif($tipo === "alquilar_comercializar"){
  $nombre_a = $_POST['nombre'];
  $cantidad_a = $_POST['cantidad'];
  $precio_a = $_POST['precio'];
  $tiempo_a = $_POST['tiempo'];


  //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
  $verificacion = consulta($miconexion, "ALTER TABLE comercializar AUTO_INCREMENT=1");
  //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
  $resultado = consulta($miconexion, "INSERT INTO `comercializar`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user_comercializar`)
  values('$nombre_a', '$tipo', '$cantidad_a', '$precio_a', '$tiempo_a', '$id_usuario')");

    if ($resultado) {
    //      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
  }
  else {
          echo "Error al guardar los datos: ".$miconexion -> error;
  }
}

/* Guarda al seleccionar el Botón comprar */
if ($tipo === "comprar_comercializar") {

  $nombre_a = $_POST['nombre_c'];
  $cantidad_a = $_POST['cantidad_c'];
  $precio_a = $_POST['precio_c'];
  $tiempo_a = $_POST['tiempo'];


  //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
  $verificacion = consulta($miconexion, "ALTER TABLE comercializar AUTO_INCREMENT=1");
  //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
  $resultado = consulta($miconexion, "INSERT INTO `comercializar`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user_comercializar`)
  values('$nombre_a', '$tipo', '$cantidad_a', '$precio_a', '$tiempo_a', '$id_usuario')");

  if ($resultado) {
    //      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
  }
  else {
      echo "Error al guardar los datos: ".$miconexion -> error;
  }

}


//  Funciones para guardar los datos en bd de la $pagina paso6.html 

/*Guarda al seleccionar el Botón Alquilar */
elseif($tipo === "alquilar_riego"){
  $nombre_a = $_POST['nombre'];
  $cantidad_a = $_POST['cantidad'];
  $precio_a = $_POST['precio'];
  $tiempo_a = $_POST['tiempo'];


  //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
  $verificacion = consulta($miconexion, "ALTER TABLE sistema_riego AUTO_INCREMENT=1");
  //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
  $resultado = consulta($miconexion, "INSERT INTO `sistema_riego`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user_sistema_riego`)
  values('$nombre_a', '$tipo', '$cantidad_a', '$precio_a', '$tiempo_a', '$id_usuario')");

    if ($resultado) {
    //      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
  }
  else {
          echo "Error al guardar los datos: ".$miconexion -> error;
  }
}

/* Guarda al seleccionar el Botón comprar */
if ($tipo === "comprar_riego") {

  $nombre_a = $_POST['nombre_c'];
  $cantidad_a = $_POST['cantidad_c'];
  $precio_a = $_POST['precio_c'];
  $tiempo_a = $_POST['tiempo'];


  //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
  $verificacion = consulta($miconexion, "ALTER TABLE sistema_riego AUTO_INCREMENT=1");
  //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
  $resultado = consulta($miconexion, "INSERT INTO `sistema_riego`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user_sistema_riego`)
  values('$nombre_a', '$tipo', '$cantidad_a', '$precio_a', '$tiempo_a', '$id_usuario')");

  if ($resultado) {
    //      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
  }
  else {
      echo "Error al guardar los datos: ".$miconexion -> error;
  }

}



//  Funciones para guardar los datos en bd de la $pagina paso6.html 

/*Guarda al seleccionar el Botón Alquilar */
elseif($tipo === "alquilar_control"){
  $nombre_a = $_POST['nombre'];
  $cantidad_a = $_POST['cantidad'];
  $precio_a = $_POST['precio'];
  $tiempo_a = $_POST['tiempo'];


  //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
  $verificacion = consulta($miconexion, "ALTER TABLE control_plaga AUTO_INCREMENT=1");
  //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
  $resultado = consulta($miconexion, "INSERT INTO `control_plaga`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user_control_plaga`)
  values('$nombre_a', '$tipo', '$cantidad_a', '$precio_a', '$tiempo_a', '$id_usuario')");

    if ($resultado) {
    //      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
  }
  else {
          echo "Error al guardar los datos: ".$miconexion -> error;
  }
}

/* Guarda al seleccionar el Botón comprar */
if ($tipo === "comprar_control") {

  $nombre_a = $_POST['nombre_c'];
  $cantidad_a = $_POST['cantidad_c'];
  $precio_a = $_POST['precio_c'];
  $tiempo_a = $_POST['tiempo'];


  //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
  $verificacion = consulta($miconexion, "ALTER TABLE control_plaga AUTO_INCREMENT=1");
  //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
  $resultado = consulta($miconexion, "INSERT INTO `control_plaga`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user_control_plaga`)
  values('$nombre_a', '$tipo', '$cantidad_a', '$precio_a', '$tiempo_a', '$id_usuario')");

  if ($resultado) {
    //      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
  }
  else {
      echo "Error al guardar los datos: ".$miconexion -> error;
  }
}

if ($pagina == "paso1") { //se dejo  hectarea para no dañar el codigo
  $cotizar = $_POST['cotizar'];
  $hectarea = $_POST['hectareas'];
  $resultado = consulta($miconexion, "UPDATE `terreno` SET `area`='$hectarea',`cotizar_lab`='$cotizar' WHERE `id_user`LIKE '$id_usuario'");


  $fecha_inicial = $_POST['fecha_incio'];
  $fecha_final = $_POST['fecha_final'];
  $resultado = consulta($miconexion, "UPDATE `fecha_analisist` SET `fecha_inicial`='$fecha_inicial',`fecha_final`='$fecha_final' WHERE `id_user_fecha_analisist`LIKE '$id_usuario'");
  echo $id_usuario;
  echo"paso1";
}
if ($pagina == "paso2") {
  $fecha_inicial = $_POST['fecha_incio'];
  $fecha_final = $_POST['fecha_final'];
  $resultado = consulta($miconexion, "UPDATE `fecha_preparaciont` SET `fecha_inicial`='$fecha_inicial',`fecha_final`='$fecha_final' WHERE `id_user_fecha_preparaciont`LIKE $id_usuario");
  echo $id_usuario;

} else if ($pagina == "paso3") {
  $fecha_inicial = $_POST['fecha_incio'];
  $fecha_final = $_POST['fecha_final'];
  $resultado = consulta($miconexion, "UPDATE `fecha_riego` SET `fecha_inicial`='$fecha_inicial',`fecha_final`='$fecha_final' WHERE `id_user_fecha_riego`LIKE $id_usuario");
  echo $id_usuario;
} else if ($pagina == "paso4") {

  $fecha_inicial = $_POST['fecha_incio'];
  $fecha_final = $_POST['fecha_final'];
  $resultado = consulta($miconexion, "UPDATE `fecha_siembra` SET `fecha_inicial`='$fecha_inicial',`fecha_final`='$fecha_final' WHERE `id_user_fecha_siembra`LIKE $id_usuario");
  echo $id_usuario;

} else if ($pagina == "paso5") {
  $fecha_inicial = $_POST['fecha_incio'];
  $fecha_final = $_POST['fecha_final'];
  $resultado = consulta($miconexion, "UPDATE `fecha_fertilizacion` SET `fecha_inicial`='$fecha_inicial',`fecha_final`='$fecha_final' WHERE `id_user_fecha_fertilizacion`LIKE $id_usuario");
   echo $id_usuario;
} else if ($pagina == "paso6") {
  $fecha_inicial = $_POST['fecha_incio'];
  $fecha_final = $_POST['fecha_final'];
  $resultado = consulta($miconexion, "UPDATE `fecha_control_plaga` SET `fecha_inicial`='$fecha_inicial',`fecha_final`='$fecha_final' WHERE `id_user_fecha_control_plaga`LIKE $id_usuario");
   echo $id_usuario;
} else if ($pagina == "paso7") {
  $fecha_inicial = $_POST['fecha_incio'];
  $fecha_final = $_POST['fecha_final'];
  $resultado = consulta($miconexion, "UPDATE `fecha_cosecha` SET `fecha_inicial`='$fecha_inicial',`fecha_final`='$fecha_final' WHERE `id_user_fecha_cosecha`LIKE $id_usuario");
 
   echo $id_usuario;
} else if ($pagina == "paso8") {
  $fecha_inicial = $_POST['fecha_incio'];
  $fecha_final = $_POST['fecha_final'];
  $resultado = consulta($miconexion, "UPDATE `fecha_poscosecha` SET `fecha_inicial`='$fecha_inicial',`fecha_final`='$fecha_final' WHERE `id_user_fecha_poscosecha`LIKE $id_usuario");
  echo $id_usuario;

} 
?>







