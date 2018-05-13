<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>NinjaJS || Juego de plataforma</title>
	<link rel="icon" href="views/img/intro/favicon.png">
	<link href="https://fonts.googleapis.com/css?family=Julee" rel="stylesheet">
	<link rel="stylesheet" href="views/css/estilo.css" media="">
	
	<script src="views/js/screenfull.min.js"></script>

</head>
<body>
	<!--=====================================
=            Pantalla vertical           =
======================================-->
	<div id="vertical">
		
	</div>

<!--=====================================
=            MARCO del juego           =
======================================-->
	<div id="marco">
			
	</div>
<!--=====================================
=            DIV Contenedor           =
======================================-->
	<div id="contenedor">
<!-- /*  Incluyendo ingreso.php  */ -->
		<?php

			if(isset($_GET["validar"])){

				switch($_GET["validar"]){
					case "inicio":
					include "modules/inicio.php";
					break;
					case "salir":
					include "modules/salir.php";
					break;
					default:
					include "modules/ingreso.php"; 
				}
			}else{

				include "modules/ingreso.php";
				
			}

		?>
		<canvas id="lienzo"></canvas>
	</div>

	<footer>
		<center>
			<p>Juego desarrollado por disruptif bajo instrucción de Tutos a tu alcance || <a href="#"> www.disruptifcr.com</a> || <a href="">www.tutorialesatualcance.com</a></p>
		</center>
	</footer>

<script src="views/js/variables_y_propiedades.js"></script>
<script src="views/js/inicio.js"></script>
<script src="views/js/juego.js"></script>
<script src="views/js/lienzo.js"></script>
<script src="views/js/ampliarCanvas.js"></script>

</body>
</html>