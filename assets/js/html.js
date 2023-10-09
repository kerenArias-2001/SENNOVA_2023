function alert_Dofa() {
	(async () => {
		const { value: formValues } = await Swal.fire({
			title: 'Debilidades',
			html: '<div class="row">'+'<div class="col-lg-11 mx-auto d-flex justify-content-center flex-column">'+
				'<form onsubmi"return false;" id="contact-form" method="post" autocomplete="off">'+
					'<div class="card-body">'+'<div class="">'+'<div class="input-group input-group-static">'+
						'<label class="font-weight-bold" >Nombre una debilidad</label>'+
						'<input type="text" id="nombre_d" class="form-control"/>'+'</div>'+
						'<div class="input-group mb-4 mt-3 input-group-static">'+'<label class="font-weight-bold">Descripción</label>'+
							'<textarea id="descripcion_d"  name="message" class="form-control" rows="4"></textarea>'+
							'</div>'+'<div class="row">'+'<div class="col-md-12">'+
								'</div>'+'</div>'+'</div>'+'</form>'+'</div>'+'</div>',

			focusConfirm: false,
			showLoaderOnConfirm: true,
			preConfirm: () => {

				const nombre_d = document.getElementById("nombre_d").value;
				const descripcion_d = document.getElementById("descripcion_d").value;


				if (!descripcion_d || !nombre_d ) {
					Swal.showValidationMessage(
						"Por favor ingresa tanto un correo electrónico como una contraseña"
					);
					return false;
				}
				if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(descripcion_d)) {
					Swal.showValidationMessage(
						"Por favor ingresa un correo electrónico válido"
					);
					return false;
				}
				return [descripcion_d, nombre_d, apellidos_usuario, psw_usuario];
			},
		});

		if (formValues) {

			const [descripcion_d, nombre_d] = formValues;
			const formData = new FormData();
			formData.append("nombre_d", nombre_d);

			formData.append("descripcion_d", descripcion_d);


			// Realizar una petición Fetch para enviar los datos al servidor
			fetch("../assets/php/guardar_dofa.php", {
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
								"Usuario: " + descripcion_d + "<br> Contraseña: ",
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
							var titulo = descripcion_d + "Your data has been saved!";
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


