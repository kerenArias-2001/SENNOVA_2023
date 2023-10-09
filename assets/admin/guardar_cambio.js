

function guardar_cambios() {
	const Selection_pagina = document.getElementById('seleccion_pagina').value;
	console.log(Selection_pagina)

	var guardar1 = document.getElementById("guardar1").value;
	var guardar2 = document.getElementById("guardar2").files[0];
	var guardar4 = document.getElementById("guardar4").value;
	var guardar8 = document.getElementById("guardar8").value;
	var guardar10 = document.getElementById("guardar10").value; //esto guardará el cambio9 del paso 1
	var guardar11 = document.getElementById("guardar11").value;
	var guardar12 = document.getElementById("guardar12").value;
	var guardar13 = document.getElementById("guardar13").value;
	var guardar14 = document.getElementById("guardar14").value;
	var guardar15 = document.getElementById("guardar15").value;
	var guardar16 = document.getElementById("guardar16").value;
	var guardar17 = document.getElementById("guardar17").value;
	var guardar18 = document.getElementById("guardar18").value;
	var guardar19 = document.getElementById("guardar19").value;
	var guardar20 = document.getElementById("guardar20").value;
	var guardar21 = document.getElementById("guardar21").value;
	var guardar22 = document.getElementById("guardar22").value;
	var guardar23 = document.getElementById("guardar23").value;
	var guardar24 = document.getElementById("guardar24").value;
	var guardar25 = document.getElementById("guardar25").value;
	var guardar26 = document.getElementById("guardar26").value;
	var guardar27 = document.getElementById("guardar27").value;
	var guardar28 = document.getElementById("guardar28").value;
	var guardar29 = document.getElementById("guardar29").value;
	var guardar30 = document.getElementById("guardar30").value;
	var guardar31 = document.getElementById("guardar31").value;
	var guardar32 = document.getElementById("guardar32").value;
	var guardar33 = document.getElementById("guardar33").value;
	var guardar34 = document.getElementById("guardar34").value;
	var guardar35 = document.getElementById("guardar35").value;
	var guardar36 = document.getElementById("guardar36").value;
	var guardar37 = document.getElementById("guardar37").value;
	var guardar38 = document.getElementById("guardar38").value;
	var guardar39 = document.getElementById("guardar39").value;
	var guardar40 = document.getElementById("guardar40").value;
	var guardar41 = document.getElementById("guardar41").value;
	var guardar42 = document.getElementById("guardar42").value;
	var guardar43 = document.getElementById("guardar43").value;
	var guardar44 = document.getElementById("guardar44").value;
	var guardar45 = document.getElementById("guardar45").value;
	var guardar46 = document.getElementById("guardar46").value;
	
	 //esto guardará el cambio9 del paso 1


	const formData = new FormData();
	formData.append("Selection_pagina", Selection_pagina);

	formData.append("guardar1", guardar1);
	formData.append("guardar2", guardar2);
	formData.append("guardar4", guardar4);
	formData.append("guardar8", guardar8);
	formData.append("guardar10", guardar10);
	formData.append("guardar11", guardar11);
	formData.append("guardar12", guardar12);
	formData.append("guardar13", guardar13);
	formData.append("guardar14", guardar14);
	formData.append("guardar15", guardar15);
	formData.append("guardar16", guardar16);
	formData.append("guardar17", guardar17);
	formData.append("guardar18", guardar18);
	formData.append("guardar19", guardar19);
	formData.append("guardar20", guardar20);
	formData.append("guardar21", guardar21);
	formData.append("guardar22", guardar22);
	formData.append("guardar23", guardar23);
	formData.append("guardar24", guardar24);
	formData.append("guardar25", guardar25);
	formData.append("guardar26", guardar26);
	formData.append("guardar27", guardar27);
	formData.append("guardar28", guardar28);
	formData.append("guardar29", guardar29);
	formData.append("guardar30", guardar30);
	formData.append("guardar31", guardar31);
	formData.append("guardar32", guardar32);
	formData.append("guardar33", guardar33);
	formData.append("guardar34", guardar34);
	formData.append("guardar35", guardar35);
	formData.append("guardar36", guardar36);
	formData.append("guardar37", guardar37);
	formData.append("guardar38", guardar38);
	formData.append("guardar39", guardar39);
	formData.append("guardar40", guardar40);
	formData.append("guardar41", guardar41);
	formData.append("guardar42", guardar42);
	formData.append("guardar43", guardar43);
	formData.append("guardar44", guardar44);
	formData.append("guardar45", guardar45);
	formData.append("guardar46", guardar46);

	fetch("../assets/admin/guardar_cambio.php", {
		method: "POST",
		body: formData,
	})
	.then((response) => response.text())
	.then((data) => {
		console.log(data); // respuesta_valor_maiz del servidor (opcional)
		if (data==1) {
			const timeout = setTimeout(() => {
				console.log("El tiempo ha terminado");
				window.location.href = "../pages/paso1.html";
			}, 1000); // 5000 ms = 5 segundos

			// Validar si el tiempo ha terminado
			if (timeout) {
				console.log("El tiempo aún no ha terminado");
				var tipo = "success";
				var cambio9 = "Cambio  existoso ";
				var texto = "";
				alertas(tipo, cambio9, texto);
			}
		
		}else if (data==2) {
			const timeout = setTimeout(() => {
				console.log("El tiempo ha terminado");
				window.location.href = "../pages/paso2.html";
			}, 1000); // 5000 ms = 5 segundos
			// Validar si el tiempo ha terminado
			if (timeout) {
				console.log("El tiempo aún no ha terminado");
				var tipo = "success";
				var cambio9 = "Cambio  existoso ";
				var texto = "";	
				alertas(tipo, cambio9, texto);
			}		
		}else if (data==3) {
			const timeout = setTimeout(() => {
				console.log("El tiempo ha terminado");
				window.location.href = "../pages/paso3.html";
			}, 1000); // 5000 ms = 5 segundos
			// Validar si el tiempo ha terminado
			if (timeout) {
				console.log("El tiempo aún no ha terminado");
				var tipo = "success";
				var cambio9 = "Cambio  existoso ";
				var texto = "";	
				alertas(tipo, cambio9, texto);
			}		
		}else if (data==4) {
			const timeout = setTimeout(() => {
				console.log("El tiempo ha terminado");
				window.location.href = "../pages/paso4.html";
			}, 1000); // 5000 ms = 5 segundos
			// Validar si el tiempo ha terminado
			if (timeout) {
				console.log("El tiempo aún no ha terminado");
				var tipo = "success";
				var cambio9 = "Cambio  existoso ";
				var texto = "";	
				alertas(tipo, cambio9, texto);
			}		
		}else if (data==5) {
			const timeout = setTimeout(() => {
				console.log("El tiempo ha terminado");
				window.location.href = "../pages/paso5.html";
			}, 1000); // 5000 ms = 5 segundos
			// Validar si el tiempo ha terminado
			if (timeout) {
				console.log("El tiempo aún no ha terminado");
				var tipo = "success";
				var cambio9 = "Cambio  existoso ";
				var texto = "";	
				alertas(tipo, cambio9, texto);
			}		
		}else if (data==6) {
			const timeout = setTimeout(() => {
				console.log("El tiempo ha terminado");
				window.location.href = "../pages/paso6.html";
			}, 1000); // 5000 ms = 5 segundos
			// Validar si el tiempo ha terminado
			if (timeout) {
				console.log("El tiempo aún no ha terminado");
				var tipo = "success";
				var cambio9 = "Cambio  existoso ";
				var texto = "";	
				alertas(tipo, cambio9, texto);
			}		
		}else if (data==7) {
			const timeout = setTimeout(() => {
				console.log("El tiempo ha terminado");
				window.location.href = "../pages/paso7.html";
			}, 1000); // 5000 ms = 5 segundos
			// Validar si el tiempo ha terminado
			if (timeout) {
				console.log("El tiempo aún no ha terminado");
				var tipo = "success";
				var cambio9 = "Cambio  existoso ";
				var texto = "";	
				alertas(tipo, cambio9, texto);
			}		
		}else if (data==8) {
			const timeout = setTimeout(() => {
				console.log("El tiempo ha terminado");
				window.location.href = "../pages/paso8.html";
			}, 1000); // 5000 ms = 5 segundos
			// Validar si el tiempo ha terminado
			if (timeout) {
				console.log("El tiempo aún no ha terminado");
				var tipo = "success";
				var cambio9 = "Cambio  existoso ";
				var texto = "";	
				alertas(tipo, cambio9, texto);
			}		
		}



		else if (data==10){
			var tipo = "error";
			var cambio9 = "Error al subir  la imagen";
			var texto = "";
			alertas(tipo, cambio9, texto);
		
	}
	})
	.catch((error) => {
		console.error("Error:", error);
	});
}


/*
function guardar_cambio() {
	var pagina = document.getElementById("seleccion_pagina").value;
	var guardar2 = document.getElementById("guardar2").files[0]; //esto guardará el cambio9 del paso 1

	const formData = new FormData();
	formData.append("imagen", guardar2);
	formData.append("pagina", pagina);

	fetch("../assets/admin/guardar_imagenes.php", {
		method: "POST",
		body: formData,
	})
	.then((response) => response.text())
	.then((data) => {
		console.log(data); // respuesta_valor_maiz del servidor (opcional)
		if (data==1) {

			const timeout = setTimeout(() => {
				console.log("El tiempo ha terminado");
				window.location.href = "../pages/paso1.html";
			}, 1000); // 5000 ms = 5 segundos

			// Validar si el tiempo ha terminado
			if (timeout) {
				console.log("El tiempo aún no ha terminado");
				var tipo = "success";
				var cambio9 = "Cambio  existoso ";
				var texto = "";
				
				alertas(tipo, cambio9, texto);
			}
		
		
		}else if (data==2){
			var tipo = "error";
			var cambio9 = "error al subir  la imagen";
			var texto = "";
			alertas(tipo, cambio9, texto);
		
	}

	})
	.catch((error) => {
		console.error("Error:", error);
	});
}*/

function alertas(tipo, cambio9, texto) {
	Swal.fire({
		type: tipo,
		title: "<h4>" + cambio9 + "</h4>",
		text: texto,
		position: "top-center",
		icon: "success",
		showConfirmButton: false,
		timer: 3000,
	});
}

cerrar = true;
function abrir(abrir){
	if ((abrir == "abrir") && (cerrar == true)) {
	document.getElementById("mostrar").style.display = "block";
	cerrar = false;
  }else{
	document.getElementById("mostrar").style.display = "none";
	cerrar = true;
  }
}

const choice2Array = document.querySelectorAll(".choice2")

choice2Array.forEach((card) => {
    card.addEventListener("click", () => {
        choice2Array.forEach((element) => {
            element.classList.remove("expand2", "unset2")
            element.classList.add('small2')
        })
        card.classList.remove("small2")
        card.classList.add('expand2')
    });
});