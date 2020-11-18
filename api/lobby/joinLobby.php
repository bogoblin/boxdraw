<?php
require_once 'Lobby.php';

try {
	$lobby = new Lobby($_GET["lobbyID"]);

	$lobby->joinLobby();

	echo json_encode(true);

} catch (Exception $e) {
	echo json_encode(array("error"=>$e->getMessage()));
} finally {
	unset($lobby);	
}


?>