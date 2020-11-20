<?php
require_once 'Lobby.php';

try {
	if (isset($_GET["lobbyID"])){
		$lobby = new Lobby($_GET["lobbyID"]);
		$lobby->startGame();
		echo json_encode(true);

	} else {
		throw new Exception("You must supply a lobby ID");
	}

} catch (Exception $e) {
	echo json_encode(array("error"=>$e->getMessage()));
} finally {
	unset($lobby);	
}

?>