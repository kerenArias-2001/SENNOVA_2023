<?php 
session_start();
include('funciones.php');
  $miconexion = conectar_bd('', 'siadesos_planmaiz');
$busqueda2 = consulta($miconexion, "SELECT * FROM cambios_paginas WHERE id_cambios_paginas like 1"); //

$fila3 = $busqueda2 -> fetch_object();

$cambio3= $fila3 ->cambio3;
$cambio6= $fila3 ->cambio6;
	
    $navbar="
    <!-- Navbar -->
		<div class='row'>
			<div class='col-12'>
				<nav
					class='navbar navbar-expand-lg blur border-radius-xl top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4'>
					<div class='container-fluid px-0'>
						<a class='navbar-brand font-weight-bolder ms-sm-2' href='../index.html' rel='tooltip'
							title='".$cambio3."' data-placement='bottom'>
							<img class='' src='../assets/img/logo_maiz.png' width='30px' alt='' />
							".$cambio3."
						</a>
						<button class='navbar-toggler shadow-none ms-2' type='button' data-bs-toggle='collapse'
							data-bs-target='#navigation' aria-controls='navigation' aria-expanded='false'
							aria-label='Toggle navigation'>
							<span class='navbar-toggler-icon mt-2'>
								<span class='navbar-toggler-bar bar1'></span>
								<span class='navbar-toggler-bar bar2'></span>
								<span class='navbar-toggler-bar bar3'></span>
							</span>
						</button>
						<div class='collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100' id='navigation'>
							<ul class='navbar-nav navbar-nav-hover ms-auto'>
								<li class='nav-item'>
									<a href='../index.html' class='nav-link ps-2 d-flex cursor-pointer align-items-center'
										id='dropdownMenuPages' aria-expanded='false'>
										<i class='material-icons opacity-6 me-2 text-md'>home</i>
										Inicio
									</a>
								</li>

								<li class='nav-item dropdown dropdown-hover'>
									<a class='nav-link ps-2 d-flex cursor-pointer align-items-center'
										id='dropdownMenuBlocks' data-bs-toggle='dropdown' aria-expanded='false'>
										<i class='material-icons opacity-6 me-2 text-md'></i>
										<span id='cambio4'>Instructivos</span>
										<img src='../assets/img/down-arrow-dark.svg' alt='down-arrow'
											class='arrow ms-auto ms-md-2' />
									</a>
									<ul class='dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3'
										aria-labelledby='dropdownMenuBlocks'>
										<div class='d-none d-lg-block'>
											<li class='nav-item dropdown dropdown-hover dropdown-subitem'>
												<a class='dropdown-item py-2 ps-3 border-radius-md'
													href='../instructivos/cartilla_digital.html'>
													<div
														class='w-100 d-flex align-items-center justify-content-between'>
														<div>
															<h6
																class='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
																Cartilla digital
															</h6>
														</div>
													</div>
												</a>
											</li>

											<li class='nav-item dropdown dropdown-hover dropdown-subitem'>
												<a class='dropdown-item py-2 ps-3 border-radius-md'
													href='../instructivos/manual_usuario.html'>
													<div
														class='w-100 d-flex align-items-center justify-content-between'>
														<div>
															<h6
																class='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
																".$cambio6."
															</h6>
														</div>
													</div>
												</a>
											</li>

										<li class='nav-item dropdown dropdown-hover dropdown-subitem'>
											<a class='dropdown-item py-2 ps-3 border-radius-md'
												href='../pages/muestras.html'>
												<div
													class='w-100 d-flex align-items-center justify-content-between'>
													<div>
														<h6	class='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
															Matriz DOFA/FODA
														</h6>
													</div>
												</div>
											</a>
										</li>

										</div>

										<div class='d-lg-none'>
											<li class='nav-item dropdown dropdown-hover dropdown-subitem'>
												<a class='dropdown-item py-2 ps-3 border-radius-md'
													href='../instructivos/cartilla_digital.html'>
													<div
														class='w-100 d-flex align-items-center justify-content-between'>
														<div>
															<h6
																class='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
																Cartilla digital
															</h6>
														</div>
													</div>
												</a>
											</li>

											<li class='nav-item dropdown dropdown-hover dropdown-subitem'>
												<a class='dropdown-item py-2 ps-3 border-radius-md'
													href='../instructivos/manual_usuario.html'>
													<div
														class='w-100 d-flex align-items-center justify-content-between'>
														<div>
															<h6
																class=  'dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
																".$cambio6."
															</h6>
														</div>
													</div>
												</a>
											</li>
						<li class='nav-item dropdown dropdown-hover dropdown-subitem'>
												<a class='dropdown-item py-2 ps-3 border-radius-md'
												href='../pages/muestras.html'>
													<div
														class='w-100 d-flex align-items-center justify-content-between'>
														<div>
															<h6
																class=  'dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
																Matriz DOFA/FODA
															</h6>
														</div>
													</div>
												</a>
											</li>					
										

										</div>

									</ul>
								</li>
								<li class='nav-item dropdown dropdown-hover '>
									<button id='name_user' class='btn btn-success btn-sm mb-n2 dropdown-toggle'
										data-bs-toggle='dropdown' aria-expanded='false'>
										iniciando
									</button>
									<ul class='dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3'
										aria-labelledby='dropdownMenuBlocks'>
										<div class='d-none d-lg-block'>

											<li class='nav-item dropdown dropdown-hover dropdown-subitem'>

												<a href='../assets/php/cerrarsesion.php' class='w-100 d-flex align-items-center justify-content-between dropdown-item py-2 ps-3 border-radius-md'>
													<h6 class='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
														Cerrar Sesión
													</h6>
													<i class='material-icons opacity-6 me-2 text-md'>logout</i>
												</a>
											</li>

										</div>

										<div class='d-lg-none'>

											<li class='nav-item mt-4 dropdown dropdown-hover dropdown-subitem'>

												<a href='../assets/php/cerrarsesion.php'class='w-100 d-flex align-items-center justify-content-between dropdown-item py-2 ps-3 border-radius-md'>
													<h6 class='dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0'>
														Cerrar Sesión
													</h6>
													<i class='material-icons opacity-6 me-2 text-md'>logout</i>
												</a>
											</li>

										</div>
									</ul>
								</li>

								
							</ul>
						</div>
					</div>
				</nav>
				<!-- End Navbar -->
			</div>
		</div>
	";
    echo $navbar;
?>