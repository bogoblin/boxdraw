<?php
/**
 * 
 */
class Player {
	private $uuid;
	private $player;

	function __construct()	{
		session_start();

		if (!isset($_SESSION["playerID"])) {
			$_SESSION["playerID"] = uniqid();
		}

		$this->uuid = $_SESSION["playerID"];

		if (file_exists('../../store/player/'.$this->uuid.'.json')) {
			$this->player = json_decode(file_get_contents('../../store/player/'.$this->uuid.".json"), true);
		} else {
			$this->player = array("name"=>"New Player", "gamesCompleted"=>0, "lastSeen"=>time());
		}
	}


	public function getUUID() {
		return $this->uuid;
	}

	public function setName($name) {
		$this["name"] = $name;
	}

	function __destruct(){
		$this->player["lastSeen"] = time();
		file_put_contents("../../store/player/".$this->uuid.".json", json_encode($this->player));
	}
}


?>