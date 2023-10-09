
<?php
header('Content-Type: text/plain; charset=utf-8');
   
session_start();
include('../php/funciones.php');

  $miconexion=conectar_bd('', 'siadesos_planmaiz');
  
    $Selection_pagina=$_POST['Selection_pagina'];
   
    //echo $Selection_pagina;
  
  if (($Selection_pagina=="paso1")) {
    $_SESSION['Selection_pagina']="paso1";
     $id=1;
  }elseif (($Selection_pagina=="paso2")) {
    $_SESSION['Selection_pagina']="paso2";
    $id=2;
  }elseif (($Selection_pagina=="paso3")) {
    $_SESSION['Selection_pagina']="paso3";
    $id=3;
  }elseif (($Selection_pagina=="paso4")) {
    $_SESSION['Selection_pagina']="paso4";
    $id=4;
  }elseif (($Selection_pagina=="paso5")) {
    $_SESSION['Selection_pagina']="paso5";
    $id=5;
  }elseif (($Selection_pagina=="paso6")) {
    $_SESSION['Selection_pagina']="paso6";
    $id=6;
  }elseif (($Selection_pagina=="paso7")) {
    $_SESSION['Selection_pagina']="paso7";
    $id=7;
  }elseif (($Selection_pagina=="paso8")) {
    $_SESSION['Selection_pagina']="paso8";
    $id=8;
  }


    
  $busqueda2 = consulta($miconexion,"SELECT * FROM `cambios_paginas` WHERE id_cambios_paginas like $id"); //
  $fila3=$busqueda2->fetch_object();
  $cambio0=$fila3->cambio0;
  $cambio1=$fila3->cambio1;
  $cambio2=$fila3->cambio2;
  $cambio3=$fila3->cambio3;
  $cambio4=$fila3->cambio4;
  $cambio5=$fila3->cambio5;
  $cambio6=$fila3->cambio6;
  $cambio7=$fila3->cambio7;
  $cambio8=$fila3->cambio8;
  $cambio9=$fila3->cambio9;
  $cambio10=$fila3->cambio10;
  $cambio11=$fila3->cambio11;
  $cambio12=$fila3->cambio12;
  $cambio13=$fila3->cambio13;
  $cambio14=$fila3->cambio14;
  $cambio15=$fila3->cambio15;
  $cambio16=$fila3->cambio16;
  $cambio17=$fila3->cambio17;
  $cambio18=$fila3->cambio18;
  $cambio19=$fila3->cambio19;
  $cambio20=$fila3->cambio20;
  $cambio21=$fila3->cambio21;
  $cambio22=$fila3->cambio22;
  $cambio23=$fila3->cambio23;
  $cambio24=$fila3->cambio24;
  $cambio25=$fila3->cambio25;
  $cambio26=$fila3->cambio26;
  $cambio27=$fila3->cambio27;
  $cambio28=$fila3->cambio28;
  $cambio29=$fila3->cambio29;
  $cambio30=$fila3->cambio30;
  $cambio31=$fila3->cambio31;
  $cambio32=$fila3->cambio32;
  $cambio33=$fila3->cambio33;
  $cambio34=$fila3->cambio34;
  $cambio35=$fila3->cambio35;
  $cambio36=$fila3->cambio36;
  $cambio37=$fila3->cambio37;
  $cambio38=$fila3->cambio38;
  $cambio39=$fila3->cambio39;
  $cambio40=$fila3->cambio40;
  $cambio41=$fila3->cambio41;
  $cambio42=$fila3->cambio42;
  $cambio43=$fila3->cambio43;
  $cambio44=$fila3->cambio44;
  $cambio45=$fila3->cambio45;
  $cambio46=$fila3->cambio46;
    $valores = array(
        'valorid'=>$id,
  'valor00'=>$cambio0,
  'valor01'=>$cambio1,
  'valor02'=>$cambio2,
  'valor03'=>$cambio3,
  'valor04'=>$cambio4,
  'valor05'=>$cambio5,
  'valor06'=>$cambio6,
  'valor07'=>$cambio7,
  'valor08'=>$cambio8,
  'valor09'=>$cambio9,
  'valor10'=>$cambio10,
  'valor11'=>$cambio11,
  'valor12'=>$cambio12,
  'valor13'=>$cambio13,
  'valor14'=>$cambio14,
  'valor15'=>$cambio15,
  'valor16'=>$cambio16,
  'valor17'=>$cambio17,
  'valor18'=>$cambio18,
  'valor19'=>$cambio19,
  'valor20'=>$cambio20,
  'valor21'=>$cambio21,
  'valor22'=>$cambio22,
  'valor23'=>$cambio23,
  'valor24'=>$cambio24,
  'valor25'=>$cambio25,
  'valor26'=>$cambio26,
  'valor27'=>$cambio27,
  'valor28'=>$cambio28,
  'valor29'=>$cambio29,
  'valor30'=>$cambio30,
  'valor31'=>$cambio31,
  'valor32'=>$cambio32,
  'valor33'=>$cambio33,
  'valor34'=>$cambio34,
  'valor35'=>$cambio35,
  'valor36'=>$cambio36,
  'valor37'=>$cambio37,
  'valor38'=>$cambio38,
  'valor39'=>$cambio39,
  'valor40'=>$cambio40,
  'valor41'=>$cambio41,
  'valor42'=>$cambio42,
  'valor43'=>$cambio43,
  'valor44'=>$cambio44,
  'valor45'=>$cambio45,
  'valor46'=>$cambio46

  );

  // Devolvemos los valores como un JSON
  header('Content-Type: application/json');
    echo json_encode($valores);
   
?>