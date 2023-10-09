<?php 
session_start();
include('funciones.php');
// $busqueda2 = consulta($miconexion, "SELECT * FROM usuario WHERE codigo_admin like %admin123"); //
// casi te asercas a la solucion pero  tenias que validar de la sigguiente forma  no uso admin123 porque puede havber mas de un usuario admin
// lo dejo que valide automatico con el id

$miconexion=conectar_bd('', 'siadesos_planmaiz');
$busqueda = consulta($miconexion, "SELECT * FROM usuario WHERE id_usuario like '{$_SESSION['id_usuario']}'");
$fila1 = $busqueda -> fetch_object();
$admin = $fila1 -> tipo_usuario;
	$Selection_pagina=$_POST['Selection_pagina'];

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

if ($admin=="admin") {
	
	$busqueda2 = consulta($miconexion, "SELECT * FROM cambios_paginas WHERE id_cambios_paginas like $id"); //
	$fila = $busqueda2 -> fetch_object();

	$cambio0=$fila ->cambio0;
	$cambio1=$fila ->cambio1;
	
	$cambio3=$fila ->cambio3;
	$cambio4=$fila ->cambio4;
	$cambio5=$fila ->cambio5;
	$cambio6=$fila ->cambio6;
	$cambio7=$fila ->cambio7;
	$cambio8=$fila ->cambio8;
	$cambio9=$fila ->cambio9;
	$cambio10=$fila ->cambio10;
	$cambio11=$fila ->cambio11;
	$cambio12=$fila ->cambio12;
	$cambio13=$fila ->cambio13;
	$cambio14=$fila ->cambio14;
	$cambio15=$fila ->cambio15;
	$cambio16=$fila ->cambio16;
	$cambio17=$fila ->cambio17;
	$cambio18=$fila ->cambio18;
	$cambio19=$fila ->cambio19;
	$cambio20=$fila ->cambio20;
	$cambio21=$fila ->cambio21;
	$cambio22=$fila ->cambio22;
	$cambio23=$fila ->cambio23;
	$cambio24=$fila ->cambio24;
	$cambio25=$fila ->cambio25;
	$cambio26=$fila ->cambio26;
	$cambio27=$fila ->cambio27;
	$cambio28=$fila ->cambio28;
	$cambio29=$fila ->cambio29;
	$cambio30=$fila ->cambio30;
	$cambio31=$fila ->cambio31;
	$cambio32=$fila ->cambio32;
	$cambio33=$fila ->cambio33;
	$cambio34=$fila ->cambio34;
	$cambio35=$fila ->cambio35;
	$cambio36=$fila ->cambio36;
	$cambio37=$fila ->cambio37;
	$cambio38=$fila ->cambio38;
	$cambio39=$fila ->cambio39;
	$cambio40=$fila ->cambio40;
	$cambio41=$fila ->cambio41;
	$cambio42=$fila ->cambio42;
	$cambio43=$fila ->cambio43;
	$cambio44=$fila ->cambio44;
	$cambio45=$fila ->cambio45;
	$cambio46=$fila ->cambio46;

    $cambiospaginas="
	<!-- formulario paginas -->
		<section>
			<div class='p-2 card table-responsive'>
				<a class='tablinks' onclick='abrir()' type='button'
				id='defaultOpen'>Modificar</a>  
				<form onsubmit='return false;'id='mostrar' class='tabcontent' style='display:none'>
					<div style='background-color: rgb(168, 168, 255); '>

						<div class='accordion' id='accordionRental'>
							<div class='accordion-item mb-3'>
								<h5 class='accordion-header' id='headingOne'>
								<a class='accordion-button border-bottom font-weight-bold text-start collapsed' type='button'
									data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='false'
									aria-controls='collapseOne'>Modificar Primera sección
									<i class='collapse-rotate fas fa-chevron-down text-xs text-primary pt-1 position-absolute end-0 me-3'
									aria-hidden='true'></i>
								</a>
								</h5>
								<div id='collapseOne' class='accordion-collapse collapse' aria-labelledby='headingOne' data-bs-parent='#accordionRental' style=''>
									<div class='accordion-body text-sm opacity-8'>
										<label for='guardar2'>imagen de fondo</label><br>
										<input type='file' id='guardar2' name='guardar2' accept='image/*'><br>
										<label for='guardar1'>Nombre de la página</label><br>
										<input type='text' id='guardar1' value='".$cambio1."' ><br>
										<label for='guardar4'>Instructivos</label><br>
										<input type='text' id='guardar4' value='".$cambio4."' ><br>
										<label for='guardar5'>Cartilla digital</label><br>
										<input type='text' id='guardar5' value='".$cambio5."' ><br>
										<label for='guardar6'>Manual de usuario</label><br>
										<input type='text' id='guardar6' value='".$cambio6."' ><br>
										<label for='guardar8'>Titulo del video</label><br>
										<input type='text' id='guardar8' value='".$cambio8."' ><br>
						
									</div>
								</div>
							</div>
							<div class='accordion-item mb-3'>
								<h5 class='accordion-header' id='headingTwo'>
								<a class='accordion-button border-bottom font-weight-bold text-start collapsed' type='button'
									data-bs-toggle='collapse' data-bs-target='#collapseTwo' aria-expanded='false'
									aria-controls='collapseTwo'>Modificar Segunda sección
									<i class='collapse-rotate fas fa-chevron-down text-xs text-primary pt-1 position-absolute end-0 me-3'
									aria-hidden='true'></i>
								</a>
								</h5>
								<div id='collapseTwo' class='accordion-collapse collapse' aria-labelledby='headingTwo' data-bs-parent='#accordionRental'>
									<div class='accordion-body text-sm opacity-8'>
										<label for='guardar10'>Titulo principal</label><br>
										<input type='text' id='guardar10' value='".$cambio10."' ><br>
										<label for='guardar11' class='font-weight-bold'>Fecha inicial</label><br>
										<input type='text' id='guardar11' value='".$cambio11."' ><br>
										<label for='guardar12'>Fecha final</label><br>
										<input type='text' id='guardar12' value='".$cambio12."' ><br>
										<label for='guardar13'>Cotización del laboratorio</label><br>
										<input type='text' id='guardar13' value='".$cambio13."' ><br>
										<label for='guardar14'>Metros a sembrar</label><br>
										<input type='text' id='guardar14' value='".$cambio14."' ><br>
										<label for='guardar15'>Nombre del botón</label><br>
										<input type='text' id='guardar15' value='".$cambio15."' ><br>
									</div>
								</div>
							</div>
							<div class='accordion-item mb-3'>
								<h5 class='accordion-header' id='headingThree'>
								<a class='accordion-button border-bottom font-weight-bold text-start collapsed' type='button'
									data-bs-toggle='collapse' data-bs-target='#collapseThree' aria-expanded='false'
									aria-controls='collapseThree'>Modificar tercera sección
									<i class='collapse-rotate fas fa-chevron-down text-xs text-primary pt-1 position-absolute end-0 me-3'
									aria-hidden='true'></i>
								</a>
								</h5>
								<div id='collapseThree' class='accordion-collapse collapse' aria-labelledby='headingThree'
								data-bs-parent='#accordionRental'>
									<div class='accordion-body text-sm opacity-8'>
										<label for='guardar16'>Inventario</label><br>
										<input type='text' id='guardar16' value='".$cambio16."' ><br>
										<label for='guardar17'>tipo</label><br>
										<input type='text' id='guardar17' value='".$cambio17."' ><br>
										<label for='guardar18'>selecciona</label><br>
										<input type='text' id='guardar18' value='".$cambio18."' ><br>
										<label for='guardar19'>seleccion 1</label><br>
										<input type='text' id='guardar19' value='".$cambio19."' ><br>
										<label for='guardar20'>seleccion 2</label><br>
										<input type='text' id='guardar20' value='".$cambio20."' ><br>
										<label for='guardar21'>Listado</label><br>
										<input type='text' id='guardar21' value='".$cambio21."' ><br>
										<label for='guardar22'>cotizacion</label><br>
										<input type='text' id='guardar22' value='".$cambio22."' ><br>
										<label for='guardar23'>titulo1</label><br>
										<input type='text' id='guardar23' value='".$cambio23."' ><br>
										<label for='guardar24'>titulo2</label><br>
										<input type='text' id='guardar24' value='".$cambio24."' ><br>
										<label for='guardar25'>titulo3</label><br>
										<input type='text' id='guardar25' value='".$cambio25."' ><br>
										<label for='guardar26'>titulo4</label><br>
										<input type='text' id='guardar26' value='".$cambio26."' ><br>
										<label for='guardar27'>titulo5</label><br>
										<input type='text' id='guardar27' value='".$cambio27."' ><br>
										<label for='guardar28'>total</label><br>
										<input type='text' id='guardar28' value='".$cambio28."' ><br>
									</div>
								</div>
							</div>
							<div class='accordion-item mb-3'>
								<h5 class='accordion-header' id='headingFour'>
								<a class='accordion-button border-bottom font-weight-bold text-start collapsed' type='button'
									data-bs-toggle='collapse' data-bs-target='#collapseFour' aria-expanded='false'
									aria-controls='collapseFour'>Modificar cuarta sección
									<i class='collapse-rotate fas fa-chevron-down text-xs text-primary pt-1 position-absolute end-0 me-3'
									aria-hidden='true'></i>
								</a>
								</h5>
								<div id='collapseFour' class='accordion-collapse collapse' aria-labelledby='headingFour' data-bs-parent='#accordionRental'>
									<div class='accordion-body text-sm opacity-8'>
										<label for='guardar29'>boton abandonar</label><br>
										<input type='text' id='guardar29' value='".$cambio29."' ><br>
										<label for='guardar30'>boton1</label><br>
										<input type='text' id='guardar30' value='".$cambio30."' ><br>
										<label for='guardar31'>boton2</label><br>
										<input type='text' id='guardar31' value='".$cambio31."' ><br>
										<label for='guardar32'>boton3</label><br>
										<input type='text' id='guardar32' value='".$cambio32."' ><br>
										<label for='guardar33'>boton4</label><br>
										<input type='text' id='guardar33' value='".$cambio33."' ><br>
										<label for='guardar34'>boton5</label><br>
										<input type='text' id='guardar34' value='".$cambio34."' ><br>
										<label for='guardar35'>boton6</label><br>
										<input type='text' id='guardar35' value='".$cambio35."' ><br>
										<label for='guardar36'>boton7</label><br>
										<input type='text' id='guardar36' value='".$cambio36."' ><br>
										<label for='guardar37'>boton8</label><br>
										<input type='text' id='guardar37' value='".$cambio37."' ><br>
										<label for='guardar38'>boton Siguiente</label><br>
										<input type='text' id='guardar38' value='".$cambio38."' ><br>


									</div>
								</div>
							</div>
							<div class='accordion-item mb-3'>
								<h5 class='accordion-header' id='headingFifth'>
								<a class='accordion-button border-bottom font-weight-bold text-start collapsed' type='button'
									data-bs-toggle='collapse' data-bs-target='#collapseFifth' aria-expanded='false'
									aria-controls='collapseFifth'>Modificar Quinta sección
									<i class='collapse-rotate fas fa-chevron-down text-xs text-primary pt-1 position-absolute end-0 me-3'
									aria-hidden='true'></i>
								</a>
								</h5>
								<div id='collapseFifth' class='accordion-collapse collapse' aria-labelledby='headingFifth'	data-bs-parent='#accordionRental'>
									<div class='accordion-body text-sm opacity-8'>
										<label for='guardar39'>Listado</label><br>
										<input type='text' id='guardar39' value='".$cambio39."' ><br>
										<label for='guardar40'>cotizacion</label><br>
										<input type='text' id='guardar40' value='".$cambio40."' ><br>
										<label for='guardar41'>titulo1</label><br>
										<input type='text' id='guardar41' value='".$cambio41."' ><br>
										<label for='guardar42'>titulo2</label><br>
										<input type='text' id='guardar42' value='".$cambio42."' ><br>
										<label for='guardar43'>titulo3</label><br>
										<input type='text' id='guardar43' value='".$cambio43."' ><br>
										<label for='guardar44'>titulo4</label><br>
										<input type='text' id='guardar44' value='".$cambio44."' ><br>
										<label for='guardar45'>titulo5</label><br>
										<input type='text' id='guardar45' value='".$cambio45."' ><br>
										<label for='guardar46'>total</label><br>
										<input type='text' id='guardar46' value='".$cambio46."' ><br>

									</div>
								</div>
							</div>
						</div>



						

						
					</div>
					<input type='submit' onclick='guardar_cambios()' value='guardar cambios'>

				</form>
			</div>
		</section>
	<!-- formulario paginas -->
	
	<script>
	cerrar = true;
function abrir(){
	if ((cerrar == true)) {
	document.getElementById('mostrar').style.display = 'block';
	cerrar = false;
  }else{
	document.getElementById('mostrar').style.display = 'none';
	cerrar = true;
  }
}
	</script>"; 
    echo $cambiospaginas;
}else {
	echo "necesita ser usuaro administrador"; //siquieres puedes  dejar el echo ""; si no deseas mostar nada
}
?>