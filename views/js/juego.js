/*=============================================
MÉTODOS DEL OBJETO JUEGO
=============================================*/

var juego = {

	teclado: function(){

	/*=============================================
	EVENTOS DEL TECLADO
	=============================================*/
	document.addEventListener("keydown", juego.oprimir);
	document.addEventListener("keyup", juego.soltar);
	
	},

	oprimir: function(tecla){
		tecla.preventDefault();
		if(tecla.keyCode == 37){datos.izquierda = true;}
		if(tecla.keyCode == 39){datos.derecha = true;}
		if(tecla.keyCode == 38){datos.salto = true;}
	},

	soltar: function(tecla){
		tecla.preventDefault();
		if(tecla.keyCode == 37){datos.izquierda = false; datos.imgJugador.src = "views/img/jugador/stop_left.png";}
		if(tecla.keyCode == 39){datos.derecha = false; datos.imgJugador.src = "views/img/jugador/stop_right.png";}
		if(tecla.keyCode == 38){datos.salto = false;}
	},

	tiempo: function(){

		/*=============================================
		LLAMANDO EL CANVAS
		=============================================*/
		lienzo.canvas();

		/*=============================================
		CICLO DEL SPRITE
		=============================================*/
		if(datos.cicloSprite >= 500){
			datos.cicloSprite = 0;
		}else{
			datos.cicloSprite+=20
		}
		
		for (var i = 0; i < datos.cicloSprite; 	i+=100) {
				
				if(datos.cicloSprite >= i){datos.Sprite_X = i;}

		}


		/*=============================================
		MOVIMIENTO HORIZONTAL ESCENARIO
		=============================================*/
		datos.desplazamientoEscenario += datos.movimiento;

		/*=============================================
		MOVIMIENTO HORIZONTAL JUGADOR
		=============================================*/
		if(datos.desplazamientoEscenario <= datos.limiteEscenario){

			datos.jugadorX += datos.movimientoJugador;
		}

		/*=============================================
		MOVIMIENTO HORIZONTAL PLATAFORMAS
		=============================================*/
		for (var i = 0; i < datos.plataforma.length; i++) {
			
			datos.plataforma[i].x += datos.movimiento;
		}

		/*=============================================
		MOV. IZQUIERDA
		=============================================*/
		if(datos.izquierda){

			// datos.imgJugador.src = "views/img/jugador/run_left.png";

			if( datos.desplazamientoEscenario >= 0){

				datos.movimiento = 0;

			}else if(datos.desplazamientoEscenario <= datos.limiteEscenario){

				if(datos.jugadorX <= 70){

					datos.movimiento = datos.velocidad;

				}else{

					datos.movimiento = 0;
					datos.movimientoJugador = -datos.velocidad;
				}

			}else{

				datos.movimiento = datos.velocidad;
			}

			if(datos.gravedad == 0){

				datos.imgJugador.src = "views/img/jugador/run_left.png";
			}
			if(datos.salto && datos.gravedad == 0){

				datos.imgJugador.src = "views/img/jugador/jump_left.png";
			}
		}

		/*=============================================
		MOV. DERECHA
		=============================================*/
		if(datos.derecha){

			// datos.imgJugador.src = "views/img/jugador/run_right.png";

			if(datos.desplazamientoEscenario <= datos.limiteEscenario){


				datos.movimiento = 0;
				datos.movimientoJugador = datos.velocidad;

			}else{

				datos.movimiento = -datos.velocidad;
			}

			if(datos.gravedad == 0){

				datos.imgJugador.src = "views/img/jugador/run_right.png";
			}
			if(datos.salto && datos.gravedad == 0){

				datos.imgJugador.src = "views/img/jugador/jump_right.png";
			}
		}

		/*=============================================
		DETENIENDO MOVIMIENTO ESCENARIO y MOV JUGADOR
		=============================================*/
		if(!datos.izquierda && !datos.derecha)
			{
				datos.movimiento = 0 ;
				datos.movimientoJugador = 0;
			}

		/*=============================================
		GRAVEDAD
		=============================================*/
		datos.jugadorY += datos.gravedad;

		if(datos.gravedad < datos.limiteGravedad){

			datos.gravedad += datos.peso;
		}

		/*=============================================
		COLICIONES CON PLATAFORMAS
		=============================================*/
		for (var i = 0; i < datos.plataforma.length; i++) {
			
			function colisionesPlataforma(){

				//no colisión con plataforma de arriba-A-abajo
				if((datos.jugadorY + datos.jugadorAlto) < datos.plataforma[i].y){return false;}

				//no colisión con plataforma de abajo-A-arriba
				if(datos.jugadorY > (datos.plataforma[i].y + datos.plataforma[i].alto)){return false;}

				//no colisión con plataforma de izquierda -a- derecha
				if((datos.jugadorX + datos.jugadorAncho) < datos.plataforma[i].x){return false;}

				//no colisión con plataforma de derecha-A-izquierda
				if(datos.jugadorX > (datos.plataforma[i].x + datos.plataforma[i].ancho)){return false;}
				
				return true;
			}

			colisionesPlataforma();

			//colisión con plataforma de Arriba -a- Abajo
			if(colisionesPlataforma() && (datos.jugadorY + datos.jugadorAlto) < datos.plataforma[i].y + datos.gravedad){

				datos.gravedad = 0;
				datos.jugadorY = datos.plataforma[i].y - datos.jugadorAlto;

			}

			//colisión con plataforma de Abajo --> Arriba 
			if(colisionesPlataforma() && datos.jugadorY - datos.gravedad > (datos.plataforma[i].y + datos.plataforma[i].alto)){

				datos.gravedad = 1;
				datos.jugadorY = datos.plataforma[i].y + datos.plataforma[i].alto;

			}

			if(datos.desplazamientoEscenario <= datos.limiteEscenario){

				//colisión con plataforma de Izquierda --> Derecha
				if(colisionesPlataforma() && (datos.jugadorX + datos.jugadorAncho) < datos.plataforma[i].x + datos.movimientoJugador){

					datos.movimientoJugador = 0;
					datos.jugadorX = datos.plataforma[i].x - datos.jugadorAncho;

				}

				//colisión con plataforma de Derecha -a-> Izquierda
				if(colisionesPlataforma() && datos.jugadorX - datos.movimientoJugador > (datos.plataforma[i].x + datos.plataforma[i].ancho)){

					datos.movimientoJugador = 0;
					datos.jugadorX = datos.plataforma[i].x + datos.plataforma[i].ancho;

				}
			}else{
				//colisión con plataforma de Izquierda --> Derecha
				if(colisionesPlataforma() && (datos.jugadorX + datos.jugadorAncho) < datos.plataforma[i].x - datos.movimiento){

					datos.movimiento = 0;
					datos.jugadorX = datos.plataforma[i].x - datos.jugadorAncho;

				}

				//colisión con plataforma de Derecha -a-> Izquierda
				if(colisionesPlataforma() && datos.jugadorX + datos.movimiento > (datos.plataforma[i].x + datos.plataforma[i].ancho)){

					datos.movimiento = 0;
					datos.jugadorX = datos.plataforma[i].x + datos.plataforma[i].ancho;

			}
			}

			

			/*=============================================
			SALTO
			=============================================*/
			if(datos.salto && datos.gravedad == 0 && datos.jugadorY == datos.plataforma[i].y - datos.jugadorAlto){

				datos.gravedad = datos.alturaSalto;
			}	
		}

		/*=============================================
		CAIDA DEL JUGADOR FUERA DEL ESCENARIO
		=============================================*/
		if(datos.jugadorY > 500){
			
			datos.reset = true;
		}
			/*=============================================
			RESETEAR EL NIVEL
			=============================================*/
			if(datos.reset){

				datos.reset = false;
				datos.gravedad = 0;
				datos.desplazamientoEscenario = 0;
				datos.movimiento= 0;
				datos.jugadorY = 200;
				datos.jugadorX = 70;

				if(datos.nivel == 1){

				var xhr_plataforma = new XMLHttpRequest();
				xhr_plataforma.open("GET", "views/js/json/plataformasNivel1.json", true);
				

				}

				if(datos.nivel == 2){

					var xhr_plataforma = new XMLHttpRequest();
					xhr_plataforma.open("GET", "views/js/json/plataformasNivel2.json", true);

				}

				if(datos.nivel == 3){

					var xhr_plataforma = new XMLHttpRequest();
					xhr_plataforma.open("GET", "views/js/json/plataformasNivel3.json", true); 
				}

				xhr_plataforma.send();

				xhr_plataforma.onreadystatechange = function(){

					if((xhr_plataforma.readyState == 4)&&(xhr_plataforma.status == 200)){

						datos.plataforma = JSON.parse(xhr_plataforma.responseText)
					}

				}


			}


			/*=============================================
			RESET DE LAS PLATAFORMAS
			=============================================*/

		/*=============================================
		EJECUTANDO LÍNEA DE TIEMPO
		=============================================*/

		animacion = frame(juego.tiempo);

		/*=============================================
		FINAL DE NIVEL
		=============================================*/
		if(datos.jugadorX >= 980){

			cancelAnimationFrame(animacion);

			var xhr = new XMLHttpRequest();
			var nivel = "ok";
			var puntaje = "200";
			var numeroNivel = datos.nivel;
			var id = datos.id;
			var url = "views/ajax/usuarios.php";
			xhr.open("POST", url, true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.send("nivel=" +nivel+ "& puntaje=" +puntaje+ "& numeroNivel=" +numeroNivel+ "& id="+id);

			xhr.onreadystatechange = function(){

				if((xhr.readyState == 4) && (xhr.status == 200)){

					console.log("xhr.responseText", xhr.responseText);

					if(xhr.responseText == "ok"){
						

						window.location = "inicio";
					
					}
				}
			}	
		}
	}

}