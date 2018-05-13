/*=============================================
VARIABLES DE LA LÍNEA DE TIEMPO
=============================================*/
var frame = window.resquestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.msRequestAnimationFrame;

var animacion;

/*=============================================
VARIABLES DEL CANVAS
=============================================*/
var canvas;
var ctx;

/*=============================================
PROPIEDADES DE LOS OBJETOS	
=============================================*/
var datos = {
	id: 0,
	nivel: null,
	plano3: null,
	plano2: null,
	plano1: null,
	plano0: null,
	texturaPlataforma: null,
	bloques:[],
	imgJugador: null,
	jugadorX: 70,
	jugadorY: 200,
	jugadorAncho: 50,
	jugadorAlto: 50,
	detalles: null,
	bloquesDetalles:[],
	izquierda: false,
	derecha: false,
	movimiento: 0,
	velocidad: 5,
	desplazamientoEscenario: 0,
	limiteEscenario: -1995,
	movimientoJugador: 0,
	plataforma: [],
	gravedad: 0,
	limiteGravedad: 20,
	peso: .5,
	salto: false,
	alturaSalto: -10,
	Sprite_X: 0,
	cicloSprite: 0,
	reset: false
}