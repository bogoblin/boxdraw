<?php
require_once 'Lobby.php';

try {
	$lobbyUUID = uniqid();
	$lobby = new Lobby($lobbyUUID);

	$lobby->createLobby();
	$lobby->joinLobby();

	if (isset($_GET["name"])) {
		$lobby->setName($_GET["name"]);
		
	}
	echo json_encode(array("id"=>$lobbyUUID));

} catch (Exception $e) {
	echo json_encode(array("error"=>$e->getMessage()));
} finally {
	unset($lobby);	
}

?>