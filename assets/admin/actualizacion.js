// permite usar json
$(document).ready(function () {
	// Función para actualizar la tabla con los datos del servidor
	function actualizar_cambios() {
		
	const Selection_pagina = document.getElementById('seleccion_pagina').value;
const formData = new FormData();
formData.append("Selection_pagina", Selection_pagina);

	$.ajax({
		url: "../assets/admin/actualizar_cambio.php",
		type: "POST",  // Cambiado "method" por "type"
		data: formData,  // Cambiado "body" por "data"
		processData: false,
		contentType: false,
		dataType: "json",  // Especificando el tipo de datos esperados
		success: function(data) {
	//	console.log(data);
	//$("#cambio0").html(data.valor00);
			//	$("#cambio1").html(data.valor01);
			
				document.getElementById('cambio2').style.backgroundImage = "url(../assets/img/"+data.valor02+")"; //como es imagen  se usa asi
			//	$("#cambio3").html(data.valor03);
			//	$("#cambio4").html(data.valor04);
				/*$("#cambio5").html(data.valor05);*/
			//	$("#cambio6").html(data.valor06);
				/*$("#cambio7").html(data.valor07);*/
			//	$("#cambio8").html(data.valor08);
				/*$("#cambio9").html(data.valor09);*/
				$("#cambio10").html(data.valor10);
				$("#cambio11").html(data.valor11);
				$("#cambio12").html(data.valor12);
				$("#cambio13").html(data.valor13);
				$("#cambio14").html(data.valor14);
				$("#cambio15").html(data.valor15);
				$("#cambio16").html(data.valor16);
				$("#cambio17").html(data.valor17);
				$("#cambio18").html(data.valor18);
				$("#cambio19").html(data.valor19);
				$("#cambio20").html(data.valor20);
				$("#cambio21").html(data.valor21);
				$("#cambio22").html(data.valor22);
				$("#cambio23").html(data.valor23);
				$("#cambio24").html(data.valor24);
				$("#cambio25").html(data.valor25);
				$("#cambio26").html(data.valor26);
				$("#cambio27").html(data.valor27);
				$("#cambio28").html(data.valor28);
				$("#cambio29").html(data.valor29);
				$("#cambio30").html(data.valor30);
				$("#cambio31").html(data.valor31);
				$("#cambio32").html(data.valor32);
				$("#cambio33").html(data.valor33);
				$("#cambio34").html(data.valor34);
				$("#cambio35").html(data.valor35);
				$("#cambio36").html(data.valor36);
				$("#cambio37").html(data.valor37);
				$("#cambio38").html(data.valor38);
				$("#cambio39").html(data.valor39);
				$("#cambio40").html(data.valor40);
				$("#cambio41").html(data.valor41);
				$("#cambio42").html(data.valor42);
				$("#cambio43").html(data.valor43);
				$("#cambio44").html(data.valor44);
				$("#cambio45").html(data.valor45);
				$("#cambio46").html(data.valor46);
				
				


    }
});

	}
	/*function actualizar_imagenes() {
		$.ajax({
			url: "../assets/admin/actualizar_imagenes.php",
			dataType: "json",
			success: function (data) {
				document.getElementById('cambio2').style.backgroundImage = "url(../assets/img/"+data.valor00+")";
				console.log(data.valor00);
			},
		});

	}*/
	function opciones_admin() {
		console.log("aqui");
		$.ajax({
			url: "../assets/admin/admin.php",
			
			success: function (data) {
				console.log(data);
					var div = document.getElementById("admin");
				if (data==1) {

					document.getElementById("admin").style.display = "block";
				
					
					div.classList.add("p-2", "card", "mt-4", "col-lg-9", "card-body", "opacity-9", "d-flex", 
					"shadow-lg", "align-items-center", "mt-4", "p-0");
					div.style.left = "18px";
					div.style.position = "absolute";
					div.style.zIndex = "99999";
					div.style.width = "auto";
					div.style.height = "auto";
					div.style.backgroundColor = "#c88cff";
					div.style.top = "87px";
										
				} else {
					document.getElementById("admin").style.display = "none";
				
					
					div.classList.remove("p-2", "card", "mt-4", "col-lg-9", "card-body", "opacity-9", "d-flex", 
					"shadow-lg", "align-items-center", "mt-4", "p-0");
					
				}
				
			},
		});

	}
	
	
	//actualizar_imagenes();
	actualizar_cambios();
	opciones_admin();
	//setInterval(opciones_admin, 1000);
	///setInterval(actualizar_cambios, 1000);
	

});

