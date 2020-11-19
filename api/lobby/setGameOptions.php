<?php
require_once 'Lobby.php';

try {
	if (isset($_GET["optionName"])){
		if (isset($_GET['optionValue'])) {
			$lobby->setGameOptions($_GET["optionName"], $_GET["optionValue"])
			echo json_encode(true);
		} else {
			throw new Exception("You must supply an optionValue");
		}
	} else {
		throw new Exception("You must supply an optionName");
	}

} catch (Exception $e) {
	echo json_encode(array("error"=>$e->getMessage()));
} finally {
	unset($lobby);	
}

?>