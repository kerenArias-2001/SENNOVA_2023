<?php
    
    // Obtener la informaci��n enviada por la solicitud AJAX
    include('funciones.php');
    
    $pagina = $_POST['eliminar'];//esta variable siempre va a llamar el identificador de pagina.
    
    $seleccionados = $_POST["valores"];
    
    //echo $seleccionados; 
    $miconexion=conectar_bd('', 'siadesos_planmaiz');    
    
   
    if ($pagina == "paso1") {

        $consulta = consulta($miconexion, "DELETE FROM `analisis_terreno` WHERE  id like '$seleccionados'");

    } else if ($pagina == "paso2") {

        $consulta = consulta($miconexion, "DELETE FROM `preparacion_terreno` WHERE  id_terreno like '$seleccionados'");

    } else if ($pagina == "paso3") {

        $consulta = consulta($miconexion, "DELETE FROM `sistema_riego` WHERE  id_sistema_riego like '$seleccionados'");

    } else if ($pagina == "paso4") {

        $consulta = consulta($miconexion, "DELETE FROM `proceso_siembra` WHERE  id_siembra like '$seleccionados'");

    } else if ($pagina == "paso5") {

        $consulta = consulta($miconexion, "DELETE FROM `fertilizacion` WHERE  id_fertilizacion like '$seleccionados'");

    } else if ($pagina == "paso6") {

        $consulta = consulta($miconexion, "DELETE FROM `control_plaga` WHERE  id_control_plaga like '$seleccionados'");

    } else if ($pagina == "paso7") {

        $consulta = consulta($miconexion, "DELETE FROM `cosecha` WHERE  id_cosecha like '$seleccionados'");

    } else if ($pagina == "paso8") {

        $consulta = consulta($miconexion, "DELETE FROM `pos_cosecha` WHERE  id_pos_cosecha like '$seleccionados'");

    }
    echo $pagina;
    

?>
