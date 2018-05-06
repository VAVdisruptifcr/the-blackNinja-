<?php

require_once "conexion.php";

class GestorUsuariosModel{

	// ==== Método para Guardar Usuario === //
	static public function guardarUsuariosModel($datosModel){

			$stmt = Conexion::conectar()->prepare("INSERT INTO usuarios(identificador, primer_nombre,  foto) VALUES (:identificador, :primer_nombre, :foto)");

			$stmt->bindParam(":identificador", $datosModel["identificador"], PDO::PARAM_INT);
			$stmt->bindParam(":primer_nombre", $datosModel["primer_nombre"], PDO::PARAM_STR);
			$stmt->bindParam(":foto", $datosModel["foto"], PDO::PARAM_STR);

			if($stmt->execute()){
				return "ok";
			} else {
				return "No conexion a mysql";
			}

			$stmt->close();
	}

}