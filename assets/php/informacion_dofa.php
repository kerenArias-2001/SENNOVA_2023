<?php
   session_start();
include('funciones.php');
$miconexion=conectar_bd('', 'siadesos_planmaiz');
 
$obtener_inf_usuario = consulta($miconexion, "SELECT * FROM usuario WHERE id_usuario like '{$_SESSION['id_usuario']}'");
   

/*         echo"***************+++++++++++++++++++++++*****************************",$_SESSION['nusuario'];*/
$fila1 = $obtener_inf_usuario -> fetch_object();

$id_usuario = $fila1 -> id_usuario;



// _______________________________________  DOFA  ___________________________________________
$validar=$_POST['validar'];
if ($validar==1) {
  $nombre_d = $_POST['nombre_d'];
  $descripcion_d = $_POST['descripcion_d'];
    //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
    $dofa_verificacion = consulta($miconexion, "ALTER TABLE dofa AUTO_INCREMENT=1");
    //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
    $dofa_resultado = consulta($miconexion, "UPDATE `dofa` SET `nombre_d`='$nombre_d',`descripcion_d`='$descripcion_d' WHERE id_user_dofa like $id_usuario");
   echo 1;
}
if ($validar==2) {
  $nombre_o = $_POST['nombre_o'];
  $descripcion_o = $_POST['descripcion_o'];
    //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
    $dofa_verificacion = consulta($miconexion, "ALTER TABLE dofa AUTO_INCREMENT=1");
    //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
    $dofa_resultado = consulta($miconexion, "UPDATE `dofa` SET `nombre_o`='$nombre_o',`descripcion_o`='$descripcion_o' WHERE id_user_dofa like $id_usuario");
    echo 1;

}
if ($validar==3) {
  $nombre_f = $_POST['nombre_f'];
  $descripcion_f = $_POST['descripcion_f'];
    //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
    $dofa_verificacion = consulta($miconexion, "ALTER TABLE dofa AUTO_INCREMENT=1");
    //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
    $dofa_resultado = consulta($miconexion, "UPDATE `dofa` SET `nombre_f`='$nombre_f',`descripcion_f`='$descripcion_f' WHERE id_user_dofa like $id_usuario");
    echo 1;

}
if ($validar==4) {
 
  $nombre_a = $_POST['nombre_a'];
  $descripcion_a = $_POST['descripcion_a'];
    //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
    $dofa_verificacion = consulta($miconexion, "ALTER TABLE dofa AUTO_INCREMENT=1");
    //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
    $dofa_resultado = consulta($miconexion, "UPDATE `dofa` SET `nombre_a`='$nombre_a',`descripcion_a`='$descripcion_a' WHERE id_user_dofa like $id_usuario");
    echo 1;

}

if ($validar==5) {
  $nombre_d = $_POST['nombre_f'];
  $descripcion_d = $_POST['descripcion_f'];
    //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
    $dofa_verificacion = consulta($miconexion, "ALTER TABLE dofa AUTO_INCREMENT=1");
    //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
    $dofa_resultado = consulta($miconexion, "UPDATE `dofa` SET `nombre__f`='$nombre_d',`descripcion__f`='$descripcion_d' WHERE id_user_dofa like $id_usuario");
   echo 1;
}
if ($validar==6) {
  $nombre_o = $_POST['nombre_o'];
  $descripcion_o = $_POST['descripcion_o'];
    //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
    $dofa_verificacion = consulta($miconexion, "ALTER TABLE dofa AUTO_INCREMENT=1");
    //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
    $dofa_resultado = consulta($miconexion, "UPDATE `dofa` SET `nombre__o`='$nombre_o',`descripcion__o`='$descripcion_o' WHERE id_user_dofa like $id_usuario");
    echo 1;  

}
if ($validar==7) {
  $nombre_f = $_POST['nombre_d'];
  $descripcion_f = $_POST['descripcion_d'];
    //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
    $dofa_verificacion = consulta($miconexion, "ALTER TABLE dofa AUTO_INCREMENT=1");
    //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
    $dofa_resultado = consulta($miconexion, "UPDATE `dofa` SET `nombre__d`='$nombre_f',`descripcion__d`='$descripcion_f' WHERE id_user_dofa like $id_usuario");
    echo 1;

}
if ($validar==8) {
  
  $nombre_a = $_POST['nombre_a'];
  $descripcion_a = $_POST['descripcion_a'];
    //hay que incrementar  desde donde elimina el usuario y asi aprovechar  todo los espacios de la tabla
    $dofa_verificacion = consulta($miconexion, "ALTER TABLE dofa AUTO_INCREMENT=1");
    //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
    $dofa_resultado = consulta($miconexion, "UPDATE `dofa` SET `nombre__a`='$nombre_a',`descripcion__a`='$descripcion_a' WHERE id_user_dofa like $id_usuario");
    echo 1;

}


  if ($dofa_resultado) {
    //      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
  }
  else {
      echo "Error al guardar los datos: ".$miconexion -> error;
  }

// _______________________________________  DOFA  ___________________________________________







?>
