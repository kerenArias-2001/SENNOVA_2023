<?php
   
    include('funciones.php');
    $enviar = 0;

    session_start();
    $correo = $_POST['correo'];
    $psw = $_POST['psw'];

      $miconexion=conectar_bd('', 'siadesos_planmaiz');
    $verificacion0 = consulta($miconexion, "select * from usuario where correo_u='{$correo}' ");
    $row0 = mysqli_fetch_row($verificacion0);


    if ($verificacion0 -> num_rows > 0) {
        $verificacion3 = consulta($miconexion, "SELECT * FROM usuario  WHERE psw_u='{$_POST['psw']}'");
        $row0 = mysqli_fetch_row($verificacion3);
        if ($verificacion3 -> num_rows > 0) {
            if (isset($_SESSION['username']) == false) {


                $_SESSION['username'] = $_POST['correo'];
                $_SESSION['password'] = $_POST['psw'];

            }

            $busqueda = consulta($miconexion, "SELECT * FROM usuario WHERE correo_u='{$_POST['correo']}'");
            $fila1 = $busqueda -> fetch_object();
            $nombre = $fila1 -> nombre_u;
            $contraseña = $fila1 -> psw_u;
            $_SESSION['id_usuario'] = $fila1 -> id_usuario;
            $i = 0;
              $miconexion=conectar_bd('', 'siadesos_planmaiz');
            $query = consulta($miconexion, "SELECT * FROM usuario");
            while ($valores = mysqli_fetch_array($query)) {
                $i = $i + 1;
            } 
                echo "3";
            // echo '<script language="javascript">window.location.href="../../pages/paso1.html"</script>';     
        }
        else {
                echo "2";
            // echo '<script language="javascript">window.location.href="cerrarsesion.php"</script>';
        }

    }
    else {
        echo "1";
        // echo '<script language="javascript">window.location.href="cerrarsesion.php"</script>';
        /* echo "<script>
        Swal.fire({type: 'error',
            title: 'Error de autenticación',
            text: 'Por favor intente de nuevo',
            
        }).then(function() {
            window.location = '../cerrarsesion.php';
        });
        </script>" ;*/
    }
?>


