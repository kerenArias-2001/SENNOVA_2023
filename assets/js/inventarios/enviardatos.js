// 1 Funciones relacionadas a la pagina paso1.html

function enviarDatosAlquilar() {
	var nombre_u = document.getElementById("name_user").innerText;
	// Obtener el valor del campo de entrada de datos
	const nombre = document.getElementById("productNameAlquiler").value;
	const tipo_transaccion = document.getElementById("transactionType").value;
	const cantidad = document.getElementById("quantityAlquiler").value;
	const precio = document.getElementById("pricePerUnitAlquiler").value;
	const tiempo = document.getElementById("rentalTime").value;
	const tiempo1 = document.getElementById("rentalTime1").value;
	const unidad = tiempo + " " + tiempo1;

	var error5 = document.getElementById("error5");
	var error6 = document.getElementById("error6");
	var error7 = document.getElementById("error7");
	var error8 = document.getElementById("error8");
	var mensaje_error = "Este campo está vacío ⚠️";
	var color = "red";

	if (nombre == "" || cantidad == "" || precio == "" || tiempo == "") {
		if (nombre == "") {
			error5.innerHTML = mensaje_error;
			error5.style.color = color;
		} else if (cantidad == "") {
			error6.innerHTML = mensaje_error;
			error6.style.color = color;
		} else if (precio == "") {
			error7.innerHTML = mensaje_error;
			error7.style.color = color;
		} else if (tiempo == "") {
			error8.innerHTML = mensaje_error;
			error8.style.color = color;
		}

		setTimeout(function () {
			error5.innerText = "";
			error6.innerText = "";
			error7.innerText = "";
			error8.innerText = "";
		}, 5000);
	} else {
		const hectarea = (document.getElementById("hectareas").value = 0);
		const condicion = (document.getElementById("boton_t").value = 0);
		var pagina = 0;
		// Crear un objeto FormData y agregar el dato
		const formData = new FormData();
		formData.append("nombre", nombre);
		formData.append("tipo_transaccion", tipo_transaccion);
		formData.append("nombre_u", nombre_u);
		formData.append("tiempo", unidad);
		formData.append("precio", precio);
		formData.append("cantidad", cantidad);
		formData.append("condicion", condicion);
		formData.append("hectareas", hectarea);

		formData.append("pagina", pagina);

		// Realizar una petición Fetch para enviar los datos al servidor
		fetch("../assets/php/guardar.php", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.text())
			.then((data) => {
				//console.log(data); // respuesta_valor_maiz del servidor (opcional)
				console.log("ya guardo");
				setTimeout(function () {
					document.getElementById("productNameAlquiler").value = "";
					document.getElementById("quantityAlquiler").value = "";
					document.getElementById("pricePerUnitAlquiler").value = "";
					document.getElementById("rentalTime").value = "";
				}, 500);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
}
function enviarDatosComprar() {
	var nombre_u = document.getElementById("name_user").innerText;
	// Obtener el valor del campo de entrada de datos
	const nombre_c = document.getElementById("productNameComprar").value;
	const cantidad_c = document.getElementById("quantityComprar").value;
	const precio_c = document.getElementById("pricePerUnitComprar").value;
	const tipo_transaccion = document.getElementById("transactionType").value;
	const tiempo1 = document.getElementById("rentalTime_1").value;
	const unidad = tiempo1;
	var error9 = document.getElementById("error9");
	var error10 = document.getElementById("error10");
	var error11 = document.getElementById("error11");
	var mensaje_error = "Este campo está vacío ⚠️";
	var color = "red";

	if (nombre_c == "" || cantidad_c == "" || precio_c == "") {
		if (nombre_c == "") {
			error9.innerHTML = mensaje_error;
			error9.style.color = color;
		} else if (cantidad_c == "") {
			error10.innerHTML = mensaje_error;
			error10.style.color = color;
		} else if (precio_c == "") {
			error11.innerHTML = mensaje_error;
			error11.style.color = color;
		}

		setTimeout(function () {
			error9.innerText = "";
			error10.innerText = "";
			error11.innerText = "";
		}, 5000);
	} else {
		const hectarea = (document.getElementById("hectareas").value = 0);
		const condicion = (document.getElementById("boton_t").value = 0);

		var pagina = 0;

		// Crear un objeto FormData y agregar el dato
		const formData = new FormData();
		formData.append("nombre_c", nombre_c);
		formData.append("tipo_transaccion", tipo_transaccion);
		formData.append("nombre_u", nombre_u);
		formData.append("tiempo", unidad);
		formData.append("precio_c", precio_c);
		formData.append("tiempo", unidad);
		formData.append("cantidad_c", cantidad_c);
		formData.append("condicion", condicion);
		formData.append("hectareas", hectarea);
		formData.append("pagina", pagina);

		// Realizar una petición Fetch para enviar los datos al servidor
		fetch("../assets/php/guardar.php", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.text())
			.then((data) => {
				console.log(data); // respuesta_valor_maiz del servidor (opcional)

				setTimeout(function () {
					document.getElementById("productNameComprar").value = "";
					document.getElementById("quantityComprar").value = "";
					document.getElementById("pricePerUnitComprar").value = "";
				}, 500);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
}
// 1--------------Fin paso1.html  -----------------------------------

// 2 Funciones relacionadas a la pagina paso2.html

function PreparacionAlquilar() {
	var nombre_u = document.getElementById("name_user").innerText;
	// Obtener el valor  del campo de entrada de datos
	const nombre = document.getElementById("productNameAlquiler").value;
	const tipo_transaccion = document.getElementById("transactionType").value;
	const cantidad = document.getElementById("quantityAlquiler").value;
	const precio = document.getElementById("pricePerUnitAlquiler").value;

	const tiempo = document.getElementById("rentalTime").value;
	const tiempo1 = document.getElementById("rentalTime1").value;
	const unidad = tiempo + " " + tiempo1;
	var error3 = document.getElementById("error3");
	var error4 = document.getElementById("error4");
	var error5 = document.getElementById("error5");
	var error6 = document.getElementById("error6");
	var mensaje_error = "Este campo está vacío ⚠️";
	var color = "red";

	if (nombre == "" || cantidad == "" || precio == "" || tiempo == "") {
		if (nombre == "") {
			error3.innerHTML = mensaje_error;
			error3.style.color = color;
		} else if (cantidad == "") {
			error4.innerHTML = mensaje_error;
			error4.style.color = color;
		} else if (precio == "") {
			error5.innerHTML = mensaje_error;
			error5.style.color = color;
		} else if (tiempo == "") {
			error6.innerHTML = mensaje_error;
			error6.style.color = color;
		}

		setTimeout(function () {
			error3.innerText = "";
			error4.innerText = "";
			error5.innerText = "";
			error6.innerText = "";
		}, 3000);
	} else {
		const hectarea = 0;
		const condicion = 0;
		const pagina = 0;
		// Crear un objeto FormData y agregar el dato
		const formData = new FormData();
		formData.append("nombre", nombre);
		formData.append("tipo_transaccion", tipo_transaccion);
		formData.append("nombre_u", nombre_u);
		formData.append("tiempo", unidad);
		formData.append("precio", precio);
		formData.append("cantidad", cantidad);
		formData.append("condicion", condicion);
		formData.append("hectareas", hectarea);
		formData.append("pagina", pagina);

		// Realizar una petición Fetch para enviar los datos al servidor
		fetch("../assets/php/guardar.php", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.text())
			.then((data) => {
				console.log(data); // respuesta_valor_maiz del servidor (opcional)

				setTimeout(function () {
					document.getElementById("productNameAlquiler").value = "";
					document.getElementById("quantityAlquiler").value = "";
					document.getElementById("pricePerUnitAlquiler").value = "";
					document.getElementById("rentalTime").value = "";
				}, 500);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
}
function PreparacionComprar() {
	var nombre_u = document.getElementById("name_user").innerText;
	// Obtener el valor del campo de entrada de datos
	const nombre_c = document.getElementById("productNameComprar").value;
	const cantidad_c = document.getElementById("quantityComprar").value;
	const precio_c = document.getElementById("pricePerUnitComprar").value;

	var error7 = document.getElementById("error7");

	var error8 = document.getElementById("error8");
	const tiempo1 = document.getElementById("rentalTime_1").value;
	const unidad = tiempo1;
	var error9 = document.getElementById("error9");
	var mensaje_error = "Este campo está vacío ⚠️";
	var color = "red";

	if (nombre_c == "" || cantidad_c == "" || precio_c == "") {
		if (nombre_c == "") {
			error7.innerHTML = mensaje_error;
			error7.style.color = color;
		} else if (cantidad_c == "") {
			error8.innerHTML = mensaje_error;
			error8.style.color = color;
		} else if (precio_c == "") {
			error9.innerHTML = mensaje_error;
			error9.style.color = color;
		}

		setTimeout(function () {
			error7.innerText = "";
			error8.innerText = "";
			error9.innerText = "";
		}, 3000);
	} else {
		const hectarea = 0;
		const condicion = 0;

		const tipo_transaccion = document.getElementById("transactionType").value;

		const pagina = 0;
		// Crear un objeto FormData y agregar el dato
		const formData = new FormData();
		formData.append("nombre_c", nombre_c);
		formData.append("tipo_transaccion", tipo_transaccion);
		formData.append("nombre_u", nombre_u);
		formData.append("tiempo", unidad);
		formData.append("precio_c", precio_c);
		formData.append("cantidad_c", cantidad_c);
		formData.append("condicion", condicion);
		formData.append("hectareas", hectarea);
		formData.append("pagina", pagina);

		// Realizar una petición Fetch para enviar los datos al servidor
		fetch("../assets/php/guardar.php", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.text())
			.then((data) => {
				console.log(data); // respuesta_valor_maiz del servidor (opcional)

				setTimeout(function () {
					document.getElementById("productNameComprar").value = "";
					document.getElementById("quantityComprar").value = "";
					document.getElementById("pricePerUnitComprar").value = "";
				}, 500);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
}
//tabla preparacion del terreno
// 2--------------Fin paso2.html  -----------------------------------

// 3 Funciones relacionadas a la pagina paso3.html
function enviar_Semilla() {
	var nombre_u = document.getElementById("name_user").innerText;
	// Obtener el valor del campo de entrada de datos
	const tipo_transaccion = document.getElementById("siembra").value;
	const nombre = document.getElementById("pricePerUnitnombre").value;
	const precio = document.getElementById("pricePerUnitAlquiler").value;
	const distaci_semilla = document.getElementById("distancia_semilla").value;
	const distaci_surco = document.getElementById("distancia_surco").value;
	const vender = document.getElementById("preciovender").value;

	var error3 = document.getElementById("error3");
	var error4 = document.getElementById("error4");
	var mensaje_error = "Este campo está vacío ⚠️";
	var color = "red";

	if (
		nombre == "" ||
		precio == "" ||
		distaci_semilla == "" ||
		distaci_surco == ""
	) {
		if (nombre == "") {
			error3.innerHTML = mensaje_error;
			error3.style.color = color;
		} else if (precio == "") {
			error4.innerHTML = mensaje_error;
			error4.style.color = color;
		} else if (distaci_semilla == "") {
			error4.innerHTML = mensaje_error;
			error4.style.color = color;
		} else if (distaci_surco == "") {
			error4.innerHTML = mensaje_error;
			error4.style.color = color;
		}

		setTimeout(function () {
			error3.innerText = "";
			error4.innerText = "";
		}, 3000);
	} else {
		const hectarea = 0;
		const condicion = 0;

		// Crear un objeto FormData y agregar el dato
		const formData = new FormData();
		formData.append("tipo_transaccion", tipo_transaccion);
		formData.append("nombre_u", nombre_u);
		formData.append("nombre", nombre);
		formData.append("precio", precio);
		formData.append("condicion", condicion);
		formData.append("hectareas", hectarea);
		formData.append("distancia_semillas", distaci_semilla);
		formData.append("distancia_surcos", distaci_surco);
		formData.append("precio_vender", vender);

		// Realizar una petición Fetch para enviar los datos al servidor
		fetch("../assets/php/guardar.php", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.text())
			.then((data) => {
				console.log(data); // respuesta_valor_maiz del servidor (opcional)

				setTimeout(function () {
					document.getElementById("pricePerUnitnombre").value = "";
					document.getElementById("pricePerUnitAlquiler").value = "";
				}, 500);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
}
// 3--------------Fin paso3.html  -----------------------------------

// 4 Funciones relacionadas a la pagina paso4.html

function fertilizacion_Alquilar() {
	var nombre_u = document.getElementById("name_user").innerText;
	// Obtener el valor del campo de entrada de datos
	const nombre = document.getElementById("productNameAlquiler").value;
	const tipo_transaccion = document.getElementById("transactionType").value;
	const cantidad = document.getElementById("quantityAlquiler").value;
	const precio = document.getElementById("pricePerUnitAlquiler").value;

	const tiempo = document.getElementById("rentalTime").value;
	const tiempo1 = document.getElementById("rentalTime1").value;
	const unidad = tiempo + " " + tiempo1;
	var error3 = document.getElementById("error3");
	var error4 = document.getElementById("error4");
	var error5 = document.getElementById("error5");
	var error6 = document.getElementById("error6");
	var mensaje_error = "Este campo está vacío ⚠️";
	var color = "red";

	if (nombre == "" || cantidad == "" || precio == "" || tiempo == "") {
		if (nombre == "") {
			error3.innerHTML = mensaje_error;
			error3.style.color = color;
		} else if (cantidad == "") {
			error4.innerHTML = mensaje_error;
			error4.style.color = color;
		} else if (precio == "") {
			error5.innerHTML = mensaje_error;
			error5.style.color = color;
		} else if (tiempo == "") {
			error6.innerHTML = mensaje_error;
			error6.style.color = color;
		}

		setTimeout(function () {
			error3.innerText = "";
			error4.innerText = "";
			error5.innerText = "";
			error6.innerText = "";
		}, 3000);
	} else {
		const hectarea = 0;
		const condicion = 0;
		// Crear un objeto FormData y agregar el dato
		const formData = new FormData();
		formData.append("nombre", nombre);
		formData.append("tipo_transaccion", tipo_transaccion);
		formData.append("nombre_u", nombre_u);
		formData.append("tiempo", unidad);
		formData.append("precio", precio);
		formData.append("cantidad", cantidad);
		formData.append("condicion", condicion);
		formData.append("hectareas", hectarea);

		// Realizar una petición Fetch para enviar los datos al servidor
		fetch("../assets/php/guardar.php", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.text())
			.then((data) => {
				console.log(data); // respuesta_valor_maiz del servidor (opcional)

				setTimeout(function () {
					document.getElementById("productNameAlquiler").value = "";
					document.getElementById("quantityAlquiler").value = "";
					document.getElementById("pricePerUnitAlquiler").value = "";
					document.getElementById("rentalTime").value = "";
				}, 500);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
}
function fertilizacion_Comprar() {
	var nombre_u = document.getElementById("name_user").innerText;
	// Obtener el valor del campo de entrada de datos
	const nombre_c = document.getElementById("productNameComprar").value;
	const cantidad_c = document.getElementById("quantityComprar").value;
	const precio_c = document.getElementById("pricePerUnitComprar").value;
	const hectarea = 0;
	const condicion = 0;
	const tiempo1 = document.getElementById("rentalTime_1").value;
	const unidad = tiempo1;
	var error7 = document.getElementById("error7");

	var error8 = document.getElementById("error8");

	var error9 = document.getElementById("error9");
	var mensaje_error = "Este campo está vacío ⚠️";
	var color = "red";

	if (nombre_c == "" || cantidad_c == "" || precio_c == "") {
		if (nombre_c == "") {
			error7.innerHTML = mensaje_error;
			error7.style.color = color;
		} else if (cantidad_c == "") {
			error8.innerHTML = mensaje_error;
			error8.style.color = color;
		} else if (precio_c == "") {
			error9.innerHTML = mensaje_error;
			error9.style.color = color;
		}

		setTimeout(function () {
			error7.innerText = "";
			error8.innerText = "";
			error9.innerText = "";
		}, 3000);
	} else {
		const tipo_transaccion = document.getElementById("transactionType").value;

		// Crear un objeto FormData y agregar el dato
		const formData = new FormData();
		formData.append("nombre_c", nombre_c);
		formData.append("tipo_transaccion", tipo_transaccion);
		formData.append("nombre_u", nombre_u);
		formData.append("tiempo", unidad);
		formData.append("precio_c", precio_c);
		formData.append("cantidad_c", cantidad_c);
		formData.append("condicion", condicion);
		formData.append("hectareas", hectarea);

		// Realizar una petición Fetch para enviar los datos al servidor
		fetch("../assets/php/guardar.php", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.text())
			.then((data) => {
				console.log(data); // respuesta_valor_maiz del servidor (opcional)

				setTimeout(function () {
					document.getElementById("productNameComprar").value = "";
					document.getElementById("quantityComprar").value = "";
					document.getElementById("pricePerUnitComprar").value = "";
				}, 500);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
}
// tabla proceso de fertilizacion
// 4--------------Fin paso4.html  -----------------------------------

// 5 Funciones relacionadas a la pagina paso5.html

function Cosecha_Alquilar() {
	var nombre_u = document.getElementById("name_user").innerText;

	// Obtener el valor del campo de entrada de datos
	const nombre = document.getElementById("productNameAlquiler").value;
	const tipo_transaccion = document.getElementById("transactionType").value;
	const cantidad = document.getElementById("quantityAlquiler").value;
	const precio = document.getElementById("pricePerUnitAlquiler").value;

	const tiempo = document.getElementById("rentalTime").value;
	const tiempo1 = document.getElementById("rentalTime1").value;
	const unidad = tiempo + " " + tiempo1;
	var error3 = document.getElementById("error3");
	var error4 = document.getElementById("error4");
	var error5 = document.getElementById("error5");
	var error6 = document.getElementById("error6");
	var mensaje_error = "Este campo está vacío ⚠️";
	var color = "red";

	if (nombre == "" || cantidad == "" || precio == "" || tiempo == "") {
		if (nombre == "") {
			error3.innerHTML = mensaje_error;
			error3.style.color = color;
		} else if (cantidad == "") {
			error4.innerHTML = mensaje_error;
			error4.style.color = color;
		} else if (precio == "") {
			error5.innerHTML = mensaje_error;
			error5.style.color = color;
		} else if (tiempo == "") {
			error6.innerHTML = mensaje_error;
			error6.style.color = color;
		}

		setTimeout(function () {
			error3.innerText = "";
			error4.innerText = "";
			error5.innerText = "";
			error6.innerText = "";
		}, 3000);
	} else {
		const pagina = 0;
		const hectarea = 0;
		const condicion = 0;
		// Crear un objeto FormData y agregar el dato
		const formData = new FormData();
		formData.append("nombre", nombre);
		formData.append("tipo_transaccion", tipo_transaccion);
		formData.append("nombre_u", nombre_u);
		formData.append("tiempo", unidad);
		formData.append("precio", precio);
		formData.append("cantidad", cantidad);
		formData.append("condicion", condicion);
		formData.append("hectareas", hectarea);
		formData.append("pagina", pagina);

		// Realizar una petición Fetch para enviar los datos al servidor
		fetch("../assets/php/guardar.php", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.text())
			.then((data) => {
				console.log(data); // respuesta_valor_maiz del servidor (opcional)
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
}
function Cosecha_Comprar() {
	var nombre_u = document.getElementById("name_user").innerText;
	// Obtener el valor del campo de entrada de datos
	const nombre_c = document.getElementById("productNameComprar").value;
	const cantidad_c = document.getElementById("quantityComprar").value;
	const precio_c = document.getElementById("pricePerUnitComprar").value;
	const tiempo1 = document.getElementById("rentalTime_1").value;

	var error7 = document.getElementById("error7");

	var error8 = document.getElementById("error8");

	var error9 = document.getElementById("error9");
	var mensaje_error = "Este campo está vacío ⚠️";
	var color = "red";

	if (nombre_c == "" || cantidad_c == "" || precio_c == "") {
		if (nombre_c == "") {
			error7.innerHTML = mensaje_error;
			error7.style.color = color;
		} else if (cantidad_c == "") {
			error8.innerHTML = mensaje_error;
			error8.style.color = color;
		} else if (precio_c == "") {
			error9.innerHTML = mensaje_error;
			error9.style.color = color;
		}

		setTimeout(function () {
			error7.innerText = "";
			error8.innerText = "";
			error9.innerText = "";
		}, 3000);
	} else {
		const unidad = tiempo1;
		const hectarea = 0;
		const condicion = 0;
		const pagina = 0;

		const tipo_transaccion = document.getElementById("transactionType").value;

		// Crear un objeto FormData y agregar el dato
		const formData = new FormData();
		formData.append("nombre_c", nombre_c);
		formData.append("tipo_transaccion", tipo_transaccion);
		formData.append("nombre_u", nombre_u);
		formData.append("tiempo", unidad);
		formData.append("precio_c", precio_c);
		formData.append("cantidad_c", cantidad_c);
		formData.append("condicion", condicion);
		formData.append("hectareas", hectarea);
		formData.append("pagina", pagina);

		// Realizar una petición Fetch para enviar los datos al servidor
		fetch("../assets/php/guardar.php", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.text())
			.then((data) => {
				console.log(data); // respuesta_valor_maiz del servidor (opcional)
				setTimeout(function () {
					document.getElementById("productNameComprar").value = "";
					document.getElementById("quantityComprar").value = "";
					document.getElementById("pricePerUnitComprar").value = "";
				}, 500);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
}
// tabla proceso de cosecha
// 5--------------Fin paso5.html  -----------------------------------

// 5 Funciones relacionadas a la pagina paso6.html

function Pos_Cosecha_Alquilar() {
	var nombre_u = document.getElementById("name_user").innerText;
	// Obtener el valor del campo de entrada de datos
	const nombre = document.getElementById("productNameAlquiler").value;
	const tipo_transaccion = document.getElementById("transactionType").value;
	const cantidad = document.getElementById("quantityAlquiler").value;
	const precio = document.getElementById("pricePerUnitAlquiler").value;

	const tiempo = document.getElementById("rentalTime").value;
	const tiempo1 = document.getElementById("rentalTime1").value;
	const unidad = tiempo + " " + tiempo1;
	const hectarea = 0;
	const condicion = 0;
	var pagina = 0;

	var error4 = document.getElementById("error4");
	var error5 = document.getElementById("error5");
	var error6 = document.getElementById("error6");
	var error7 = document.getElementById("error7");
	var mensaje_error = "Este campo está vacío ⚠️";
	var color = "red";

	if (nombre == "" || cantidad == "" || precio == "" || tiempo == "") {
		if (nombre == "") {
			error4.innerHTML = mensaje_error;
			error4.style.color = color;
		} else if (cantidad == "") {
			error5.innerHTML = mensaje_error;
			error5.style.color = color;
		} else if (precio == "") {
			error6.innerHTML = mensaje_error;
			error6.style.color = color;
		} else if (tiempo == "") {
			error7.innerHTML = mensaje_error;
			error7.style.color = color;
		}

		setTimeout(function () {
			error4.innerText = "";
			error5.innerText = "";
			error6.innerText = "";
			error7.innerText = "";
		}, 3000);
	} else {
		// Crear un objeto FormData y agregar el dato
		const formData = new FormData();
		formData.append("nombre", nombre);
		formData.append("tipo_transaccion", tipo_transaccion);
		formData.append("nombre_u", nombre_u);
		formData.append("tiempo", unidad);
		formData.append("precio", precio);
		formData.append("cantidad", cantidad);
		formData.append("condicion", condicion);
		formData.append("hectareas", hectarea);
		formData.append("pagina", pagina);

		// Realizar una petición Fetch para enviar los datos al servidor
		fetch("../assets/php/guardar.php", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.text())
			.then((data) => {
				console.log(data); // respuesta_valor_maiz del servidor (opcional)
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
}
function Pos_Cosecha_Comprar() {
	var nombre_u = document.getElementById("name_user").innerText;

	// Obtener el valor del campo de entrada de datos
	const nombre_c = document.getElementById("productNameComprar").value;
	const cantidad_c = document.getElementById("quantityComprar").value;
	const precio_c = document.getElementById("pricePerUnitComprar").value;

	const tiempo1 = document.getElementById("rentalTime_1").value;
	const unidad = tiempo1;
	const hectarea = 0;
	const condicion = 0;

	const tipo_transaccion = document.getElementById("transactionType").value;
	var error7 = document.getElementById("error7");

	var error8 = document.getElementById("error8");

	var error9 = document.getElementById("error9");
	var mensaje_error = "Este campo está vacío ⚠️";
	var color = "red";

	if (nombre_c == "" || cantidad_c == "" || precio_c == "") {
		if (nombre_c == "") {
			error7.innerHTML = mensaje_error;
			error7.style.color = color;
		} else if (cantidad_c == "") {
			error8.innerHTML = mensaje_error;
			error8.style.color = color;
		} else if (precio_c == "") {
			error9.innerHTML = mensaje_error;
			error9.style.color = color;
		}

		setTimeout(function () {
			error7.innerText = "";
			error8.innerText = "";
			error9.innerText = "";
		}, 3000);
	} else {
		var pagina = 0;
		// Crear un objeto FormData y agregar el dato
		const formData = new FormData();
		formData.append("nombre_c", nombre_c);
		formData.append("tipo_transaccion", tipo_transaccion);
		formData.append("nombre_u", nombre_u);
		formData.append("tiempo", unidad);
		formData.append("precio_c", precio_c);
		formData.append("cantidad_c", cantidad_c);
		formData.append("condicion", condicion);
		formData.append("hectareas", hectarea);
		formData.append("pagina", pagina);

		// Realizar una petición Fetch para enviar los datos al servidor
		fetch("../assets/php/guardar.php", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.text())
			.then((data) => {
				console.log(data); // respuesta_valor_maiz del servidor (opcional)
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
}
// tabla proceso de pos - cosecha
// 6--------------Fin paso6.html  -----------------------------------

// 7 Funciones relacionadas a la pagina paso6.html

function comercializar_Alquilar() {
	var nombre_u = document.getElementById("name_user").innerText;

	// Obtener el valor del campo de entrada de datos
	const nombre = document.getElementById("productNameAlquiler").value;
	const tipo_transaccion = document.getElementById("transactionType").value;
	const cantidad = document.getElementById("quantityAlquiler").value;
	const precio = document.getElementById("pricePerUnitAlquiler").value;

	const tiempo = document.getElementById("rentalTime").value;
	const tiempo1 = document.getElementById("rentalTime1").value;
	const unidad = tiempo + " " + tiempo1;
	var error4 = document.getElementById("error4");
	var error5 = document.getElementById("error5");
	var error6 = document.getElementById("error6");
	var error7 = document.getElementById("error7");
	var mensaje_error = "Este campo está vacío ⚠️";
	var color = "red";

	if (nombre == "" || cantidad == "" || precio == "" || tiempo == "") {
		if (nombre == "") {
			error4.innerHTML = mensaje_error;
			error4.style.color = color;
		} else if (cantidad == "") {
			error5.innerHTML = mensaje_error;
			error5.style.color = color;
		} else if (precio == "") {
			error6.innerHTML = mensaje_error;
			error6.style.color = color;
		} else if (tiempo == "") {
			error7.innerHTML = mensaje_error;
			error7.style.color = color;
		}

		setTimeout(function () {
			error4.innerText = "";
			error5.innerText = "";
			error6.innerText = "";
			error7.innerText = "";
		}, 3000);
	} else {
		const hectarea = 0;
		const condicion = 0;
		// Crear un objeto FormData y agregar el dato
		const formData = new FormData();
		formData.append("nombre", nombre);
		formData.append("tipo_transaccion", tipo_transaccion);
		formData.append("nombre_u", nombre_u);
		formData.append("tiempo", unidad);
		formData.append("precio", precio);
		formData.append("cantidad", cantidad);
		formData.append("condicion", condicion);
		formData.append("hectareas", hectarea);

		// Realizar una petición Fetch para enviar los datos al servidor
		fetch("../assets/php/guardar.php", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.text())
			.then((data) => {
				console.log(data); // respuesta_valor_maiz del servidor (opcional)

				setTimeout(function () {
					document.getElementById("productNameAlquiler").value = "";
					document.getElementById("quantityAlquiler").value = "";
					document.getElementById("pricePerUnitAlquiler").value = "";
					document.getElementById("rentalTime").value = "";
				}, 500);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
}
function comercializar_Comprar() {
	// Obtener el valor del campo de entrada de datos
	const nombre_c = document.getElementById("productNameComprar").value;
	const cantidad_c = document.getElementById("quantityComprar").value;
	const precio_c = document.getElementById("pricePerUnitComprar").value;

	var nombre_u = document.getElementById("name_user").innerText;
	var error8 = document.getElementById("error8");
	const tiempo1 = document.getElementById("rentalTime_1").value;
	const unidad = tiempo1;
	var error9 = document.getElementById("error9");
	var error10 = document.getElementById("error10");
	var mensaje_error = "Este campo está vacío ⚠️";
	var color = "red";

	if (nombre_c == "" || cantidad_c == "" || precio_c == "") {
		if (nombre_c == "") {
			error8.innerHTML = mensaje_error;
			error8.style.color = color;
		} else if (cantidad_c == "") {
			error9.innerHTML = mensaje_error;
			error9.style.color = color;
		} else if (precio_c == "") {
			error10.innerHTML = mensaje_error;
			error10.style.color = color;
		}

		setTimeout(function () {
			error8.innerText = "";
			error9.innerText = "";
			error10.innerText = "";
		}, 3000);
	} else {
		const pagina = 0;
		const hectarea = 0;
		const condicion = 0;

		const tipo_transaccion = document.getElementById("transactionType").value;

		// Crear un objeto FormData y agregar el dato
		const formData = new FormData();
		formData.append("nombre_c", nombre_c);
		formData.append("tipo_transaccion", tipo_transaccion);
		formData.append("nombre_u", nombre_u);
		formData.append("tiempo", unidad);
		formData.append("precio_c", precio_c);
		formData.append("cantidad_c", cantidad_c);
		formData.append("condicion", condicion);
		formData.append("hectareas", hectarea);
		formData.append("pagina", pagina);

		// Realizar una petición Fetch para enviar los datos al servidor
		fetch("../assets/php/guardar.php", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.text())
			.then((data) => {
				console.log(data); // respuesta_valor_maiz del servidor (opcional)

				setTimeout(function () {
					document.getElementById("productNameComprar").value = "";
					document.getElementById("quantityComprar").value = "";
					document.getElementById("pricePerUnitComprar").value = "";
				}, 500);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
}
// tabla proceso de pos - cosecha
// 7--------------Fin paso6.html  -----------------------------------

// 3 Funciones relacionadas a la pagina paso3.html

function riego_Alquilar() {
	var nombre_u = document.getElementById("name_user").innerText;
	// Obtener el valor del campo de entrada de datos
	const nombre = document.getElementById("productNameAlquiler").value;
	const tipo_transaccion = document.getElementById("transactionType").value;
	const cantidad = document.getElementById("quantityAlquiler").value;
	const precio = document.getElementById("pricePerUnitAlquiler").value;

	const tiempo = document.getElementById("rentalTime").value;
	const tiempo1 = document.getElementById("rentalTime1").value;
	const unidad = tiempo + " " + tiempo1;
	var error3 = document.getElementById("error3");
	var error4 = document.getElementById("error4");
	var error5 = document.getElementById("error5");
	var error6 = document.getElementById("error6");
	var mensaje_error = "Este campo está vacío ⚠️";
	var color = "red";

	if (nombre == "" || cantidad == "" || precio == "" || tiempo == "") {
		if (nombre == "") {
			error3.innerHTML = mensaje_error;
			error3.style.color = color;
		} else if (cantidad == "") {
			error4.innerHTML = mensaje_error;
			error4.style.color = color;
		} else if (precio == "") {
			error5.innerHTML = mensaje_error;
			error5.style.color = color;
		} else if (tiempo == "") {
			error6.innerHTML = mensaje_error;
			error6.style.color = color;
		}

		setTimeout(function () {
			error3.innerText = "";
			error4.innerText = "";
			error5.innerText = "";
			error6.innerText = "";
		}, 3000);
	} else {
		const hectarea = 0;
		const condicion = 0;
		// Crear un objeto FormData y agregar el dato
		const formData = new FormData();
		formData.append("nombre", nombre);
		formData.append("tipo_transaccion", tipo_transaccion);
		formData.append("nombre_u", nombre_u);
		formData.append("tiempo", unidad);
		formData.append("precio", precio);
		formData.append("cantidad", cantidad);
		formData.append("condicion", condicion);
		formData.append("hectareas", hectarea);

		// Realizar una petición Fetch para enviar los datos al servidor
		fetch("../assets/php/guardar.php", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.text())
			.then((data) => {
				console.log(data); // respuesta_valor_maiz del servidor (opcional)

				setTimeout(function () {
					document.getElementById("productNameAlquiler").value = "";
					document.getElementById("quantityAlquiler").value = "";
					document.getElementById("pricePerUnitAlquiler").value = "";
					document.getElementById("rentalTime").value = "";
				}, 500);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
}
function riego_Comprar() {
	var nombre_u = document.getElementById("name_user").innerText;
	// Obtener el valor del campo de entrada de datos
	const nombre_c = document.getElementById("productNameComprar").value;
	const cantidad_c = document.getElementById("quantityComprar").value;
	const precio_c = document.getElementById("pricePerUnitComprar").value;
	var error7 = document.getElementById("error7");

	var error8 = document.getElementById("error8");
	const tiempo1 = document.getElementById("rentalTime_1").value;
	const unidad = tiempo1;
	var error9 = document.getElementById("error9");
	var mensaje_error = "Este campo está vacío ⚠️";
	var color = "red";

	if (nombre_c == "" || cantidad_c == "" || precio_c == "") {
		if (nombre_c == "") {
			error7.innerHTML = mensaje_error;
			error7.style.color = color;
		} else if (cantidad_c == "") {
			error8.innerHTML = mensaje_error;
			error8.style.color = color;
		} else if (precio_c == "") {
			error9.innerHTML = mensaje_error;
			error9.style.color = color;
		}

		setTimeout(function () {
			error7.innerText = "";
			error8.innerText = "";
			error9.innerText = "";
		}, 3000);
	} else {
		var pagina = 0;

		const hectarea = 0;
		const condicion = 0;

		const tipo_transaccion = document.getElementById("transactionType").value;

		// Crear un objeto FormData y agregar el dato
		const formData = new FormData();
		formData.append("nombre_c", nombre_c);
		formData.append("tipo_transaccion", tipo_transaccion);
		formData.append("nombre_u", nombre_u);
		formData.append("tiempo", unidad);
		formData.append("precio_c", precio_c);
		formData.append("cantidad_c", cantidad_c);
		formData.append("condicion", condicion);
		formData.append("hectareas", hectarea);
		formData.append("pagina", pagina);

		// Realizar una petición Fetch para enviar los datos al servidor
		fetch("../assets/php/guardar.php", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.text())
			.then((data) => {
				console.log(data); // respuesta_valor_maiz del servidor (opcional)

				setTimeout(function () {
					document.getElementById("productNameComprar").value = "";
					document.getElementById("quantityComprar").value = "";
					document.getElementById("pricePerUnitComprar").value = "";
				}, 500);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
}
// tabla proceso de pos - cosecha
// 3--------------Fin paso3.html  -----------------------------------

// 3 Funciones relacionadas a la pagina paso3.html

// tabla proceso de pos - cosecha
// 3--------------Fin paso3.html  -----------------------------------

// 3 Funciones relacionadas a la pagina paso3.html

function control_Alquilar() {
	var nombre_u = document.getElementById("name_user").innerText;
	// Obtener el valor del campo de entrada de datos
	const nombre = document.getElementById("productNameAlquiler").value;
	const tipo_transaccion = document.getElementById("transactionType").value;
	const cantidad = document.getElementById("quantityAlquiler").value;
	const precio = document.getElementById("pricePerUnitAlquiler").value;
	const tiempo = document.getElementById("rentalTime").value;
	const tiempo1 = document.getElementById("rentalTime1").value;
	const unidad = tiempo + " " + tiempo1;
	var error3 = document.getElementById("error3");
	var error4 = document.getElementById("error4");
	var error5 = document.getElementById("error5");
	var error6 = document.getElementById("error6");
	var mensaje_error = "Este campo está vacío ⚠️";
	var color = "red";

	if (nombre == "" || cantidad == "" || precio == "" || tiempo == "") {
		if (nombre == "") {
			error3.innerHTML = mensaje_error;
			error3.style.color = color;
		} else if (cantidad == "") {
			error4.innerHTML = mensaje_error;
			error4.style.color = color;
		} else if (precio == "") {
			error5.innerHTML = mensaje_error;
			error5.style.color = color;
		} else if (tiempo == "") {
			error6.innerHTML = mensaje_error;
			error6.style.color = color;
		}

		setTimeout(function () {
			error3.innerText = "";
			error4.innerText = "";
			error5.innerText = "";
			error6.innerText = "";
		}, 3000);
	} else {
		const hectarea = 0;
		const condicion = 0;
		// Crear un objeto FormData y agregar el dato
		const formData = new FormData();
		formData.append("nombre", nombre);
		formData.append("tipo_transaccion", tipo_transaccion);
		formData.append("nombre_u", nombre_u);
		formData.append("tiempo", unidad);
		formData.append("precio", precio);
		formData.append("cantidad", cantidad);
		formData.append("condicion", condicion);
		formData.append("hectareas", hectarea);

		// Realizar una petición Fetch para enviar los datos al servidor
		fetch("../assets/php/guardar.php", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.text())
			.then((data) => {
				console.log(data); // respuesta_valor_maiz del servidor (opcional)

				setTimeout(function () {
					document.getElementById("productNameAlquiler").value = "";
					document.getElementById("quantityAlquiler").value = "";
					document.getElementById("pricePerUnitAlquiler").value = "";
					document.getElementById("rentalTime").value = "";
				}, 500);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
}
function control_Comprar() {
	var nombre_u = document.getElementById("name_user").innerText;
	// Obtener el valor del campo de entrada de datos
	const nombre_c = document.getElementById("productNameComprar").value;
	const cantidad_c = document.getElementById("quantityComprar").value;
	const precio_c = document.getElementById("pricePerUnitComprar").value;

	const hectarea = 0;
	const condicion = 0;
	var error7 = document.getElementById("error7");

	var error8 = document.getElementById("error8");
	const tiempo1 = document.getElementById("rentalTime_1").value;
	const unidad = tiempo1;
	var error9 = document.getElementById("error9");
	var mensaje_error = "Este campo está vacío ⚠️";
	var color = "red";

	if (nombre_c == "" || cantidad_c == "" || precio_c == "") {
		if (nombre_c == "") {
			error7.innerHTML = mensaje_error;
			error7.style.color = color;
		} else if (cantidad_c == "") {
			error8.innerHTML = mensaje_error;
			error8.style.color = color;
		} else if (precio_c == "") {
			error9.innerHTML = mensaje_error;
			error9.style.color = color;
		}

		setTimeout(function () {
			error7.innerText = "";
			error8.innerText = "";
			error9.innerText = "";
		}, 3000);
	} else {
		const tipo_transaccion = document.getElementById("transactionType").value;

		// Crear un objeto FormData y agregar el dato
		const formData = new FormData();
		formData.append("nombre_c", nombre_c);
		formData.append("tipo_transaccion", tipo_transaccion);
		formData.append("nombre_u", nombre_u);
		formData.append("tiempo", unidad);
		formData.append("precio_c", precio_c);
		formData.append("cantidad_c", cantidad_c);
		formData.append("condicion", condicion);
		formData.append("hectareas", hectarea);

		// Realizar una petición Fetch para enviar los datos al servidor
		fetch("../assets/php/guardar.php", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.text())
			.then((data) => {
				console.log(data); // respuesta_valor_maiz del servidor (opcional)

				setTimeout(function () {
					document.getElementById("productNameComprar").value = "";
					document.getElementById("quantityComprar").value = "";
					document.getElementById("pricePerUnitComprar").value = "";
				}, 500);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
}
// tabla proceso de pos - cosecha
// 3--------------Fin paso3.html  -----------------------------------
function eliminar_datos() {
	// Obtener el valor del campo de entrada de datos
	var eliminar = document.getElementById("seleccion_pagina").value;
	const checkboxes = Array.from(document.getElementsByName("checkbox[]"));
	const seleccionados = checkboxes.filter((checkbox) => checkbox.checked);
	const valores = seleccionados.map((checkbox) => checkbox.value);
	console.log(eliminar);

	// Crear un objeto FormData y agregar el dato
	const formData = new FormData();
	formData.append("eliminar", eliminar);
	formData.append("valores", valores);

	// Realizar una petición Fetch para enviar los datos al servidor y eliminar la selección que realice
	fetch("../assets/php/eliminar_registro.php", {
		method: "POST",
		body: formData,
	})
		.then((response) => response.text())
		.then((data) => {
			console.log(data); // respuesta_valor_maiz del servidor (opcional)
		})
		.catch((error) => {
			console.error("Error:", error);
		});
}
function guardarfecha() {
	var nombre_u = document.getElementById("name_user").innerText;
	var pagina = document.getElementById("boton_t").value;

	var tipo_transaccion = 0;

	var fecha_incio = document.getElementById("fecha_inicio").value;
	var fecha_final = document.getElementById("fecha_final").value;
	var error1 = document.getElementById("error1");
	var error2 = document.getElementById("error2");
	var mensaje_error = "Este campo está vacío ⚠️";
	var color = "red";
	// entonces mira
	// crea la condicion
	if (fecha_incio == "" || fecha_final == "") {
		if (fecha_incio == "") {
			error1.innerHTML = mensaje_error;
			error1.style.color = color;
		} else if (fecha_final == "") {
			error2.innerHTML = mensaje_error;
			error2.style.color = color;
		}

		setTimeout(function () {
			error1.innerText = "";
			error2.innerText = "";
		}, 3000);
	} else {
		// Obtener el valor del campo de entrada de datos
		const hectarea = 0;
		const condicion = 0;

		// Crear un objeto FormData y agregar el datllama d
		const formData = new FormData();
		formData.append("pagina", pagina);
		formData.append("fecha_incio", fecha_incio);
		formData.append("fecha_final", fecha_final);
		formData.append("condicion", condicion);
		formData.append("hectareas", hectarea);
		formData.append("tipo_transaccion", tipo_transaccion);
		formData.append("nombre_u", nombre_u);

		// Realizar una petición Fetch para enviar los datos al servidor que estas buscando
		fetch("../assets/php/guardar.php", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.text())
			.then((data) => {
				console.log(data); // respuesta_valor_maiz del servidor (opcional)

				var tipo = "success";
				var titulo = "Dato guardado";
				var texto = "";

				alertas(tipo, titulo, texto);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
}

function fecha_vender() {
	var pagina = document.getElementById("boton_t").value;
	var nombre_u = document.getElementById("name_user").innerText;
	var tipo_transaccion = 0;

	var fecha_incio = document.getElementById("fecha_inicio").value;
	var fecha_final = document.getElementById("fecha_final").value;
	var vender = document.getElementById("preciovender").value;

	var error1 = document.getElementById("error1");
	var error2 = document.getElementById("error2");
	const tiempo = document.getElementById("rentalTime").value;
	const tiempo1 = document.getElementById("rentalTime1").value;
	const unidad = tiempo + " " + tiempo1;
	var error3 = document.getElementById("error3");
	var mensaje_error = "Este campo está vacío ⚠️";
	var color = "red";

	// entonces mira
	// crea la condicion
	if (fecha_incio == "" || fecha_final == "" || vender == "") {
		if (fecha_incio == "") {
			error1.innerHTML = mensaje_error;
		} else if (fecha_final == "") {
			error2.innerHTML = mensaje_error;
			error2.style.color = color;
		} else if (vender == "") {
			error3.innerHTML = mensaje_error;
			error3.style.color = color;
		}

		setTimeout(function () {
			error1.innerText = "";
			error2.innerText = "";
			error3.innerText = "";
		}, 3000);
	} else {
		// Obtener el valor del campo de entrada de datos
		const hectarea = 0;
		const condicion = 0;

		// Crear un objeto FormData y agregar el datllama d
		const formData = new FormData();
		formData.append("pagina", pagina);
		formData.append("fecha_incio", fecha_incio);
		formData.append("fecha_final", fecha_final);
		formData.append("condicion", condicion);
		formData.append("hectareas", hectarea);
		formData.append("tipo_transaccion", tipo_transaccion);
		formData.append("nombre_u", nombre_u);
		formData.append("vender", vender);

		// Realizar una petición Fetch para enviar los datos al servidor
		fetch("../assets/php/guardar.php", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.text())
			.then((data) => {
				console.log(data); // respuesta_valor_maiz del servidor (opcional)

				var tipo = "success";
				var titulo = "Dato guardado";
				var texto = "";

				alertas(tipo, titulo, texto);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
}

function REGISTRO_USUARIO() {
	var nombre_v= document.getElementById("name_user");
	// Obtener el valor del campo de entrada de datos
	if (nombre_v!=null) {
		var nombre_u = document.getElementById("name_user").innerText;

	}else{
		var nombre_u=0;
	}
	const nombres_usuario = document.getElementById("nombres_usuario").value;
	const apellidos_usuario = document.getElementById("apellidos_usuario").value;
	const correo_usuario = document.getElementById("correo_usuario").value;
	const psw_usuario = document.getElementById("psw_usuario").value;
	const valida_opcion = document.getElementById("actualizar").value;

	if (
		nombres_usuario == "" ||
		apellidos_usuario == "" ||
		psw_usuario == "" ||
		correo_usuario == ""
	) {
		if (nombres_usuario == "") {
		} else if (apellidos_usuario == "") {
		} else if (correo_usuario == "") {
		} else if (psw_usuario == "") {
		}
	} else {
		// Crear un objeto FormData y agregar el dato
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

					const timeout = setTimeout(() => {
						console.log("El tiempo ha terminado");
						window.location.href = "../pages/login.html";
					}, 2000); // 5000 ms = 5 segundos

					// Validar si el tiempo ha terminado
					if (timeout) {
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
					}
					
				} else if (data == 2) {
					Swal.fire({
						icon: "error",
						title: "El usuario ya existe",
						html: "Por favor inicie sesión con su usuario y contraseña",
						showClass: {
							popup: "animate__animated animate__fadeInDown",
						},
						hideClass: {
							popup: "animate__animated animate__fadeOutUp",
						},
					});
				} else if (data == 3) {
					closeModal();

					const timeout = setTimeout(() => {
						console.log("El tiempo ha terminado");
						window.location.href = "../pages/paso1.html";
					}, 2000); // 5000 ms = 5 segundos

					// Validar si el tiempo ha terminado
					if (timeout) {
						var tipo = "success";
						var titulo = "Dato guardado";
						var texto = "";
						alertas(tipo, titulo, texto);
					}
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
}

function INICIAR_SESION() {
	console.log("aqui-------------");
	// Obtener el valor del campo de entrada de datos
	const correo = document.getElementById("correo").value;
	const psw = document.getElementById("psw").value;

	if (psw == "" || correo == "") {
		if (correo == "") {
		} else if (psw == "") {
		}
	} else {
		// Crear un objeto FormData y agregar el dato
		const formData = new FormData();
		formData.append("correo", correo);
		formData.append("psw", psw);

		// Realizar una petición Fetch para enviar los datos al servidor
		fetch("../assets/php/iniciarsesion.php", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.text())
			.then((data) => {
				// respuesta_valor_maiz del servidor (opcional)
				if (data == 1) {
					console.log(data);
					Swal.fire({
						icon: "error",
						title: "Usuario invalido",
						html: "El usuario ingresado no está registrado, si aun no tiene un usuario puede registrarse",
						showClass: {
							popup: "animate__animated animate__fadeInDown",
						},
						hideClass: {
							popup: "animate__animated animate__fadeOutUp",
						},
					});
				} else if (data == 2) {
					console.log(data);
					Swal.fire({
						icon: "error",
						title: "Contraseña invalida",
						html: "Por favor ingrese nuevamente la contraseña",
						showClass: {
							popup: "animate__animated animate__fadeInDown",
						},
						hideClass: {
							popup: "animate__animated animate__fadeOutUp",
						},
					});
				} else if (data == 3) {
					console.log(data);

					window.location.href = "../pages/cargando.html";
					/*  Swal.fire({
            icon: 'error',
            text: 'contraseña invalida',
            html: 'por favor ingrese nuevamente la contraseña',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
        })*/
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
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

	const condicion = document.getElementById("boton_t");
	const fecha1 = new Date(document.getElementById("fecha_inicio").value);
	const fecha2 = new Date(document.getElementById("fecha_final").value);

	if (fecha1 <= fecha2) {
		condicion.disabled = false;
		
	} else if (fecha1 > fecha2) {
		
		condicion.disabled = true; 
	} 
