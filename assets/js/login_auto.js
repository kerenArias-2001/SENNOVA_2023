// permite usar json
$(document).ready(function () {
	// Función para actualizar la tabla con los datos del servidor
	function actualizarTabla() {
	    
		$.ajax({
			url: "../assets/php/obtener_tabla_analisis.php", // Archivo PHP que obtiene los datos del servidor

			success: function (data) {
				$("#tabla_paso1").html(data); // Actualizar el contenido de la tabla con los datos recibidos
			},
		});

		$.ajax({
			url: "../assets/php/obtener_tabla_preparacion.php", // Archivo PHP que obtiene los datos del servidor

			success: function (data) {
				$("#tabla_paso2").html(data); // Actualizar el contenido de la tabla con los datos recibidos
			},
		});

		$.ajax({
			url: "../assets/php/obtener_tabla_riego.php", // Archivo PHP que obtiene los datos del servidor

			success: function (data) {
				$("#tabla_paso3").html(data); // Actualizar el contenido de la tabla con los datos recibidos
			},
		});

		$.ajax({
			url: "../assets/php/obtener_tabla_siembra.php", // Archivo PHP que obtiene los datos del servidor

			success: function (data) {
				$("#tabla_paso4").html(data); // Actualizar el contenido de la tabla con los datos recibidos
			},
		});
		$.ajax({
			url: "../assets/php/obtener_tabla_fertilizacion.php", // Archivo PHP que obtiene los datos del servidor

			success: function (data) {
				$("#tabla_paso5").html(data); // Actualizar el contenido de la tabla con los datos recibidos
			},
		});

		$.ajax({
			url: "../assets/php/obtener_tabla_control.php", // Archivo PHP que obtiene los datos del servidor

			success: function (data) {
				$("#tabla_paso6").html(data); // Actualizar el contenido de la tabla con los datos recibidos
			},
		});

		$.ajax({
			url: "../assets/php/obtener_tabla_cosecha.php", // Archivo PHP que obtiene los datos del servidor

			success: function (data) {
				$("#tabla_paso7").html(data); // Actualizar el contenido de la tabla con los datos recibidos
			},
		});

		$.ajax({
			url: "../assets/php/obtener_tabla_pos_cosecha.php", // Archivo PHP que obtiene los datos del servidor

			success: function (data) {
				$("#tabla_paso8").html(data); // Actualizar el contenido de la tabla con los datos recibidos
			},
		});


		$.ajax({
			url: "../assets/php/obtener_tabla_terreno.php", // Archivo PHP que obtiene los datos del servidor

			success: function (data) {
				$("#tabla_terreno").html(data); // Actualizar el contenido de la tabla con los datos recibidos
			},
		});
		$.ajax({
			url: "../assets/php/obtener_tabla_dofa.php", // Archivo PHP que obtiene los datos del servidor

			success: function (data) {
				$("#tabla_dofa").html(data); // Actualizar el contenido de la tabla con los datos recibidos
			},
		});
		$.ajax({
			url: "../assets/php/obtener_tabla_foda.php", // Archivo PHP que obtiene los datos del servidor

			success: function (data) {
				$("#tabla_foda").html(data); // Actualizar el contenido de la tabla con los datos recibidos
			},
		});
	}
	function actualizardatos() {
		$.ajax({
			url: "../assets/php/obtener_tabla_resultado.php", // Archivo PHP que obtiene los datos del servidor

			success: function (data) {
				$("#tabla_inventario").html(data); // Actualizar el contenido de la tabla con los datos recibidos
			},
		});
	/*    
	    var nombre_u = document.getElementById("name_user").value;
	   // console.log(nombre_u);
		const formData = new FormData();
		formData.append("nombre_u", nombre_u);
		fetch("../assets/php/obtener_tabla_preparacion.php", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.text())
			.then((data) => {
				//console.log(data); // respuesta_valor_maiz del servidor //(opcional)
				console.log(data);
			
			})
			.catch((error) => {
				console.error("Error:", error);
			});

	    */
	    $.ajax({
				url: "../assets/php/navbar.php", // Archivo PHP 
	
				success: function (data) {
					$("#navbar1").html(data); // Actualizar navbar
				},
			});
			const Selection_pagina1 = document.getElementById('seleccion_pagina');
	
				if (Selection_pagina1!=null) {
					
				
				const Selection_pagina = document.getElementById('seleccion_pagina').value;
				const formData = new FormData();
				formData.append("Selection_pagina", Selection_pagina);
			
	
				$.ajax({
					url: "../assets/php/paginas.php", // Archivo PHP 
					type: "POST",  // Cambiado "method" por "type"
					data: formData,  // Cambiado "body" por "data"
					processData: false,
					contentType: false,
		
					success: function (data) {
						$("#admin").html(data); // Actualizar navbar
					},
				});
			}
	    
		$.ajax({
			url: "../assets/php/obtener_datos_terreno.php",
			dataType: "json",
			success: function (data) {
				$("#area").html(data.valor2);
				$("#dist_semilla").html(data.valor4);
				$("#dist_surcos").html(data.valor3);
				$("#cant_plantas").html(data.valor5);
				$("#cant_obtenida").html(data.valor6);
				$("#cant_sembrar").html(data.valor7);
			},
		});

		$.ajax({
			url: "../assets/php/obtener_datos.php",
			dataType: "json",
			success: function (data) {
				$("#name_user").html(data.valor1);
			    	if (data.valor1 != null) {
					// document.getElementById("name_user").value = data.valor1;
				}	

				if (data.valor_0 === null) {
					var fecha0_1 = 0;
				} else {
					let fechaSumada = data.valor_0;

					let fechaSumada1 = new Date(fechaSumada);

					fechaSumada1.setDate(fechaSumada1.getDate() + 1);
					let mesSumado = fechaSumada1.getMonth();

					var meses = [
						"Enero",
						"Febrero",
						"Marzo",
						"Abril",
						"Mayo",
						"Junio",
						"Julio",
						"Agosto",
						"Septiembre",
						"Octubre",
						"Noviembre",
						"Diciembre",
					];

					var numero2 = 0;
					var numero = 0;

					for (let i = 0; i < 6; i++) {
						//agrega  los meses automatico  conrespectoala fecha de inicio
						if (numero > 10) {
							let meses1 = meses[numero2];

							$("#mes" + i).text(meses1);
							var numero2 = numero2 + 1;
						} else {
							numero = parseInt(mesSumado) + i;
							let meses1 = meses[numero];

							$("#mes" + i).text(meses1);
						}
					}

					$("#fecha_inicial_0").html(data.valor_0);
					var fecha_01 = new Date(data.valor_0);
					var fecha0_1 = getWeekNumber(fecha_01);
				}
				if (data.valor_1 === null) {
					var fecha0_2 = 0;
				} else {
					$("#fecha_inicial_1").html(data.valor_1);
					var fecha_02 = new Date(data.valor_1);
					var fecha0_2 = getWeekNumber(fecha_02);
				}
				if (data.valor2 === null) {
					var fecha0 = 0;
				} else {
					$("#fecha_inicial").html(data.valor2);
					var fecha_0 = new Date(data.valor2);
					var fecha0 = getWeekNumber(fecha_0);
				}
				if (data.valor3 === null) {
					var fecha1 = 0;
				} else {
					$("#mes_1").html(data.valor3);
					var fecha_1 = new Date(data.valor3);
					var fecha1 = getWeekNumber(fecha_1);
				}

				if (data.valor4 === null) {
					var fecha2 = 0;
				} else {
					$("#mes_2").html(data.valor4);
					var fecha_2 = new Date(data.valor4);
					var fecha2 = getWeekNumber(fecha_2);
				}
				if (data.valor5 === null) {
					var fecha3 = 0;
				} else {
					$("#mes_3").html(data.valor5);
					var fecha_3 = new Date(data.valor5);
					var fecha3 = getWeekNumber(fecha_3);
				}
				if (data.valor6 === null) {
					var fecha4 = 0;
				} else {
					$("#mes_4").html(data.valor6);
					var fecha_4 = new Date(data.valor6);
					var fecha4 = getWeekNumber(fecha_4);
				}
				if (data.valor7 === null) {
					var fecha5 = 0;
				} else {
					$("#mes_5").html(data.valor7);
					var fecha_5 = new Date(data.valor7);
					var fecha5 = getWeekNumber(fecha_5);
				}
				if (data.valor8 === null) {
					var fecha6 = 0;
				} else {
					$("#mes_6").html(data.valor8);
					var fecha_6 = new Date(data.valor8);
					var fecha6 = getWeekNumber(fecha_6);
				}
				if (data.valor9 === null) {
					var fecha7 = 0;
				} else {
					$("#mes_7").html(data.valor9);
					var fecha_7 = new Date(data.valor9);
					var fecha7 = getWeekNumber(fecha_7);
				}
				if (data.valor10 === null) {
					var fecha8 = 0;
				} else {
					$("#mes_8").html(data.valor10);
					var fecha_8 = new Date(data.valor10);
					var fecha8 = getWeekNumber(fecha_8);
				}

				if (data.valor11 === null) {
					var fecha9 = 0;
				} else {
					$("#mes_9").html(data.valor11);
					var fecha_9 = new Date(data.valor11);
					var fecha9 = getWeekNumber(fecha_9);
				}
				if (data.valor12 === null) {
					var fecha10 = 0;
				} else {
					$("#mes_10").html(data.valor12);
					var fecha_10 = new Date(data.valor12);
					var fecha10 = getWeekNumber(fecha_10);
				}
				if (data.valor13 === null) {
					var fecha11 = 0;
				} else {
					$("#mes_11").html(data.valor13);
					var fecha_11 = new Date(data.valor13);
					var fecha11 = getWeekNumber(fecha_11);
				}
				if (data.valor14 === null) {
					var fecha3 = 0;
				} else {
					$("#mes_12").html(data.valor14);
					var fecha_14 = new Date(data.valor14);
					var fecha12 = getWeekNumber(fecha_14);
				}
				if (data.valor15 === null) {
					var fecha3 = 0;
				} else {
					$("#mes_13").html(data.valor15);
					var fecha_15 = new Date(data.valor15);
					var fecha13 = getWeekNumber(fecha_15);
				}
				
var paginaV = document.getElementById("boton_t"); //permite selecccionar la pagina
				if (paginaV != null) {
					var pagina = document.getElementById("boton_t").value; //permite selecccionar la pagina
var fechainicioocultar = document.getElementById("fechainicio"); //permite selecccionar la pagina
					if (fechainicioocultar !=null) {
						if (data.valor_0==null) {
							fechainicioocultar.style.display="none";
	
						}
					}
					

				if (pagina === "paso1") {
					if (data.valor_0 != null) {
					var fecha__1 = new Date(data.valor_0); // leda formato de fecha ala fecha guardada en  bd
					var fecha__2 = new Date(data.valor_1);
					// Formatea la fecha en el formato YYYY-MM-DD
					var formattedDate_1 = fecha__1.toISOString().split("T")[0]; // reemplaza el valor inicial delinput tipe date
					var formattedDate_2 = fecha__2.toISOString().split("T")[0];
					document.getElementById("fecha_inicio").value = formattedDate_1;
					document.getElementById("fecha_final").value = formattedDate_2;
					
				}			
				} else if (pagina === "paso2") {
					$("#fecha_pagina1").html(data.valor_0);  //aqui
						compararfechainicio();
						if (data.valor2 != null) {
					var fecha__1 = new Date(data.valor2);
					var fecha__2 = new Date(data.valor3);
					// Formatea la fecha en el formato YYYY-MM-DD
					var formattedDate_1 = fecha__1.toISOString().split("T")[0];
					var formattedDate_2 = fecha__2.toISOString().split("T")[0];
					document.getElementById("fecha_inicio").value = formattedDate_1;
					document.getElementById("fecha_final").value = formattedDate_2;
					}
				} else if (pagina === "paso3") {
					$("#fecha_pagina1").html(data.valor_0);  //aqui

						if (data.valor4 != null) {
					var fecha__1 = new Date(data.valor4);
					var fecha__2 = new Date(data.valor5);
					// Formatea la fecha en el formato YYYY-MM-DD
					var formattedDate_1 = fecha__1.toISOString().split("T")[0];
					var formattedDate_2 = fecha__2.toISOString().split("T")[0];
					document.getElementById("fecha_inicio").value = formattedDate_1;
					document.getElementById("fecha_final").value = formattedDate_2;
				}
				} else if (pagina === "paso4") {
					$("#fecha_pagina1").html(data.valor_0);  //aqui

						if (data.valor6 != null) {
					var fecha__1 = new Date(data.valor6);
					var fecha__2 = new Date(data.valor7);
					// Formatea la fecha en el formato YYYY-MM-DD
					var formattedDate_1 = fecha__1.toISOString().split("T")[0];
					var formattedDate_2 = fecha__2.toISOString().split("T")[0];
					document.getElementById("fecha_inicio").value = formattedDate_1;
					document.getElementById("fecha_final").value = formattedDate_2;
					}
				} else if (pagina === "paso5") {
					$("#fecha_pagina1").html(data.valor_0);  //aqui

						if (data.valor8 != null) {
					var fecha__1 = new Date(data.valor8);
					var fecha__2 = new Date(data.valor9);
					// Formatea la fecha en el formato YYYY-MM-DD
					var formattedDate_1 = fecha__1.toISOString().split("T")[0];
					var formattedDate_2 = fecha__2.toISOString().split("T")[0];
					document.getElementById("fecha_inicio").value = formattedDate_1;
					document.getElementById("fecha_final").value = formattedDate_2;
					}
				} else if (pagina === "paso6") {
					$("#fecha_pagina1").html(data.valor_0);  //aqui

						if (data.valor10 != null) {
					var fecha__1 = new Date(data.valor10);
					var fecha__2 = new Date(data.valor11);
					// Formatea la fecha en el formato YYYY-MM-DD
					var formattedDate_1 = fecha__1.toISOString().split("T")[0];
					var formattedDate_2 = fecha__2.toISOString().split("T")[0];
					document.getElementById("fecha_inicio").value = formattedDate_1;
					document.getElementById("fecha_final").value = formattedDate_2;
					}
				} else if (pagina === "paso7") {
					$("#fecha_pagina1").html(data.valor_0);  //aqui

						if (data.valor12 != null) {
					var fecha__1 = new Date(data.valor12);
					var fecha__2 = new Date(data.valor13);
					// Formatea la fecha en el formato YYYY-MM-DD
					var formattedDate_1 = fecha__1.toISOString().split("T")[0];
					var formattedDate_2 = fecha__2.toISOString().split("T")[0];
					document.getElementById("fecha_inicio").value = formattedDate_1;
					document.getElementById("fecha_final").value = formattedDate_2;
					}
				} else if (pagina === "paso8") {
						$("#fecha_pagina1").html(data.valor_0);  //aqui  

					if (data.valor14 != null) {
					var fecha__1 = new Date(data.valor14);
					var fecha__2 = new Date(data.valor15);
					// Formatea la fecha en el formato YYYY-MM-DD
					var formattedDate_1 = fecha__1.toISOString().split("T")[0];
					var formattedDate_2 = fecha__2.toISOString().split("T")[0];
					document.getElementById("fecha_inicio").value = formattedDate_1;
					document.getElementById("fecha_final").value = formattedDate_2;
					}
				}
			}
				colorRow(
					fecha0_1,
					fecha0_2,
					fecha0,
					fecha1,
					fecha2,
					fecha3,
					fecha4,
					fecha5,
					fecha6,
					fecha7,
					fecha8,
					fecha9,
					fecha10,
					fecha11,
					fecha12,
					fecha13
				);
			},
		});
	}

	// resultados de cada proceso
	function resultados_procesos() {
		$.ajax({
			url: "../assets/php/obtener_resultado.php",
			dataType: "json",
			success: function (data) {
				var tamaño1 = data.v_analisis;
				var tamaño2 = data.v_preparacion;
				var tamaño3 = data.v_riego;
				var tamaño4 = data.v_siembra;
				var tamaño5 = data.v_fertilizacion;
				var tamaño7 = data.v_control;
				var tamaño8 = data.v_cosecha;
				var tamaño9 = data.v_pos_cosecha;
				const validacion = document.getElementById("grafica2_boton");

				var analisis = data.v_analisis + "%";
				var preparacion = data.v_preparacion + "%";
				var riego = data.v_riego + "%";
				var siembra = data.v_siembra + "%";
				var fertilizacion = data.v_fertilizacion + "%";
				var control = data.v_control + "%";
				var cosecha = data.v_cosecha + "%";
				var pos_cosecha = data.v_pos_cosecha + "%";
				var inversion = data.valor_total_proceso;
				var ganancia = data.ganancias;
				var ganancias_esperada = data.ganancias_esperada;

				if (validacion !== null) {
					// Obtener una referencia al elemento canvas del DOM
					grafico(
						tamaño1,
						tamaño2,
						tamaño3,
						tamaño4,
						tamaño5,
						tamaño7,
						tamaño8,
						tamaño9
					);
					grafico_grande(
						tamaño1,
						tamaño2,
						tamaño3,
						tamaño4,
						tamaño5,
						tamaño7,
						tamaño8,
						tamaño9
					);
					grafico2_boton(inversion, ganancia, ganancias_esperada);
					grafica2_grande(inversion, ganancia, ganancias_esperada);

					var notificacion = document.getElementById("notificacion");

					// alert(inversion>= ganancia);
					var button = document.getElementById("validar_planeacion");
					var mostrardemo = document.getElementById("demo2");
					button.addEventListener("click", function () {
						mostrardemo.style.display = "block";
						if (inversion * 1.75 >= ganancia) {
							Swal.fire({
								icon: "error",
								title: "LA PLANEACIÓN NO ES VIABLE",
								showClass: {
									popup: "animate__animated animate__fadeInDown",
								},
								hideClass: {
									popup: "animate__animated animate__fadeOutUp",
								},
							});
							notificacion.innerHTML =
								"<div style='border-left: 4px solid red; background:#ffe0e0; padding: 4px; padding-left:7px'> <strong class='text-center'>PLANEACIÓN NO VIABLE</strong> <br> <strong>NOTA:</strong> La planeación actual plantea desafíos de viabilidad debido a <strong>costos elevados</strong>. Se sugiere modificar los costos más altos, Estos cambios se pueden hacer en la tabla principal para garantizar la viabilidad sin comprometer la calidad ni la ejecución del proyecto. " +
								"<div class='container'><button class='btn bg-gradient-danger  ms-3 btn-icon-only  btn-rounded pt-0 btn-outline-success btn-xxl' style='position: absolute; right: -15px; top: -15px; border: 2px solid white;'><h4 class='ms-n1 text-white'>✖</h4></button></div> </div>";
						} else if (inversion * 1.75 <= ganancia) {
							Swal.fire({
								icon: "success",
								title: "La planeación  es viable ",
								showClass: {
									popup: "animate__animated animate__fadeInDown",
								},
								hideClass: {
									popup: "animate__animated animate__fadeOutUp",
								},
							});
							notificacion.innerHTML =
								"<div style='border-left: 4px solid #4caf50; background: #ebfee1; padding: 4px; padding-left:7px'><strong class='text-center'>PLANEACIÓN VIABLE Y RENTABLE</strong> <br> <strong>NOTA:</strong> La planeación actual se presenta como viable, con costos bien estructurados y razonables. Los ajustes necesarios se han considerado de manera estratégica para asegurar la ejecución exitosa del proyecto sin comprometer su calidad ni su eficiencia." +
								"<div class='container'><button class='btn bg-gradient-success  ms-3 btn-icon-only  btn-rounded pt-0 btn-outline-success btn-xxl' style='position: absolute; right: -15px; top: -15px; border: 2px solid white;'><h4 class='ms-n1 text-white'>✔</h4></button></div></div> ";
						}
					});
				}

				$("#valor_analisis").html("$ " + data.valor_analisis);
				$("#valor_preparacion").html("$ " + data.valor_preparacion);
				$("#valor_siembra").html("$ " + data.valor_siembra);
				$("#valor_fertilizacion").html("$ " + data.valor_fertilizacion);
				$("#valor_cosecha").html("$ " + data.valor_cosecha);
				$("#valor_pos_cosecha").html("$ " + data.valor_pos_cosecha);
				$("#valor_riego").html("$ " + data.valor_riego);
				$("#valor_control").html("$ " + data.valor_control);
				$("#valor_total_proceso").html(
					"$ " + data.valor_total_proceso.toLocaleString("es-ES")
				);

				$("#v_analisis").html(analisis);
				$("#v_preparacion").html(preparacion);
				$("#v_siembra").html(siembra);
				$("#v_fertilizacion").html(fertilizacion);
				$("#v_cosecha").html(cosecha);
				$("#v_pos_cosecha").html(pos_cosecha);
				$("#v_riego").html(riego);
				$("#v_control").html(control);

				$("#bar_analisis").height(tamaño1);
				$("#bar_preparacion").height(tamaño2);
				$("#bar_riego").height(tamaño3);
				$("#bar_siembra").height(tamaño4);
				$("#bar_fertilizacion").height(tamaño5);
				$("#bar_control").height(tamaño7);
				$("#bar_cosecha").height(tamaño8);
				$("#bar_pos_cosecha").height(tamaño9);
			},
		});
	}

	// Llamar a la función inicialmente para cargar la tabla con los datos actuales
	actualizarTabla();
	actualizardatos();
	resultados_procesos();

	// Escuchar eventos de cambio en el formulario
	setInterval(actualizarTabla, 1000); //actualiza casa 1s  todo lo que esta en la funcion actualizar tabla

	//edité la actualización de la tabla
});
// permite usar json

function getWeekNumber(date) {
	//permite calcular aque  semana pertenece la fecha
	var onejan = new Date(date.getFullYear(), 0, 1);
	return Math.ceil(((date - onejan) / 86400000 + onejan.getDay() + 1) / 7);
}


// grafica de barras BOTON
function grafico(
	tamaño1,
	tamaño2,
	tamaño3,
	tamaño4,
	tamaño5,
	tamaño7,
	tamaño8,
	tamaño9
) {
	const $grafica_boton = document.querySelector("#grafica_boton");
	// Las etiquetas son las porciones de la gráfica
	const etiquetas = [
		"Aná..",
		"Prep..",
		"Rie..",
		"Siem..",
		"Fert..",
		"Cont..",
		"Cos..",
		"Pos..",
	];

	// Podemos tener varios conjuntos de datos. Comencemos con uno
	const datosIngresos = {
		data: [
			tamaño1,
			tamaño2,
			tamaño3,
			tamaño4,
			tamaño5,
			tamaño7,
			tamaño8,
			tamaño9,
		], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
		// Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
		label: "Costos de Pro..",
		backgroundColor: [
			"rgb(0 183 105)", //Verde marino
			"rgb(131, 166, 3)", //Verde lima
			"rgb(255 150 0)", //Mostaza
			"rgb(70, 89, 2)", //Verde caquita
			"rgb(191, 73, 4)", //Naranja oscuro
			"rgb(140, 28, 3)", //Vino tinto oscuro
			"rgb(216 245 0)", //Verde clarito
			"rgb(0 183 105)", //Verde marino
			"rgb(131, 166, 3)", //Verde lima
			"rgb(255 150 0)", //Mostaza
		], // Color de fondo
		borderColor: [
			"rgb(0 183 105)", //Verde marino
			"rgb(131, 166, 3)", //Verde lima
			"rgb(255 150 0)", //Mostaza
			"rgb(70, 89, 2)", //Verde caquita
			"rgb(191, 73, 4)", //Naranja oscuro
			"rgb(140, 28, 3)", //Vino tinto oscuro
			"rgb(216 245 0)", //Verde clarito
			"rgb(0 183 105)", //Verde marino
			"rgb(131, 166, 3)", //Verde lima
			"rgb(255 150 0)", //Mostaza
		], // Color del borde
		hoverBackgroundColor: [
			"rgb(0 183 105 / 55%)", //Verde marino
			"rgb(131 166 3 / 55%)", //Verde lima
			"rgb(255 150 0 / 55%)", //Mostaza
			"rgb(70 89 2  / 55%)", //Verde caquita
			"rgb(191 73 4 / 55%)", //Naranja oscuro
			"rgb(140 28 3 / 55%)", //Vino tinto oscuro
			"rgb(216 245 0 / 55%)", //Verde clarito
			"rgb(0 183 105 / 55%)", //Verde marino
			"rgb(131 166 3 / 55%)", //Verde lima
			"rgb(255 150 0 / 55%)", //Mostaza
		],
		hoverBorderColor: [
			"rgb(183 105)", //Verde marino
			"rgb(131 166 3)", //Verde lima
			"rgb(255 150 0)", //Mostaza
			"rgb(70 89 2)", //Verde caquita
			"rgb(191 73 4 )", //Naranja oscuro
			"rgb(140 28 3)", //Vino tinto oscuro
			"rgb(216 245 0)", //Verde clarito
			"rgb(183 105)", //Verde marino
			"rgb(131 166 3)", //Verde lima
			"rgb(255 150 0)", //Mostaza
		],
		borderWidth: 2, // Ancho del borde
	};
	const options = {
		responsive: true,
		AspectRatio: false,
		title: {
			display: true,
			text: "Costos de Producción",
		},
	};
	new Chart($grafica_boton, {
		type: "bar", // Tipo de gráfica. Puede ser dougnhut o pie
		data: {
			labels: etiquetas,
			datasets: [
				datosIngresos,
				// Aquí más datos...
			],
		},
		//options:options,
	});
}
// grafica de barras BOTON

// grafica de barras GRANDE
function grafico_grande(
	tamaño1,
	tamaño2,
	tamaño3,
	tamaño4,
	tamaño5,
	tamaño7,
	tamaño8,
	tamaño9
) {
	const $grafica_grande = document.querySelector("#grafica_grande");
	// Las etiquetas son las porciones de la gráfica
	const etiquetas = [
		"Análisis del suelo",
		"Preparar el terreno",
		"Sistema de riego",
		"Realizar Sembrar",
		"Realizar Fertilización",
		" Realizar Control",
		"Preparar Cosecha",
		"Preparar Poscosecha",
	];
	// Podemos tener varios conjuntos de datos. Comencemos con uno
	const datosIngresos = {
		data: [
			tamaño1,
			tamaño2,
			tamaño3,
			tamaño4,
			tamaño5,
			tamaño7,
			tamaño8,
			tamaño9,
		], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
		// Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
		label: "Ocultar",
		backgroundColor: [
			"rgb(0 183 105)", //Verde marino
			"rgb(131, 166, 3)", //Verde lima
			"rgb(255 150 0)", //Mostaza
			"rgb(70, 89, 2)", //Verde caquita
			"rgb(191, 73, 4)", //Naranja oscuro
			"rgb(140, 28, 3)", //Vino tinto oscuro
			"rgb(216 245 0)", //Verde clarito
			"rgb(0 183 105)", //Verde marino
			"rgb(131, 166, 3)", //Verde lima
			"rgb(255 150 0)", //Mostaza
		], // Color de fondo
		borderColor: [
			"rgb(0 183 105)", //Verde marino
			"rgb(131, 166, 3)", //Verde lima
			"rgb(255 150 0)", //Mostaza
			"rgb(70, 89, 2)", //Verde caquita
			"rgb(191, 73, 4)", //Naranja oscuro
			"rgb(140, 28, 3)", //Vino tinto oscuro
			"rgb(216 245 0)", //Verde clarito
			"rgb(0 183 105)", //Verde marino
			"rgb(131, 166, 3)", //Verde lima
			"rgb(255 150 0)", //Mostaza
		], // Color del borde
		hoverBackgroundColor: [
			"rgb(0 183 105 / 55%)", //Verde marino
			"rgb(131 166 3 / 55%)", //Verde lima
			"rgb(255 150 0 / 55%)", //Mostaza
			"rgb(70 89 2  / 55%)", //Verde caquita
			"rgb(191 73 4 / 55%)", //Naranja oscuro
			"rgb(140 28 3 / 55%)", //Vino tinto oscuro
			"rgb(216 245 0 / 55%)", //Verde clarito
			"rgb(0 183 105 / 55%)", //Verde marino
			"rgb(131 166 3 / 55%)", //Verde lima
			"rgb(255 150 0 / 55%)", //Mostaza
		],
		hoverBorderColor: [
			"rgb(183 105)", //Verde marino
			"rgb(131 166 3)", //Verde lima
			"rgb(255 150 0)", //Mostaza
			"rgb(70 89 2)", //Verde caquita
			"rgb(191 73 4 )", //Naranja oscuro
			"rgb(140 28 3)", //Vino tinto oscuro
			"rgb(216 245 0)", //Verde clarito
			"rgb(183 105)", //Verde marino
			"rgb(131 166 3)", //Verde lima
			"rgb(255 150 0)", //Mostaza
		],
		borderWidth: 2, // Ancho del borde
	};
	const options = {
		responsive: true,
		AspectRatio: false,
		legend: {
            display: true,
            labels: {
                fontSize: 14, // Cambia el tamaño de la fuente de la leyenda aquí
                fontStyle: 'bold' // Puedes establecer otros estilos de fuente como 'normal', 'italic', etc.
            }
		},
		title: {
			display: true,
			text: "Representación de Costos de Producción",
		},
		scales: {
            x: {
                ticks: {
                    fontSize: 20, // Tamaño de la fuente en el eje X (etiquetas y números)
					fontStyle: 'bold'
                },
                title: {
                    display: true,
                    text: 'Eje X', // Título del eje X
                    fontSize: 16, // Tamaño de la fuente del título del eje X
                }
            },
            y: {
                ticks: {
                    fontSize: 20, // Tamaño de la fuente en el eje Y (etiquetas y números)
					fontStyle: 'bold'
                },
                title: {
                    display: true,
                    text: 'Eje Y', // Título del eje Y
                    fontSize: 16, // Tamaño de la fuente del título del eje Y
                }
            }
        }
	};
	grafico1 = new Chart($grafica_grande, {
		type: "bar", // Tipo de gráfica. Puede ser dougnhut o pie
		data: {
			labels: etiquetas,
			datasets: [
				datosIngresos,
				// Aquí más datos...
			],
		},
		options: options,
	});

}
// gráfico de barras GRANDE

// grafico pastel BOTON
function grafico2_boton(inversion, ganancia, ganancias_esperada) {
	const $grafica2_boton = document.querySelector("#grafica2_boton");
	// Las etiquetas son las porciones de la gráfica
	const etiquetas = ["Valor invertido", "Total", "Ganancia esperada"];
	// Podemos tener varios conjuntos de datos. Comencemos con uno
	const datosIngresos = {
		data: [inversion, ganancia, ganancias_esperada], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
		// Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
		backgroundColor: [
			"rgb(255 150 0)", //Verde marino
			"rgb(0 183 105)", //Verde lima
			"rgb(25 123 155)", //Verde lima
		], // Color de fondo
		borderColor: [
			"rgb(255 150 0)", //Verde marino
			"rgb(0 183 105)", //Verde lima
			"rgb(25 123 155)", //Verde lima
		], // Color del borde
		hoverBackgroundColor: [
			"rgb(255 150 0 / 55%)", //Verde marino
			"rgb(0 183 105 / 55%)", //Verde lima
			"rgb(25 123 155 / 55%)", //Verde lima
		],
		hoverBorderColor: [
			"rgb(183 105 0)", //Verde marino
			"rgb(0 183 105)", //Verde lima
			"rgb(25 123 155)",
		],
		borderWidth: 2, // Ancho del borde
	};
	const options = {
		responsive: true,
		AspectRatio: false,
		title: {
			display: true,
			text: "Representación de las ganancias",
		},
	};
	new Chart($grafica2_boton, {
		type: "pie", // Tipo de gráfica. Puede ser dougnhut o pie
		data: {
			labels: etiquetas,
			datasets: [
				datosIngresos,
				// Aquí más datos...
			],
		},
		options: options,
	});
}
// grafico pastel BOTON

// GRafico pastel GRANDE
function grafica2_grande(inversion, ganancia, ganancias_esperada) {
	const $grafica2_grande = document.querySelector("#grafica2_grande");
	// Las etiquetas son las porciones de la gráfica
	const etiquetas = ["Valor invertido", "Total", "Ganancia esperada"];
	// Podemos tener varios conjuntos de datos. Comencemos con uno
	const datosIngresos = {
		data: [inversion, ganancia, ganancias_esperada], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
		// Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4

		backgroundColor: [
			"rgb(255 150 0)", //Verde marino
			"rgb(0 183 105)", //Verde lima
			"rgb(25 123 155)", //Verde lima
		], // Color de fondo
		borderColor: [
			"rgb(255 150 0)", //Verde marino
			"rgb(0 183 105)", //Verde lima
			"rgb(25 123 155)", //Verde lima
		], // Color del borde
		hoverBackgroundColor: [
			"rgb(255 150 0 / 55%)", //Verde marino
			"rgb(0 183 105 / 55%)", //Verde lima
			"rgb(25 123 155 / 55%)", //Verde lima
		],
		hoverBorderColor: [
			"rgb(183 105 0)", //Verde marino
			"rgb(0 183 105)", //Verde lima
			"rgb(25 123 155)",
		],
		borderWidth: 2, // Ancho del borde
	};
	const options = {
		responsive: true,
		AspectRatio: false,
		legend: {
            display: true,
            labels: {
                fontSize: 14, // Cambia el tamaño de la fuente de la leyenda aquí
                fontStyle: 'bold' // Puedes establecer otros estilos de fuente como 'normal', 'italic', etc.
            }
		},
		title: {
			display: true,
			text: "Representación de las ganancias",
		},
	};
	grafico2 = new Chart($grafica2_grande, {
		type: "pie", // Tipo de gráfica. Puede ser dougnhut o pie
		data: {
			labels: etiquetas,
			datasets: [
				datosIngresos,
				// Aquí más datos...
			],
		},
		options: options,
	});

}
// GRafico pastel GRANDE

// Obtener el botón y el modal
function openModal() {	
	
	var modal = document.getElementById("modal");

	modal.style.display = "block"; // muestra el modal
}

function closeModal() {
	var modal = document.getElementById("modal");

	modal.style.display = "none"; // oculta el modal
}

// Obtener el botón y el modal

// permite   ocultar y mostar un contenedor

function ocultarmostarelementos(validacion) {
	var elemento1 = document.getElementById("elemento1");
	var elemento2 = document.getElementById("elemento2");
	var elemento3 = document.getElementById("elemento3");
	var elemento4 = document.getElementById("elemento4");

	var elemento_registro = document.getElementById("elemento_registro");
	var elemento_login = document.getElementById("elemento_login");
var elemento_invitado = document.getElementById("elemento_invitado");

	if (validacion == "verelemento1") {
		if (elemento1 != null) {
			elemento1.style.display = "block";

			elemento2.style.display = "none";

			elemento3.style.display = "none";

			elemento4.style.display = "none";
		}
		if (elemento_registro != null) {
			elemento_registro.style.display = "none";
			elemento_login.style.display = "none";
elemento_invitado.style.display = "none";
		}
	} else if (validacion == "verelemento2") {
		if (elemento1 != null) {
			elemento1.style.display = "none";

			elemento2.style.display = "block";

			elemento3.style.display = "none";

			elemento4.style.display = "none";
		}

		if (elemento_registro != null) {
			elemento_registro.style.display = "none";
			elemento_login.style.display = "none";
elemento_invitado.style.display = "none";
		}
	} else if (validacion === "verelemento3") {
		if (elemento1 != null) {
			elemento1.style.display = "none";

			elemento2.style.display = "none";

			elemento3.style.display = "block";

			elemento4.style.display = "none";
		}

		if (elemento_registro != null) {
			elemento_registro.style.display = "none";
			elemento_login.style.display = "none";
elemento_invitado.style.display = "none";
		}
	} else if (validacion === "verelemento4") {
		if (elemento1 != null) {
			elemento1.style.display = "none";

			elemento2.style.display = "none";

			elemento3.style.display = "none";

			elemento4.style.display = "block";
		}

		if (elemento_registro != null) {
			elemento_registro.style.display = "none";
			elemento_login.style.display = "none";
elemento_invitado.style.display = "none";
		}
	} else if (validacion === "ver_elemento_registro") {
		if (elemento1 != null) {
			elemento1.style.display = "none";

			elemento2.style.display = "none";

			elemento3.style.display = "none";

			elemento4.style.display = "none";
		}
		if (elemento_registro != null) {
			elemento_registro.style.display = "block";
			elemento_login.style.display = "none";
elemento_invitado.style.display = "none";
		}
	} else if (validacion === "ver_elemento_login") {
		if (elemento1 != null) {
			elemento1.style.display = "none";

			elemento2.style.display = "none";

			elemento3.style.display = "none";

			elemento4.style.display = "none";
		}

		if (elemento_registro != null) {
			elemento_registro.style.display = "none";
			elemento_login.style.display = "block";
		elemento_invitado.style.display = "none";
		}
	}else if (validacion === "ver_elemento_invitado") {
		if (elemento1 != null) {
			elemento1.style.display = "none";

			elemento2.style.display = "none";

			elemento3.style.display = "none";

			elemento4.style.display = "none";
		}

		if (elemento_registro != null) {
			elemento_registro.style.display = "none";
			elemento_login.style.display = "none";
			elemento_invitado.style.display = "block";
		}
	}
}
// permite   ocultar y mostar un contenedor

//permite  seleccionar y colorear laselda con respecto ala semana seleccionada
/*
function colorRow(
				fecha0_1,
				fecha0_2,
				fecha0,
				fecha1,
				fecha2,
				fecha3,
				fecha4,
				fecha5,
				fecha6,
				fecha7,
				fecha8,
				fecha9,
				fecha10,
				fecha11,
				fecha12,
				fecha13) {
	// var boton= document.getElementById("resultado");

	if (
		fecha0_1 > 0 ||
		fecha0_2 > 0 ||
		fecha0 > 0 ||
		fecha1 > 0 ||
		fecha2 > 0 ||
		fecha3 > 0 ||
		fecha4 > 0 ||
		fecha5 > 0 ||
		fecha6 > 0 ||
		fecha7 > 0 ||
		fecha8 > 0 ||
		fecha9 > 0 ||
		fecha10 > 0 ||
		fecha11 > 0 ||
		fecha12 > 0 ||
		fecha13 > 0 
	) {
		let sema1 = document.getElementById("fecha_inicial_0");
		var table = document.getElementById("table1");

		if (table !== null) {
			//verifica si el elemento  existe en la pagina
			var rows = table.getElementsByTagName("tr");

			var contador2 = 0;
			var seman_1 = sema1.innerText;
			var sema = new Date(seman_1);
			sema.setDate(sema.getDate() + 1);
			
			var numero_semana = getWeekNumber(sema);

			selectedRow = rows[2];
			var cells = selectedRow.getElementsByTagName("td");
			//colocamos los numeros de la semanaen la fila 0 iniciando desde la columna 0
			for (var i = 0; i < 24; i++) {
				// selecciona la celd de forma automatica
				var contador = numero_semana + i;

				if (contador > 52) {
					contador2 = contador2 + 1;
					if (contador2<10) {
						var contenedor = document.createElement("div"); //crea contenedor
					var contenedor2 = document.createElement("div");
					contenedor.setAttribute("class", "tooltip-container"); // agrega clases al contenedor
					contenedor.id = "0" + contador2; // agrega elid al contenedor

					contenedor.innerText = "0" + contador2; // agrega texto

					contenedor2.setAttribute("class", "tooltip-content");
					contenedor2.innerText = "Semana 0" + contador2;

					cells[i].appendChild(contenedor); // agrega el contenedor  a la celda seleccionada
					contenedor.appendChild(contenedor2);
						
					}else if (contador2>9) {
						var contenedor = document.createElement("div"); //crea contenedor
					var contenedor2 = document.createElement("div");
					contenedor.setAttribute("class", "tooltip-container"); // agrega clases al contenedor
					contenedor.id =  contador2; // agrega elid al contenedor

					contenedor.innerText = contador2; // agrega texto

					contenedor2.setAttribute("class", "tooltip-content");
					contenedor2.innerText = "Semana" + contador2;

					cells[i].appendChild(contenedor); // agrega el contenedor  a la celda seleccionada
					contenedor.appendChild(contenedor2);
						
					}
					
				} else if (contador < 10) {
					var contenedor = document.createElement("div");
					var contenedor2 = document.createElement("div");
					contenedor.setAttribute("class", "tooltip-container");
					contenedor.innerText = numero_semana + i;
					contenedor.id = numero_semana + i;

					contenedor2.setAttribute("class", "tooltip-content");
					contenedor2.innerText = "Semana 0" + (numero_semana + i);

					cells[i].appendChild(contenedor);
					contenedor.appendChild(contenedor2);
				} else if (contador > 9 && contador < 53) {
					var contenedor = document.createElement("div");
					var contenedor2 = document.createElement("div");
					contenedor.setAttribute("class", "tooltip-container");
					contenedor.innerText = numero_semana + i;
					contenedor.id = numero_semana + i;
					contenedor2.setAttribute("class", "tooltip-content");
					contenedor2.innerText = "Semana " + (numero_semana + i);

					cells[i].appendChild(contenedor);
					contenedor.appendChild(contenedor2);
				}
			}

			//
			//dede aqui simplemente seleccionamos que fila se va a pintar y cuantas celldas se van a seleccionar
			// number se encarga  de seleccionar las filas

			for (var j = 3; j < 11; j++) {
				var contador4 = 0;
				var contador3 = 0;
				// cargamos el color de  las celdas seleccionadas con respecto a la primera semana  seleccionada del año

				for (var i1 = 0; i1 < 24; i1++) {
					 contador3 = i1 + fecha0_1;
					
					//como  apenas hay 52 semanas del año se reset con otra variable para seguir selecionando las colunas
					if (contador3 > 52) {
						//realiza una seleccion  con respecto a las semanasdelmes seleccionado
						console.log(contador3+"--"+fecha0_1+"----"+contador4 );
						contador4 = contador4 + 1;
						var celdai = document.getElementById("0" + contador4).innerText;

						var columi = parseInt(celdai); // selecciona lacolina de inicio
					} else if(contador3<53) {
						console.log(contador3+"--"+fecha0_1+"----"+contador4 );
						var celdai = document.getElementById(contador3).innerText;
						var columi = parseInt(celdai);
					}

					selectedRow = rows[j];
					var cells = selectedRow.getElementsByTagName("td");

					if (fecha0_1 <= columi && columi <= fecha0_2 && j == 3) {
						// se  valida la  semana de la fecha de inicio y la semana final y se compara con el rango de la colunas seleccionadas
						cells[i1].style.backgroundColor = "rgb(0 183 105)"; //agregamos color de fondo
						var contenedor = document.createElement("div");
						var contenedor2 = document.createElement("div");
						contenedor.setAttribute("class", "tooltip-container");
						//   contenedor.innerText="X";
						contenedor2.setAttribute("class", "tooltip-content");
						contenedor2.innerText =
							"Recolecta las muestras\n Preparalas \n Etiquetalas \n Envíalas al laboratorio \n Sigue las recomendaciones ";

						cells[i1].appendChild(contenedor);
						contenedor.appendChild(contenedor2);
					}
					if (fecha0 <= columi && columi <= fecha1 && j == 4) {
						cells[i1].style.backgroundColor = "rgb(0 183 105)";
						var contenedor = document.createElement("div");
						var contenedor2 = document.createElement("div");
						contenedor.setAttribute("class", "tooltip-container");
						//   contenedor.innerText="X";
						contenedor2.setAttribute("class", "tooltip-content");
						contenedor2.innerText =
							" Eliminar malezas,\nArado\n Nivelación \n Fertilización \n Enmendamiento del suelo";

						cells[i1].appendChild(contenedor);
						contenedor.appendChild(contenedor2);
					} else if (fecha2 <= columi && columi <= fecha3 && j == 5) {
						cells[i1].style.backgroundColor = "rgb(131, 166, 3)";

						var contenedor = document.createElement("div");
						var contenedor2 = document.createElement("div");
						contenedor.setAttribute("class", "tooltip-container");
						//   contenedor.innerText="X";
						contenedor2.setAttribute("class", "tooltip-content");
						contenedor2.innerText =
							" El tiempo depende de: \n Tipo de sistema elegido, Tipo de terreno, Disponibilidad de agua \n Experiencia de los instaladores";

						cells[i1].appendChild(contenedor);
						contenedor.appendChild(contenedor2);
					} else if (fecha4 <= columi && columi <= fecha5 && j == 6) {
						cells[i1].style.backgroundColor = "rgb(255 150 0)";

						var contenedor = document.createElement("div");
						var contenedor2 = document.createElement("div");
						contenedor.setAttribute("class", "tooltip-container");
						//   contenedor.innerText="X";
						contenedor2.setAttribute("class", "tooltip-content");
						contenedor2.innerText =
							" La semilla debe estar en buen estado y sin impurezas, esto reduce la probabilidad de que la semilla se dañe o contamine con enfermedades o plagas. ";

						cells[i1].appendChild(contenedor);
						contenedor.appendChild(contenedor2);
					} else if (fecha6 <= columi && columi <= fecha7 && j == 7) {
						cells[i1].style.backgroundColor = "rgb(70, 89, 2)";

						var contenedor = document.createElement("div");
						var contenedor2 = document.createElement("div");
						contenedor.setAttribute("class", "tooltip-container");
						//   contenedor.innerText="X";
						contenedor2.setAttribute("class", "tooltip-content");
						contenedor2.innerText =
							"El maíz necesita nutrientes para crecer y desarrollarse correctamente. \n se recomienda aplicar abono orgánico o químico para proporcionar a la panta los nutrientes necesarios.";

						cells[i1].appendChild(contenedor);
						contenedor.appendChild(contenedor2);
					} else if (fecha8 <= columi && columi <= fecha9 && j == 8) {
						cells[i1].style.backgroundColor = "rgb(140, 28, 3)";

						var contenedor = document.createElement("div");
						var contenedor2 = document.createElement("div");
						contenedor.setAttribute("class", "tooltip-container");
						//   contenedor.innerText="X";
						contenedor2.setAttribute("class", "tooltip-content");
						contenedor2.innerText =
							"El maíz es vulnerable a ciertas plagas y susceptible a enfermedades que pueden afectar su crecimiento y producción; por lo que es importante monitorear las plantas para detectar cualquier signo de enfermedad o plagas y aplicar los tratamientos adecuados.";

						cells[i1].appendChild(contenedor);
						contenedor.appendChild(contenedor2);
					} else if (fecha10 <= columi && columi <= fecha11 && j == 9) {
						cells[i1].style.backgroundColor = "red";

						var contenedor = document.createElement("div");
						var contenedor2 = document.createElement("div");
						contenedor.setAttribute("class", "tooltip-container");
						//   contenedor.innerText="X";
						contenedor2.setAttribute("class", "tooltip-content");
						contenedor2.innerText =
							"Observa el color y la textura de las hojas y mazorcas, así como el contenido de humedad y la madurez del grano. Esto te ayudará a determinar el momento óptimo para la cosecha.";

						cells[i1].appendChild(contenedor);
						contenedor.appendChild(contenedor2);
					} else if (fecha12 <= columi && columi <= fecha13 && j == 10) {
						cells[i1].style.backgroundColor = "yellow";

						var contenedor = document.createElement("div");
						var contenedor2 = document.createElement("div");
						contenedor.setAttribute("class", "tooltip-container");
						//   contenedor.innerText="X";
						contenedor2.setAttribute("class", "tooltip-content");
						contenedor2.innerText =
							"1. Selección \n 2. Limpieza\n 3. Clasificación\n 4. Empaque\n 5. Almacenamiento";

						cells[i1].appendChild(contenedor);
						contenedor.appendChild(contenedor2);
					} 
					// cells[i1].style.backgroundColor = "yellow";
				}
			}
		}
	}
}*/
function colorRow(
	fecha0_1,
	fecha0_2,
	fecha0,
	fecha1,
	fecha2,
	fecha3,
	fecha4,
	fecha5,
	fecha6,
	fecha7,
	fecha8,
	fecha9,
	fecha10,
	fecha11,
	fecha12,
	fecha13) {
// var boton= document.getElementById("resultado");

if (
fecha0_1 > 0 ||
fecha0_2 > 0 ||
fecha0 > 0 ||
fecha1 > 0 ||
fecha2 > 0 ||
fecha3 > 0 ||
fecha4 > 0 ||
fecha5 > 0 ||
fecha6 > 0 ||
fecha7 > 0 ||
fecha8 > 0 ||
fecha9 > 0 ||
fecha10 > 0 ||
fecha11 > 0 ||
fecha12 > 0 ||
fecha13 > 0 
) {
let sema1 = document.getElementById("fecha_inicial_0");
var table = document.getElementById("table1");

if (table !== null) {
//verifica si el elemento  existe en la pagina
var rows = table.getElementsByTagName("tr");

var contador2 = 0;
var seman_1 = sema1.innerText;
var sema = new Date(seman_1);
sema.setDate(sema.getDate() + 1);

var numero_semana = getWeekNumber(sema);

selectedRow = rows[2];
var cells = selectedRow.getElementsByTagName("td");
//colocamos los numeros de la semanaen la fila 0 iniciando desde la columna 0
for (var i = 0; i < 24; i++) {
	// selecciona la celd de forma automatica
	var contador = numero_semana + i;

	if (contador > 52) {
		contador2 = contador2 + 1;if (contador2<10) {
			var contenedor = document.createElement("div"); //crea contenedor
		var contenedor2 = document.createElement("div");
		contenedor.setAttribute("class", "tooltip-container"); // agrega clases al contenedor
		contenedor.id = "0" + contador2; // agrega elid al contenedor

		contenedor.innerText = "0" + contador2; // agrega texto

		contenedor2.setAttribute("class", "tooltip-content");
		contenedor2.innerText = "Semana 0" + contador2;

		cells[i].appendChild(contenedor); // agrega el contenedor  a la celda seleccionada
		contenedor.appendChild(contenedor2);
			
		}else if (contador2>9) {
			var contenedor = document.createElement("div"); //crea contenedor
		var contenedor2 = document.createElement("div");
		contenedor.setAttribute("class", "tooltip-container"); // agrega clases al contenedor
		contenedor.id =  contador2; // agrega elid al contenedor

		contenedor.innerText = contador2; // agrega texto

		contenedor2.setAttribute("class", "tooltip-content");
		contenedor2.innerText = "Semana" + contador2;

		cells[i].appendChild(contenedor); // agrega el contenedor  a la celda seleccionada
		contenedor.appendChild(contenedor2);
			
		}
	} else if (contador < 10) {
		var contenedor = document.createElement("div");
		var contenedor2 = document.createElement("div");
		contenedor.setAttribute("class", "tooltip-container");
		contenedor.innerText = numero_semana + i;
		contenedor.id = numero_semana + i;

		contenedor2.setAttribute("class", "tooltip-content");
		contenedor2.innerText = "Semana 0" + (numero_semana + i);

		cells[i].appendChild(contenedor);
		contenedor.appendChild(contenedor2);
	} else if (contador > 9 && contador < 53) {
		var contenedor = document.createElement("div");
		var contenedor2 = document.createElement("div");
		contenedor.setAttribute("class", "tooltip-container");
		contenedor.innerText = numero_semana + i;
		contenedor.id = numero_semana + i;
		contenedor2.setAttribute("class", "tooltip-content");
		contenedor2.innerText = "Semana " + (numero_semana + i);

		cells[i].appendChild(contenedor);
		contenedor.appendChild(contenedor2);
	}
}

//
//dede aqui simplemente seleccionamos que fila se va a pintar y cuantas celldas se van a seleccionar
// number se encarga  de seleccionar las filas

for (var j = 3; j < 11; j++) {
	var contador4 = 0;
	var contador3 = 0;
	// cargamos el color de  las celdas seleccionadas con respecto a la primera semana  seleccionada del año
	console.log("---------------------nueva fila----------------------------------")
	for (var i1 = 0; i1 < 24; i1++) {
		 contador3 = i1 + fecha0_1;
		
		//como  apenas hay 52 semanas del año se reset con otra variable para seguir selecionando las colunas
		if (contador3 > 52) {
			if (contador4<9) {
				//realiza una seleccion  con respecto a las semanasdelmes seleccionado
			//console.log(contador3+">52--"+fecha0_1+"---- 0"+contador4 );
			contador4 = contador4 + 1;
			var celdai = document.getElementById("0" + contador4).innerText;
			}else if (contador4>9) {
				
				//realiza una seleccion  con respecto a las semanasdelmes seleccionado
			//console.log(contador3+">52--"+fecha0_1+"---- "+contador4 );
			contador4 = contador4 + 1;
			var celdai = document.getElementById( contador4).innerText;
			}
			

			var columi = parseInt(celdai); // selecciona lacolina de inicio
		} else if(contador3<52) {
			//console.log(contador3+"<52--"+fecha0_1+"----"+contador4 );
			var celdai = document.getElementById(contador3).innerText;
			var columi = parseInt(celdai);
		}

		selectedRow = rows[j];
		var cells = selectedRow.getElementsByTagName("td");
		//'console.log('fecha0 &"<="& columi &"&&"& columi &"<="& fecha1 && j' )
		//'console.log(fecha0 +"<="+ columi +"&&"+ columi +"<="+ fecha1 +"--"+ j )
		//'console.log(fecha0_1 +"<="+ columi +"&&"+ columi +"<="+ fecha0_2 +"--"+ j )
		

		
			if ((fecha0_1 <= columi && columi <= fecha0_2) && j == 3) {
				
				// se  valida la  semana de la fecha de inicio y la semana final y se compara con el rango de la colunas seleccionadas
				cells[i1].style.backgroundColor = "rgb(0 183 105)"; //agregamos color de fondo
				var contenedor = document.createElement("div");
				var contenedor2 = document.createElement("div");
				contenedor.setAttribute("class", "tooltip-container");
				//   contenedor.innerText="X";
				contenedor2.setAttribute("class", "tooltip-content");
				contenedor2.innerText =
					"Recolecta las muestras\n Preparalas \n Etiquetalas \n Envíalas al laboratorio \n Sigue las recomendaciones ";
	
				cells[i1].appendChild(contenedor);
				contenedor.appendChild(contenedor2);
			}

			if (fecha0 <= columi && columi <= fecha1 && j == 4) {
				cells[i1].style.backgroundColor = "rgb(0 183 105)";
				var contenedor = document.createElement("div");
				var contenedor2 = document.createElement("div");
				contenedor.setAttribute("class", "tooltip-container");
				//   contenedor.innerText="X";
				contenedor2.setAttribute("class", "tooltip-content");
				contenedor2.innerText =
					" Eliminar malezas,\nArado\n Nivelación \n Fertilización \n Enmendamiento del suelo";

				cells[i1].appendChild(contenedor);
				contenedor.appendChild(contenedor2);
			} else if (fecha2 <= columi && columi <= fecha3 && j == 5) {
				cells[i1].style.backgroundColor = "rgb(131, 166, 3)";

				var contenedor = document.createElement("div");
				var contenedor2 = document.createElement("div");
				contenedor.setAttribute("class", "tooltip-container");
				//   contenedor.innerText="X";
				contenedor2.setAttribute("class", "tooltip-content");
				contenedor2.innerText =
					" El tiempo depende de: \n Tipo de sistema elegido, Tipo de terreno, Disponibilidad de agua \n Experiencia de los instaladores";

				cells[i1].appendChild(contenedor);
				contenedor.appendChild(contenedor2);
			} else if (fecha4 <= columi && columi <= fecha5 && j == 6) {
				cells[i1].style.backgroundColor = "rgb(255 150 0)";

				var contenedor = document.createElement("div");
				var contenedor2 = document.createElement("div");
				contenedor.setAttribute("class", "tooltip-container");
				//   contenedor.innerText="X";
				contenedor2.setAttribute("class", "tooltip-content");
				contenedor2.innerText =
					" La semilla debe estar en buen estado y sin impurezas, esto reduce la probabilidad de que la semilla se dañe o contamine con enfermedades o plagas. ";

				cells[i1].appendChild(contenedor);
				contenedor.appendChild(contenedor2);
			} else if (fecha6 <= columi && columi <= fecha7 && j == 7) {
				cells[i1].style.backgroundColor = "rgb(70, 89, 2)";

				var contenedor = document.createElement("div");
				var contenedor2 = document.createElement("div");
				contenedor.setAttribute("class", "tooltip-container");
				//   contenedor.innerText="X";
				contenedor2.setAttribute("class", "tooltip-content");
				contenedor2.innerText =
					"El maíz necesita nutrientes para crecer y desarrollarse correctamente. \n se recomienda aplicar abono orgánico o químico para proporcionar a la panta los nutrientes necesarios.";

				cells[i1].appendChild(contenedor);
				contenedor.appendChild(contenedor2);
			} else if (fecha8 <= columi && columi <= fecha9 && j == 8) {
				cells[i1].style.backgroundColor = "rgb(140, 28, 3)";

				var contenedor = document.createElement("div");
				var contenedor2 = document.createElement("div");
				contenedor.setAttribute("class", "tooltip-container");
				//   contenedor.innerText="X";
				contenedor2.setAttribute("class", "tooltip-content");
				contenedor2.innerText =
					"El maíz es vulnerable a ciertas plagas y susceptible a enfermedades que pueden afectar su crecimiento y producción; por lo que es importante monitorear las plantas para detectar cualquier signo de enfermedad o plagas y aplicar los tratamientos adecuados.";

				cells[i1].appendChild(contenedor);
				contenedor.appendChild(contenedor2);
			} else if (fecha10 <= columi && columi <= fecha11 && j == 9) {
				cells[i1].style.backgroundColor = "red";

				var contenedor = document.createElement("div");
				var contenedor2 = document.createElement("div");
				contenedor.setAttribute("class", "tooltip-container");
				//   contenedor.innerText="X";
				contenedor2.setAttribute("class", "tooltip-content");
				contenedor2.innerText =
					"Observa el color y la textura de las hojas y mazorcas, así como el contenido de humedad y la madurez del grano. Esto te ayudará a determinar el momento óptimo para la cosecha.";

				cells[i1].appendChild(contenedor);
				contenedor.appendChild(contenedor2);
			} else if (fecha12 <= columi && columi <= fecha13 && j == 10) {
				cells[i1].style.backgroundColor = "yellow";

				var contenedor = document.createElement("div");
				var contenedor2 = document.createElement("div");
				contenedor.setAttribute("class", "tooltip-container");
				//   contenedor.innerText="X";
				contenedor2.setAttribute("class", "tooltip-content");
				contenedor2.innerText =
					"1. Selección \n 2. Limpieza\n 3. Clasificación\n 4. Empaque\n 5. Almacenamiento";

				cells[i1].appendChild(contenedor);
				contenedor.appendChild(contenedor2);
			} 

/*
if (fecha0 <= columi && columi <= fecha1 && columi >= 28 && j == 4) {
console.log('fecha0 <= columi && columi <= 52 && columi >= 28'+ j )	

console.log(fecha0 +"<=" +columi +"&&"+ columi +"<="+ 52 +"&&"+ columi +">="+ 28+ "--"+j )	

cells[i1].style.backgroundColor = "rgb(0 183 105)";
var contenedor = document.createElement("div");
var contenedor2 = document.createElement("div");
contenedor.setAttribute("class", "tooltip-container");
//   contenedor.innerText="X";
contenedor2.setAttribute("class", "tooltip-content");
contenedor2.innerText =
" Eliminar malezas,\nArado\n Nivelación \n Fertilización \n Enmendamiento del suelo";

cells[i1].appendChild(contenedor);
contenedor.appendChild(contenedor2);
}else { 
if (fecha0 <= columi && columi <= 52 && columi >= 28 && fecha1<28&&j == 4) {
	console.log('fecha0 <= columi && columi <= 52 && columi >= 28'+ j )	

	console.log(fecha0 +"<=" +columi +"&&"+ columi +"<="+ 52 +"&&"+ columi +">="+ 28+ "--"+j )	

	cells[i1].style.backgroundColor = "rgb(0 183 105)";
	var contenedor = document.createElement("div");
	var contenedor2 = document.createElement("div");
	contenedor.setAttribute("class", "tooltip-container");
	//   contenedor.innerText="X";
	contenedor2.setAttribute("class", "tooltip-content");
	contenedor2.innerText =
		" Eliminar malezas,\nArado\n Nivelación \n Fertilización \n Enmendamiento del suelo";

	cells[i1].appendChild(contenedor);
	contenedor.appendChild(contenedor2);
	}else if ( columi>=0&&columi<fecha1 && fecha1 <= 27 && j == 4) {
	console.log('1 >= columi && columi <= fecha1 && columi <= 27' + j )	

	console.log("1<=" +columi +"&&"+ fecha1 +"<="+ columi +"&&"+j )	

	cells[i1].style.backgroundColor = "rgb(0 183 105)";
	var contenedor = document.createElement("div");
	var contenedor2 = document.createElement("div");
	contenedor.setAttribute("class", "tooltip-container");
	//   contenedor.innerText="X";
	contenedor2.setAttribute("class", "tooltip-content");
	contenedor2.innerText =
		" Eliminar malezas,\nArado\n Nivelación \n Fertilización \n Enmendamiento del suelo";

	cells[i1].appendChild(contenedor);
	contenedor.appendChild(contenedor2);
	
} else{}
}

if (fecha2 <= columi && columi <= fecha3 && columi >= 28 && j == 5) {
cells[i1].style.backgroundColor = "rgb(131, 155, 3)";

var contenedor = document.createElement("div");
var contenedor2 = document.createElement("div");
contenedor.setAttribute("class", "tooltip-container");
//   contenedor.innerText="X";
contenedor2.setAttribute("class", "tooltip-content");
contenedor2.innerText =
" El tiempo depende de: \n Tipo de sistema elegido, Tipo de terreno, Disponibilidad de agua \n Experiencia de los instaladores";

cells[i1].appendChild(contenedor);
contenedor.appendChild(contenedor2);
}else { 
if (fecha2 <= columi && columi <= 52 && columi >= 28 && fecha3<28&&j == 5) {
cells[i1].style.backgroundColor = "rgb(131, 155, 3)";

var contenedor = document.createElement("div");
var contenedor2 = document.createElement("div");
contenedor.setAttribute("class", "tooltip-container");
//   contenedor.innerText="X";
contenedor2.setAttribute("class", "tooltip-content");
contenedor2.innerText =
" El tiempo depende de: \n Tipo de sistema elegido, Tipo de terreno, Disponibilidad de agua \n Experiencia de los instaladores";

cells[i1].appendChild(contenedor);
contenedor.appendChild(contenedor2);
}else if ( columi>=1&&columi<fecha3 && fecha3 <= 27 && j == 5) {
cells[i1].style.backgroundColor = "rgb(131, 155, 3)";

var contenedor = document.createElement("div");
var contenedor2 = document.createElement("div");
contenedor.setAttribute("class", "tooltip-container");
//   contenedor.innerText="X";
contenedor2.setAttribute("class", "tooltip-content");
contenedor2.innerText =
	" El tiempo depende de: \n Tipo de sistema elegido, Tipo de terreno, Disponibilidad de agua \n Experiencia de los instaladores";

cells[i1].appendChild(contenedor);
contenedor.appendChild(contenedor2);

} else{}
}
	

	

	
	if (fecha4 <= columi && columi <= fecha5 && columi >= 28 && j == 6) {
		cells[i1].style.backgroundColor = "rgb(266 160 0)";
	
		var contenedor = document.createElement("div");
		var contenedor2 = document.createElement("div");
		contenedor.setAttribute("class", "tooltip-container");
		//   contenedor.innerText="X";
		contenedor2.setAttribute("class", "tooltip-content");
		contenedor2.innerText =
			" La semilla debe estar en buen estado y sin impurezas, esto reduce la probabilidad de que la semilla se dañe o contamine con enfermedades o plagas. ";
	
		cells[i1].appendChild(contenedor);
		contenedor.appendChild(contenedor2);
	}else { 
	if (fecha4 <= columi && columi <= 52 && columi >= 28 && fecha5<28&&j == 6) {
		cells[i1].style.backgroundColor = "rgb(266 160 0)";
	
		var contenedor = document.createElement("div");
		var contenedor2 = document.createElement("div");
		contenedor.setAttribute("class", "tooltip-container");
		//   contenedor.innerText="X";
		contenedor2.setAttribute("class", "tooltip-content");
		contenedor2.innerText =
			" La semilla debe estar en buen estado y sin impurezas, esto reduce la probabilidad de que la semilla se dañe o contamine con enfermedades o plagas. ";
	
		cells[i1].appendChild(contenedor);
		contenedor.appendChild(contenedor2);
	}else if ( columi>=0&&columi<fecha5 && fecha5 <= 27 && j == 6) {
		cells[i1].style.backgroundColor = "rgb(266 160 0)";
	
		var contenedor = document.createElement("div");
		var contenedor2 = document.createElement("div");
		contenedor.setAttribute("class", "tooltip-container");
		//   contenedor.innerText="X";
		contenedor2.setAttribute("class", "tooltip-content");
		contenedor2.innerText =
			" La semilla debe estar en buen estado y sin impurezas, esto reduce la probabilidad de que la semilla se dañe o contamine con enfermedades o plagas. ";
	
		cells[i1].appendChild(contenedor);
		contenedor.appendChild(contenedor2);
	} else{}
	}
	
	if (fecha6 <= columi && columi <= fecha7 && columi >= 28 && j == 7) {
		cells[i1].style.backgroundColor = "rgb(70, 89, 2)";
		
		var contenedor = document.createElement("div");
		var contenedor2 = document.createElement("div");
		contenedor.setAttribute("class", "tooltip-container");
		//   contenedor.innerText="X";
		contenedor2.setAttribute("class", "tooltip-content");
		contenedor2.innerText =
			"El maíz necesita nutrientes para crecer y desarrollarse correctamente. \n se recomienda aplicar abono orgánico o químico para proporcionar a la panta los nutrientes necesarios.";
	
		cells[i1].appendChild(contenedor);
		contenedor.appendChild(contenedor2);
	}else { 
	
	if (fecha6 <= columi && columi <= 52 && columi >= 28 && fecha7<28&&j == 7) {
		cells[i1].style.backgroundColor = "rgb(70, 89, 2)";
		
		var contenedor = document.createElement("div");
		var contenedor2 = document.createElement("div");
		contenedor.setAttribute("class", "tooltip-container");
		//   contenedor.innerText="X";
		contenedor2.setAttribute("class", "tooltip-content");
		contenedor2.innerText =
			"El maíz necesita nutrientes para crecer y desarrollarse correctamente. \n se recomienda aplicar abono orgánico o químico para proporcionar a la panta los nutrientes necesarios.";
	
		cells[i1].appendChild(contenedor);
		contenedor.appendChild(contenedor2);
	}else if ( columi>=0&&columi<fecha7 && fecha7 <= 27 && j == 7) {
		cells[i1].style.backgroundColor = "rgb(70, 89, 2)";
		
		var contenedor = document.createElement("div");
		var contenedor2 = document.createElement("div");
		contenedor.setAttribute("class", "tooltip-container");
		//   contenedor.innerText="X";
		contenedor2.setAttribute("class", "tooltip-content");
		contenedor2.innerText =
			"El maíz necesita nutrientes para crecer y desarrollarse correctamente. \n se recomienda aplicar abono orgánico o químico para proporcionar a la panta los nutrientes necesarios.";
	
		cells[i1].appendChild(contenedor);
		contenedor.appendChild(contenedor2);
	} else{}
	}
	
	if (fecha8 <= columi && columi <= fecha9 && columi >= 28 && j == 8) {
		cells[i1].style.backgroundColor = "rgb(140, 28, 3)";
	
		var contenedor = document.createElement("div");
		var contenedor2 = document.createElement("div");
		contenedor.setAttribute("class", "tooltip-container");
		//   contenedor.innerText="X";
		contenedor2.setAttribute("class", "tooltip-content");
		contenedor2.innerText =
			"El maíz es vulnerable a ciertas plagas y susceptible a enfermedades que pueden afectar su crecimiento y producción; por lo que es importante monitorear las plantas para detectar cualquier signo de enfermedad o plagas y aplicar los tratamientos adecuados.";
	
		cells[i1].appendChild(contenedor);
		contenedor.appendChild(contenedor2);
	}else { 
	if (fecha8 <= columi && columi <= 52 && columi >= 28 && fecha9<28&&j == 8) {
		cells[i1].style.backgroundColor = "rgb(140, 28, 3)";
	
		var contenedor = document.createElement("div");
		var contenedor2 = document.createElement("div");
		contenedor.setAttribute("class", "tooltip-container");
		//   contenedor.innerText="X";
		contenedor2.setAttribute("class", "tooltip-content");
		contenedor2.innerText =
			"El maíz es vulnerable a ciertas plagas y susceptible a enfermedades que pueden afectar su crecimiento y producción; por lo que es importante monitorear las plantas para detectar cualquier signo de enfermedad o plagas y aplicar los tratamientos adecuados.";
	
		cells[i1].appendChild(contenedor);
		contenedor.appendChild(contenedor2);
	}else if ( columi>=0&&columi<fecha9 && fecha9 <= 27 && j == 8) {
		cells[i1].style.backgroundColor = "rgb(140, 28, 3)";
	
		var contenedor = document.createElement("div");
		var contenedor2 = document.createElement("div");
		contenedor.setAttribute("class", "tooltip-container");
		//   contenedor.innerText="X";
		contenedor2.setAttribute("class", "tooltip-content");
		contenedor2.innerText =
			"El maíz es vulnerable a ciertas plagas y susceptible a enfermedades que pueden afectar su crecimiento y producción; por lo que es importante monitorear las plantas para detectar cualquier signo de enfermedad o plagas y aplicar los tratamientos adecuados.";
	
		cells[i1].appendChild(contenedor);
		contenedor.appendChild(contenedor2);
	} else{}
	}
	
	if (fecha10 <= columi && columi <= fecha11 && columi >= 28 && j == 9) {
		cells[i1].style.backgroundColor = "red";
	
		var contenedor = document.createElement("div");
		var contenedor2 = document.createElement("div");
		contenedor.setAttribute("class", "tooltip-container");
		//   contenedor.innerText="X";
		contenedor2.setAttribute("class", "tooltip-content");
		contenedor2.innerText =
			"Observa el color y la textura de las hojas y mazorcas, así como el contenido de humedad y la madurez del grano. Esto te ayudará a determinar el momento óptimo para la cosecha.";
	
		cells[i1].appendChild(contenedor);
		contenedor.appendChild(contenedor2);
	}else { 
	
	if (fecha10 <= columi && columi <= 52 && columi >= 28 && fecha11<28&&j == 8) {
		cells[i1].style.backgroundColor = "red";
	
		var contenedor = document.createElement("div");
		var contenedor2 = document.createElement("div");
		contenedor.setAttribute("class", "tooltip-container");
		//   contenedor.innerText="X";
		contenedor2.setAttribute("class", "tooltip-content");
		contenedor2.innerText =
			"Observa el color y la textura de las hojas y mazorcas, así como el contenido de humedad y la madurez del grano. Esto te ayudará a determinar el momento óptimo para la cosecha.";
	
		cells[i1].appendChild(contenedor);
		contenedor.appendChild(contenedor2);
	}else if ( columi>=0&&columi<fecha11 && fecha11 <= 27 && j == 8) {
		cells[i1].style.backgroundColor = "red";
	
		var contenedor = document.createElement("div");
		var contenedor2 = document.createElement("div");
		contenedor.setAttribute("class", "tooltip-container");
		//   contenedor.innerText="X";
		contenedor2.setAttribute("class", "tooltip-content");
		contenedor2.innerText =
			"Observa el color y la textura de las hojas y mazorcas, así como el contenido de humedad y la madurez del grano. Esto te ayudará a determinar el momento óptimo para la cosecha.";
	
		cells[i1].appendChild(contenedor);
		contenedor.appendChild(contenedor2);
	} else{}
	}
	
	if (fecha12 <= columi && columi <= fecha13 && columi >= 28 && j == 10) {
		cells[i1].style.backgroundColor = "yellow";
	
		var contenedor = document.createElement("div");
		var contenedor2 = document.createElement("div");
		contenedor.setAttribute("class", "tooltip-container");
		//   contenedor.innerText="X";
		contenedor2.setAttribute("class", "tooltip-content");
		contenedor2.innerText =
			"1. Selección \n 2. Limpieza\n 3. Clasificación\n 4. Empaque\n 5. Almacenamiento";
	
		cells[i1].appendChild(contenedor);
		contenedor.appendChild(contenedor2);
	}else { 
	
	if (fecha12 <= columi && columi <= 52 && columi >= 28 && fecha13<28&&j == 10) {
		cells[i1].style.backgroundColor = "yellow";
	
		var contenedor = document.createElement("div");
		var contenedor2 = document.createElement("div");
		contenedor.setAttribute("class", "tooltip-container");
		//   contenedor.innerText="X";
		contenedor2.setAttribute("class", "tooltip-content");
		contenedor2.innerText =
			"1. Selección \n 2. Limpieza\n 3. Clasificación\n 4. Empaque\n 5. Almacenamiento";
	
		cells[i1].appendChild(contenedor);
		contenedor.appendChild(contenedor2);
	}else if ( columi>=0&&columi<fecha13 && fecha13 <= 27 && j == 10) {
		cells[i1].style.backgroundColor = "yellow";
	
		var contenedor = document.createElement("div");
		var contenedor2 = document.createElement("div");
		contenedor.setAttribute("class", "tooltip-container");
		//   contenedor.innerText="X";
		contenedor2.setAttribute("class", "tooltip-content");
		contenedor2.innerText =
			"1. Selección \n 2. Limpieza\n 3. Clasificación\n 4. Empaque\n 5. Almacenamiento";
	
		cells[i1].appendChild(contenedor);
		contenedor.appendChild(contenedor2);
	} 
		else{}
	}					
			
	 
*/			 
		/*	if (fecha6 <= columi && columi <= fecha7 && j == 7) {
				cells[i1].style.backgroundColor = "rgb(70, 89, 2)";
	
				var contenedor = document.createElement("div");
				var contenedor2 = document.createElement("div");
				contenedor.setAttribute("class", "tooltip-container");
				//   contenedor.innerText="X";
				contenedor2.setAttribute("class", "tooltip-content");
				contenedor2.innerText =
					"El maíz necesita nutrientes para crecer y desarrollarse correctamente. \n se recomienda aplicar abono orgánico o químico para proporcionar a la panta los nutrientes necesarios.";
	
				cells[i1].appendChild(contenedor);
				contenedor.appendChild(contenedor2);
			} 
			if (fecha8 <= columi && columi <= fecha9 && j == 8) {
				cells[i1].style.backgroundColor = "rgb(140, 28, 3)";
	
				var contenedor = document.createElement("div");
				var contenedor2 = document.createElement("div");
				contenedor.setAttribute("class", "tooltip-container");
				//   contenedor.innerText="X";
				contenedor2.setAttribute("class", "tooltip-content");
				contenedor2.innerText =
					"El maíz es vulnerable a ciertas plagas y susceptible a enfermedades que pueden afectar su crecimiento y producción; por lo que es importante monitorear las plantas para detectar cualquier signo de enfermedad o plagas y aplicar los tratamientos adecuados.";
	
				cells[i1].appendChild(contenedor);
				contenedor.appendChild(contenedor2);
			}
			if (fecha10 <= columi && columi <= fecha11 && j == 9) {
				cells[i1].style.backgroundColor = "red";
	
				var contenedor = document.createElement("div");
				var contenedor2 = document.createElement("div");
				contenedor.setAttribute("class", "tooltip-container");
				//   contenedor.innerText="X";
				contenedor2.setAttribute("class", "tooltip-content");
				contenedor2.innerText =
					"Observa el color y la textura de las hojas y mazorcas, así como el contenido de humedad y la madurez del grano. Esto te ayudará a determinar el momento óptimo para la cosecha.";
	
				cells[i1].appendChild(contenedor);
				contenedor.appendChild(contenedor2);
			} 
			if (fecha12 <= columi && columi <= fecha13 && j == 10) {
				cells[i1].style.backgroundColor = "yellow";
	
				var contenedor = document.createElement("div");
				var contenedor2 = document.createElement("div");
				contenedor.setAttribute("class", "tooltip-container");
				//   contenedor.innerText="X";
				contenedor2.setAttribute("class", "tooltip-content");
				contenedor2.innerText =
					"1. Selección \n 2. Limpieza\n 3. Clasificación\n 4. Empaque\n 5. Almacenamiento";
	
				cells[i1].appendChild(contenedor);
				contenedor.appendChild(contenedor2);
			} 
				*/

		
		// cells[i1].style.backgroundColor = "yellow";
	}
}
}
}
}
//permite  seleccionar y colorear laselda con respecto ala semana seleccionada



// funcion para ingresar correo y contraseña para guardar datos
function guardar_correo() {
	(async () => {
		const { value: formValues } = await Swal.fire({
			title:
				"<h5>" +
				"Ingresa los siguientes datos" +
				"</h5>",
			html:

				'<input id="nombres_usuario"	type="text"	value="" class="cswal2-input" placeholder="Ingresa  Nombre"/><br><br>' +

				'<input id="apellidos_usuario" type="text" class="cswal2-input "placeholder="Ingresa Apellido"/><br><br>' +

				'<input id="correo_usuario" type="email" class="cswal2-input" placeholder="Ingresa tu dirección de correo electrónico"/><br><br>' +

				'<input id="psw_usuario" type="password" class="cswal2-input"placeholder="Ingresa tu contraseña" />',
			focusConfirm: false,
			showLoaderOnConfirm: true,
			preConfirm: () => {

				const nombres_usuario = document.getElementById("nombres_usuario").value;
				const apellidos_usuario = document.getElementById("apellidos_usuario").value;
				const correo_usuario = document.getElementById("correo_usuario").value;
				const psw_usuario = document.getElementById("psw_usuario").value;

				if (!correo_usuario || !nombres_usuario || !apellidos_usuario || !psw_usuario) {
					Swal.showValidationMessage(
						"Por favor ingresa tanto un correo electrónico como una contraseña"
					);
					return false;
				}
				if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo_usuario)) {
					Swal.showValidationMessage(
						"Por favor ingresa un correo electrónico válido"
					);
					return false;
				}
				return [correo_usuario, nombres_usuario, apellidos_usuario, psw_usuario];
			},
		});

		if (formValues) {
			var nombre_u = document.getElementById("name_user").innerText;
			const valida_opcion = "actualizar";
			const [correo_usuario, nombres_usuario, apellidos_usuario, psw_usuario] = formValues;
			const formData = new FormData();
			formData.append("nombres", nombres_usuario);
			formData.append("apellidos", apellidos_usuario);
			formData.append("correo", correo_usuario);
			formData.append("psw", psw_usuario);
			formData.append("valida_opcion", valida_opcion);
			formData.append("nombre_u", nombre_u);

			// Realizar una petición Fetch para enviar los datos al servidor
			fetch("../assets/php/registro_usuario.php", {
				method: "POST",
				body: formData,
			})
				.then((response) => response.text())
				.then((data) => {
					console.log(data); // respuesta_valor_maiz del servidor (opcional)
					if (data == 1) {
						Swal.fire({
							icon: "success",
							title: "Usuario creado con éxito",
							html:
								"Usuario: " + correo_usuario + "<br> Contraseña: " + psw_usuario,
							showClass: {
								popup: "animate__animated animate__fadeInDown",
							},
							hideClass: {
								popup: "animate__animated animate__fadeOutUp",
							},
						});
					} else if (data == 2) {
						Swal.fire({
							icon: "error",
							title: "El ya usuario existe",
							html: "Por favor inicie sesión con su usuario y contraseña",
							showClass: {
								popup: "animate__animated animate__fadeInDown",
							},
							hideClass: {
								popup: "animate__animated animate__fadeOutUp",
							},
						});
					} else if (data == 3) {


						const timeout = setTimeout(() => {
							console.log("El tiempo ha terminado");
							window.location.href = "../pages/paso1.html";
						}, 2000); // 5000 ms = 5 segundos

						// Validar si el tiempo ha terminado
						if (timeout) {
							var tipo = "success";
							var titulo = correo_usuario + "Your data has been saved!";
							var texto = "";
							alertas(tipo, titulo, texto);
						}
					}
				})
				.catch((error) => {
					console.error("Error:", error);
				});


		}
	})();
}
function alertas(tipo, titulo, texto) {
	Swal.fire({
		type: tipo,
		title: "<h4>" + titulo + "</h4>",
		text: texto,
		position: "top-center",
		icon: "success",
		showConfirmButton: false,
		timer: 1500,
	});
}
// funcion para ingresar correo y contraseña para guardar datos



function compararFechas() {
	const condicion = document.getElementById("boton_t");
	const fecha1 = new Date(document.getElementById("fecha_inicio").value);
	const fecha2 = new Date(document.getElementById("fecha_final").value);
	var pagina = document.getElementById("boton_t").value; //permite selecccionar la pagina

	if (
		pagina === "paso2" ||
		pagina === "paso3" ||
		pagina === "paso4" ||
		pagina === "paso5" ||
		pagina === "paso6" ||
		pagina === "paso7" ||
		pagina === "paso8"
	) {
		
	compararfechainicio();
	}
	console.log(fecha1);
	console.log(fecha2);

	if (fecha1 <= fecha2) {
		condicion.disabled = false;
	} else if (fecha1 > fecha2) {
		condicion.disabled = true;
	}
}

// comparar lasfechas de inicio
function compararfechainicio() {
	const fecha_2 = document.getElementById("fecha_inicio");

	const fecha1 = new Date(document.getElementById("fecha_pagina1").innerText);
	const fecha2 = new Date(document.getElementById("fecha_inicio").value);
	console.log(fecha1);
	console.log(fecha2);

	if (fecha1 <= fecha2) {
		fecha_2.style.backgroundColor = "#d4e8d8";
	} else if (fecha1 > fecha2) {
		fecha_2.style.backgroundColor = "#ffbcb5";
	}
}

$('#btnImprimir').on('click', function(event) {
	
   
  });