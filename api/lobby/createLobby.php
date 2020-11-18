<?php
require_once 'Lobby.php';

try {
	$lobby = new Lobby(uniqid());

	$lobby->createLobby();
	$lobby->joinLobby();

	if (isset($_GET["name"])) {
		$lobby->setName($_GET["name"]);
		
	}
	echo json_encode(true);

} catch (Exception $e) {
	echo json_encode(array("error"=>$e->getMessage()));
} finally {
	unset($lobby);	
}

?>