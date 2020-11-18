<?php
require_once '../player/Player.php';
/**
 * 
 */
class Lobby {
	private $uuid;
	private $lobby;
	private $player;
	
	function __construct($lobbyUUID) {
		$this->player = new Player();

		$this->uuid = $lobbyUUID;

		if (file_exists("../../store/lobby/$lobbyUUID.json")) {
			$this->lobby = json_decode(file_get_contents('../../store/lobby/'.$this->uuid.".json"), true);
		}
	}

	private function lobbyExists(){
		if (isset($this->lobby)) {
			return true;
		} else {
			throw new Exception("This lobby does not exist");
		}
	}


	public function setName($name) {
		$this->lobbyExists();
		//Is it the gameMaster trying to change the name?
		if ($this->lobby["players"][$this->player->getUUID()]["gameMaster"]) {
			$this->lobby["name"] = $name;
		} else {
			var_dump($this->lobby);
			throw new Exception("You are not authorised to change the room name");
		}
	}

	public function createLobby(){
		//Check the lobby already exists, handled in constructor
		if (!isset($this->lobby)) {
			$this->lobby = array("name"=>"Untitled Lobby", "id"=>$this->uuid, "creationTime"=>time(), "players"=>array(), "gameOptions"=>array("imageSplit"=>"horizontal", "allowUploads"=>false, "gameTime"=>600), "gameID"=>uniqid(), "gameState"=>"setup");
		} else {
			throw new Exception("Lobby already exists");
		}
	}

	public function joinLobby() {
		$this->lobbyExists();

		//Check not already in lobby
		foreach ($this->lobby["players"] as $playerUUID => $playerInfo) {
			if ($this->player->getUUID() == $playerUUID) {
				throw new Exception("You are already in this lobby");
			}
		}

		//Check if the lobby is empty
		if (sizeof($this->lobby["players"]) == 0) {
			$this->lobby["players"][$this->player->getUUID()] = array("gameMaster"=>true);
		} else {
			$this->lobby["players"][$this->player->getUUID()] = array();
		}
	}

	public function getState() {
		$this->lobbyExists();

		//TODO: check they're in lobby
		return $this->lobby;
	}

	public function setGameOptions($option, $value) {}

	public function newGame(){}
	
	function __destruct(){
		$this->lobby["players"][$this->player->getUUID()]["lastSeen"] = time();
		unset($this->player);
		if ($this->lobbyExists()) {
			file_put_contents("../../store/lobby/".$this->uuid.".json", json_encode($this->lobby));
		}
	}
}




?>