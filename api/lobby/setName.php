<?php
require_once 'Lobby.php';

try {
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