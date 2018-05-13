<?php

require_once "conexion.php";

class GestorUsuariosModel{
	#Método para Encontrar los Usuarios ya registrados
	#====---------------------------------------------
	static public function seleccionarUsuariosModel($datosModel){

		$statement = Conexion::conectar()->prepare('SELECT id, primer_nombre, foto, nivel1, puntaje_nivel1, nivel2, puntaje_nivel2, nivel3, puntaje_nivel3 FROM usuarios WHERE identificador = :identificador');

		$statement->bindParam(":identificador", $datosModel["identificador"], PDO::PARAM_INT);

		$statement->execute();
		return $statement->fetch();

		$statement->close();

	}


	#Método para Guardar Usuario ===
	#====---------------------------
	static public function guardarUsuariosModel($datosModel){

		$statement = Conexion::conectar()->prepare('INSERT INTO usuarios(identificador, primer_nombre, foto, nivel1) VALUES (:identificador, :primer_nombre, :foto, :nivel1)');

		$statement->bindParam(":identificador", $datosModel["identificador"], PDO::PARAM_INT);
		$statement->bindParam(":primer_nombre", $datosModel["primer_nombre"], PDO::PARAM_STR);
		$statement->bindParam(":foto", $datosModel["foto"], PDO::PARAM_STR);
		$statement->bindParam(":nivel1", $datosModel["nivel1"], PDO::PARAM_STR);

		if ($statement->execute()){

			return "ok";
		
		} else {
		
			return "Error de conexion";
		
		}

		$statement->close();
	}

	#Método para seleccionar los puntajes
	#====---------------------------------------------
	static public function puntajesNivelModel($datos){
		$stmt = Conexion::conectar()->prepare("SELECT primer_nombre, foto, $datos FROM usuarios ORDER BY $datos DESC LIMIT 3");

		$stmt -> execute();
		return $stmt -> fetchAll();
		$stmt -> close();
	}

	#Guardando los puntajes
	#====---------------------------------------------
	static public function guardarPuntajesModel($datosModel, $tabla){

		$numero_nivel = $datosModel["numeroNivel"];
		$puntaje_nivel = $datosModel["puntaje_nivel"];

		$stmt = Conexion::conectar()->prepare("UPDATE $tabla SET $numero_nivel = :nivel, $puntaje_nivel = :puntaje WHERE id = :id");

		$stmt->bindParam(":nivel", $datosModel["nivel"], PDO::PARAM_STR);
		$stmt->bindParam(":puntaje", $datosModel["puntaje"], PDO::PARAM_STR);
		$stmt->bindParam(":id", $datosModel["id"], PDO::PARAM_INT);

		if ($stmt->execute()){

				return "ok";
			
			} else {
			
				return "Error de conexion";
			
			}

			$stmt->close();
	}

	#SELECCIÓN PUNTAJES ACTUALIZADOS
	#====---------------------------------------------
	static public function seleccionarPuntajeModel($datosModel, $tabla){

		$stmt = Conexion::conectar()->prepare("SELECT nivel1, puntaje_nivel1, nivel2, puntaje_nivel2, nivel3, puntaje_nivel3 FROM $tabla WHERE id= :id");
		
		$stmt->bindParam(":id", $datosModel["id"], PDO::PARAM_INT);
		
		$stmt->execute();
		
		return $stmt->fetch();
		
		$stmt->close();
	}
}