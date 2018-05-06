<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>NinjaJS || Juego de plataforma</title>
	<link rel="icon" href="views/img/intro/favicon.png">
	<link href="https://fonts.googleapis.com/css?family=Julee" rel="stylesheet">
	<link rel="stylesheet" href="views/css/estilo.css" media="">


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
			include "modules/ingreso.php";
		?>
		<canvas id="lienzo"></canvas>
	</div>

	<footer>
		<center>
			<p>Juego desarrollado por disruptif bajo instrucción de Tutos a tu alcance || <a href="#"> www.disruptifcr.com</a> || <a href="">www.tutorialesatualcance.com</a></p>
		</center>
	</footer>

<script src="views/js/inicio.js"></script>
</body>
</html>