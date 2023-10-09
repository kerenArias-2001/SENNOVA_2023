
function calcularHerramienta1() {
	var nombre_u = document.getElementById("name_user").innerText;
	const hectarea = document.getElementById("hectareas").value;
	const condicion = document.getElementById("boton_t").value;
	const cotizar = document.getElementById("cotizar").value;
	var fecha_incio = document.getElementById("fecha_inicio").value;
	var fecha_final = document.getElementById("fecha_final").value;
	var error1 = document.getElementById("error1");
	var error2 = document.getElementById("error2");
	var error3 = document.getElementById("error3");
	var error4 = document.getElementById("error4");
	var mensaje_error = "Este campo está vacío ⚠️";
	var color = "red";
	var pagina = document.getElementById("boton_t").value;

	const tipo_transaccion = 0; // ah ya, y esta funcion es la del boton este

	if (
		hectarea == "" ||
		cotizar == "" ||
		fecha_final == "" ||
		fecha_incio == ""
	) {
		if (fecha_incio == "") {
			error1.innerHTML = mensaje_error;
			error1.style.color = color;
		} else if (fecha_final == "") {
			error2.innerHTML = mensaje_error;
			error2.style.color = color;
		} else if (hectarea == "") {
			error3.innerHTML = mensaje_error;
			error3.style.color = color;
		} else if (cotizar == "") {
			error4.innerHTML = mensaje_error;
			error4.style.color = color;
		}

		setTimeout(function () {
			error1.innerText = "";
			error2.innerText = "";
			error3.innerText = "";
			error4.innerText = "";
		}, 3000);
	} else {
		// Crear un objeto FormData y agregar el dato
		const formData = new FormData();
		formData.append("hectareas", hectarea);
		formData.append("condicion", condicion);
		formData.append("tipo_transaccion", tipo_transaccion);
		formData.append("cotizar", cotizar);
		formData.append("fecha_incio", fecha_incio);
		formData.append("fecha_final", fecha_final);
		formData.append("pagina", pagina);
		formData.append("nombre_u", nombre_u);
		// Realizar una petición Fetch para enviar los datos al servidor

		fetch("../assets/php/guardar.php", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.text())
			.then((data) => {
				console.log(data); // respuesta_valor_maiz del servidor (opcional)
				console.log("aqui");
				var tipo = "success";
				var titulo = "Dato guardado";
				var texto = "";

				alertas(tipo, titulo, texto);
			})
			.catch((error) => {
				console.error("Error:", error);
			});

		calcularHerramientas();
	}
}



function calcularHerramientas() {
	const validar = document.getElementById("hectareas");
	if (validar !== null) {
		const hectareas = parseFloat(document.getElementById("hectareas").value);
	} else {
		const hectareas = 0;
	}

	const herramientas = calcularHerramientasPorHectarea(hectareas);
	// mostrarResultado(herramientas);
}

function calcularHerramientasPorHectarea(hectareas) {
	const palasPorHectarea = 10;
	const baldesPorHectarea = 8;
	const palinPorHectarea = 8;
	const bolsasPorHectarea = 12;
	// const kgSemillasPorHectarea = 20;
	const personalPorHectarea = 4;

	const palasNecesarias = (palasPorHectarea * hectareas) / 10000;
	const baldesNecesarios = (baldesPorHectarea * hectareas) / 10000;
	const palinNecesarios = (palinPorHectarea * hectareas) / 10000;
	const bolsasNecesarias = (bolsasPorHectarea * hectareas) / 10000;
	// const kgSemillasNecesarias = kgSemillasPorHectarea * hectareas /10000;
	const personalNecesarios = (personalPorHectarea * hectareas) / 10000;

	return [
		{
			nombre: "Personal",
			cantidad: personalNecesarios,
			imagen: "../assets/img/herramientas/006-agricultor.png",
			medida: " pers",
		},
		{
			nombre: "Baldes",
			cantidad: baldesNecesarios,
			imagen: "../assets/img/herramientas/balde.png",
			medida: " und",
		},
		{
			nombre: "Palín",
			cantidad: palinNecesarios,
			imagen: "../assets/img/herramientas/001-pala.png",
			medida: " und",
		},
		{
			nombre: "Bolsas",
			cantidad: bolsasNecesarias,
			imagen: "../assets/img/herramientas/bolsas.png",
			medida: " und",
		},
		{
			nombre: "Palas",
			cantidad: palasNecesarias,
			imagen: "../assets/img/herramientas/001-pala.png",
			medida: " und",
		},
		// { nombre: 'Semillas', cantidad: kgSemillasNecesarias, imagen: '../assets/img/herramientas/maiz.png', medida: ' kg' },
	];
}

function mostrarResultado(herramientas) {
	const listaHerramientasDiv = document.getElementById("herramientas-lista");
	listaHerramientasDiv.innerHTML = "";

	herramientas.forEach((herramienta) => {
		const herramientaDiv = document.createElement("div");
		herramientaDiv.classList.add("col", "mt-3");

		const card = document.createElement("div");
		card.classList.add("card", "p-2", "blur", "align-items-center");

		const cardBody = document.createElement("div");
		card.classList.add("card");

		const author = document.createElement("div");
		author.classList.add("author", "align-items-center");

		const imagen = document.createElement("img");
		imagen.src = herramienta.imagen;
		imagen.alt = herramienta.nombre;
		imagen.classList.add("avatar1", "herramienta-imagen");

		const nameDiv = document.createElement("div");
		nameDiv.classList.add("name", "ps-2");

		const nombreCantidad = document.createElement("span");
		nombreCantidad.textContent =
			herramienta.nombre + ": " + herramienta.cantidad + herramienta.medida;
		nombreCantidad.classList.add("text-dark", "herramienta-item");

		nameDiv.appendChild(nombreCantidad);
		author.appendChild(imagen);
		author.appendChild(nameDiv);
		cardBody.appendChild(author);
		card.appendChild(cardBody);
		herramientaDiv.appendChild(card);
		listaHerramientasDiv.appendChild(herramientaDiv);
	});
}
// Calcular herramientas al cargar la página con 2 hectáreas por defecto

function sumar() {
	// const cotizar = document.getElementById("cotizar").value;
	//console.log(cotizar);
	// Crear un objeto FormData y agregar el dato
	//const formData = new FormData();
	//formData.append('cotizar', cotizar);

	var num1 = parseInt(document.getElementById("cotizar").value) || 0;
	var num2 = parseInt(document.getElementById("totalAmount").innerText) || 0;

	var resultadot = num1 + num2;

	document.getElementById("resultadot").innerHTML =
		"$ " + resultadot.toFixed(2);
	/*  fetch('../assets/php/guardar.php', {
    method: 'POST',
    body: formData
})
.then(response => response.text())
.then(data => {
    console.log(data); // respuesta_valor_maiz del servidor (opcional)
})
.catch(error => {
    console.error('Error:', error);
});*/
}
//calcularHerramientas()

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
