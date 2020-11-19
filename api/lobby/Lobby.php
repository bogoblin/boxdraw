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

	private function checkDoesLobbyExist(){
		if (isset($this->lobby)) {
			return true;
		} else {
			return false;
			// throw new Exception("This lobby does not exist");
		}
	}

	private function checkPlayerInLobby(){
		foreach ($this->lobby["players"] as $playerUUID => $playerInfo) {
			if ($this->player->getUUID() == $playerUUID) {
				return true;
			}
		}
		return false;
	}

	private function checkPlayerIsGameMaster(){
		if ($this->lobby["players"][$this->player->getUUID()]["gameMaster"]) {
			return true;
		} else {
			return false;
			// throw new Exception("You are not the Game Master");
			
		}
	}

	public function setName($name) {
		if ($this->checkDoesLobbyExist()) {
			if ($this->checkPlayerIsGameMaster()) {
				$this->lobby["name"] = $name;
			} else {
				throw new Exception("You are not authorised to change the room name");
			}
		} else {
			throw new Exception("This lobby does not exist");
		}
	}

	public function createLobby(){
		//Check the lobby already exists, handled in constructor
		if ($this->checkDoesLobbyExist()) {
			throw new Exception("Lobby already exists");
		} else {
			$this->lobby = array("name"=>"Untitled Lobby", "id"=>$this->uuid, "creationTime"=>time(), "players"=>array(), "gameOptions"=>array("imageSplit"=>"horizontal", "allowUploads"=>false, "gameTime"=>600), "gameID"=>uniqid(), "gameState"=>"setup");
		}
	}

	public function joinLobby() {
		if ($this->checkDoesLobbyExist()) {
			//Check not already in lobby
			if ($this->checkPlayerInLobby()) {
				throw new Exception("You are already in this lobby");
			} else {
				//Check if the lobby is empty
				if (sizeof($this->lobby["players"]) == 0) {
					$this->lobby["players"][$this->player->getUUID()] = array("gameMaster"=>true);
				} else {
					$this->lobby["players"][$this->player->getUUID()] = array();
				}
			}
		} else {
			throw new Exception("You are trying to join a lobby that does not exist");
		}
	}

	public function getState() {
		if ($this->checkDoesLobbyExist()){
			if ($this->checkPlayerInLobby()) {
				return $this->lobby;
			} else {
				throw new Exception("You cannot get the state of a lobby you are not part of", 1);
			}
		} else {
			throw new Exception("You are trying to get the state of a non-existant lobby");
		}
	}

	public function setGameOptions($option, $value) {
		if ($this->checkDoesLobbyExist()) {
			if ($this->checkPlayerInLobby() {
				if ($this->checkPlayerIsGameMaster()) {
					if (isset($this->lobby["gameOptions"][$option])) {
						$this->lobby["gameOptions"][$option] = $value;			
					} else {
						throw new Exception("The option you are trying to set does not exist");
					}
				} else {
					throw new Exception("You must be the Game Master to set game options");
				}
			} else {
				throw new Exception("You cannot set game options on a lobby you're not part of");
				
			}
		} else {
			throw new Exception("You cannot set game options on a lobby that doesn't exist");	
		}
	}

	public function newGame() {}
	
	function __destruct(){
		$this->lobby["players"][$this->player->getUUID()]["lastSeen"] = time();
		unset($this->player);
		if ($this->checkDoesLobbyExist()) {
			file_put_contents("../../store/lobby/".$this->uuid.".json", json_encode($this->lobby));
		}
	}
}




?>