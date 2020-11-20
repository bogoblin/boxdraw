<?php
require_once 'Lobby.php';

try {
	$lobby = new Lobby($_GET["lobbyID"]);

	echo json_encode($lobby->getState());

} catch (Exception $e) {
	echo json_encode(array("error"=>$e->getMessage()));
} finally {
	unset($lobby);	
}




?>