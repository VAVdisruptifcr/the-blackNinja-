<?php

class GestorUsuariosController {

	// ==== Método para Guardar Usuario === //
	static public function guardarUsuariosController($datos){

		$datosController = array("identificador" => $datos["identificador"], 
								"primer_nombre" => $datos["primer_nombre"],
								"foto" => $datos["foto"]);

		$respuesta = GestorUsuariosModel::guardarUsuariosModel($datosController);

		echo $respuesta;

	}


}