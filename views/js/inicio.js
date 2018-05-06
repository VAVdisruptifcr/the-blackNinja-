/*=============================================
=         Métodos del objeto inicio          =
=============================================*/
var inicio = {
	/*=============================================
	=         Métodos del objeto inicio          =
	=============================================*/
	iniciar: function() {

		var identificador = "22222";
		var primer_nombre = "Julio";
		var foto = "views/img/intro/julio.png";

		var xhr = new XMLHttpRequest();
		var url = "views/ajax/usuarios.php";
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xhr.send("identificador="+identificador+"& primer_nombre="+primer_nombre+"& foto="+foto);

		xhr.onreadystatechange = function(){

			if((xhr.readyState == 4) && (xhr.status == 200)){

				console.log("xhr.responseText", xhr.responseText)
			}
		}
	}
}
