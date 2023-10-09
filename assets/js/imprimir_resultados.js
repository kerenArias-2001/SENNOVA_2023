// --------------------- imprimir tabla inventario
function printTable() {
	/*// Obtener el contenido de la tabla
	let tableContent = document.getElementById("tabla_inventario").innerHTML;
	let grafica = document.getElementById("grafica2_grande").innerHTML;


	// Crear una ventana nueva
	let printWindow = window.open("", "", "height=1056px,width=816px,");

	// Agregar el contenido de la tabla a la ventana nueva
	printWindow.document.write(
		"<html><head><title>Resultado de Inventario de la planeación del cultivo de maíz</title>"
	);
	printWindow.document.write(
		' <link id="pagestyle" href="../assets/css/material-kit.css?v=3.0.4" rel="stylesheet" /><script src="https://cdn.jsdelivr.net/npm/chart.js@latest/dist/Chart.min.js"></script>'
	);

	// Agregar los estilos CSS a la ventana nueva
	let styles = document.getElementsByTagName("style");
	for (let i = 0; i < styles.length; i++) {
		printWindow.document.write(styles[i].outerHTML);
	}
	printWindow.document.write('</head><body style="font-size: 1px;">');
	printWindow.document.write(
		'<table><tr style="/*background-color:#73ff0045" ><td colspan="1 " style="text-align: center;"><img src="../assets/img/logo_sena.png" alt="Logo SENA"><br>Servicio Nacional de Aprendizaje</td></tr></thead></table><br>'
	);

	printWindow.document.write(
		'<h5 style="text-align: center;" >Costos de Producción para el cultivo de Maíz</h5>'
	);
	printWindow.document.write(tableContent);
	printWindow.document.write(grafica);

	printWindow.document.write(
		'</body></html>'
	);

	// Imprimir la ventana nueva
	printWindow.print();*/
	var  pixeles=200;
	var width = pixeles/ 3.78;
	var height =  pixeles/ 3.78;
	  var pdf = new jsPDF();
	  var imgData1 
	  var imgData2
	   // Ajusta las coordenadas según sea necesario

	html2canvas($('#elemento1'), {
	  onrendered: function(canvas) {
		pdf.text('Este es mi texto1', 10, 10);
	  
		 imgData1 = canvas.toDataURL('image/jpeg');
		  // Ajusta las coordenadas según sea necesario
		  pdf.addImage(imgData1, 'JPEG', 0, 30, width, height);

	
		
	
	  }
	});
	html2canvas($('#elemento2'), {
		onrendered: function(canvas) {
		   imgData1 = canvas.toDataURL('image/jpeg');
		   pdf.addPage();
		   pdf.text('Este es mi texto2', 0, 20); 
			// Ajusta las coordenadas según sea necesario
			pdf.addImage(imgData1, 'JPEG', 0, 30, width, height);
	  
		  
	  
		}
	  });
	  html2canvas($('#elemento3'), {
		onrendered: function(canvas) {
		   imgData1 = canvas.toDataURL('image/jpeg');
		   pdf.addPage();
		   pdf.text('Este es mi texto3', 0, 20); 
			// Ajusta las coordenadas según sea necesario
			pdf.addImage(imgData1, 'JPEG', 0, 30, width, height);
	  
		  
	  
		}
	  });


	html2canvas($('#elemento4'), {
		onrendered: function(canvas) {
	  imgData2 = canvas.toDataURL('image/jpeg');
	  pdf.addPage();
	  pdf.text('Este es mi texto4', 0, 20); 
	  pdf.addImage(imgData2, 'JPEG', 0, 100, width, height);
	  
	   pdf.save('download.pdf'); //debe estar en la ultima funcion
	}
	
  });  
	
	//pdf.save('download.pdf'); 
	
	/*pdf.text('Este es mi texto en la primera página', 10, 10);

	// Crea una nueva página
	pdf.addPage();
	  var elementHTML = $('#table1').get(0);
	  pdf.html(elementHTML, {
		callback: function (pdf) {
		  pdf.save('download.pdf');
		}
	  });*/
   
}
// Cerrar la ventana nueva
//printWindow.close();

// --------------- imprimir tabla inventario
function contenido_imprimir(){
	window.location.href=("../pages/resultado_imprimir.html");
}