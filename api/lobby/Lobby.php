<?php
require_once '../player/Player.php';
require_once '../game/Game.php';
/**
 * 
 */
class Lobby {
	private $uuid;
	private $lobby;
	private $player;
	private $game;

	function __construct($lobbyUUID) {
		$this->player = new Player();

		$this->uuid = $lobbyUUID;

		if (file_exists("../../store/lobby/$lobbyUUID.json")) {
			$this->lobby = json_decode(file_get_contents('../../store/lobby/'.$this->uuid.".json"), true);
			if (isset($this->lobby["gameID"])) {
				$this->game = new Game($this->lobby["gameID"]);
			}
		}
	}

	private function checkLobbyExists(){
		return isset($this->lobby);
	}

	private function checkPlayerInLobby(){
		return isset($this->lobby["players"][$this->player->getUUID()]);
	}

	private function checkPlayerIsGameMaster(){
		if (isset($this->lobby["players"][$this->player->getUUID()]["isGameMaster"])) {
			return $this->lobby["players"][$this->player->getUUID()]["isGameMaster"];			
		} else {
			return false;
		}
	}

	public function setName($name) {
		if ($this->checkLobbyExists()) {
			if ($this->checkPlayerIsGameMaster()) {
				$this->lobby["name"] = $name;
			} else {
				throw new Exception("You are not authorised to change the room name");
			}
		} else {
			throw new Exception("This lobby does not exist");
		}
	}

	public function createLobby() {
		if ($this->checkLobbyExists()) {
			throw new Exception("Lobby already exists");
		} else {
			$this->lobby = array("name"=>"Untitled Lobby", "id"=>$this->uuid, "timeCreation"=>time(), "players"=>array(),"lobbyOptions"=>array("maxPlayers"=>16, "lobbyLocked"=>false), "gameOptions"=>array("imageSplit"=>"horizontal", "allowImageUploads"=>false, "gameTime"=>600, "imageURL"=>""), "gameID"=>"", "gameState"=>"setup");
		}
	}

	public function joinLobby() {
		if ($this->checkLobbyExists()) {
			if ($this->checkPlayerInLobby()) {
				throw new Exception("You are already in this lobby");
			} else {
				//Check if the lobby is empty
				$this->lobby["players"][$this->player->getUUID()] = array();
				if (sizeof($this->lobby["players"]) == 1) {
					$this->lobby["players"][$this->player->getUUID()]["isGameMaster"] = true;
				} else {

				}
			}
		} else {
			throw new Exception("You are trying to join a lobby that does not exist");
		}
	}

	public function getState() {
		if ($this->checkLobbyExists()){
			if ($this->checkPlayerInLobby()) {
				$returnArray = $this->lobby;
				foreach ($returnArray["players"] as $playerID => $playerInfo) {
					if ($playerID == $this->player->getUUID()) {
						$returnArray["players"][$playerID]["isYou"] = true;
					} else {
						$returnArray["players"][$playerID]["isYou"] = false;
					}
					if (!isset($returnArray["players"][$playerID]["isGameMaster"])) {
						$returnArray["players"][$playerID]["isGameMaster"] = false;
					}
					if (isset($this->game) && $this->lobby["gameState"] != "setup") {
						$returnArray["gameStateUpdate"] = $this->game->getState();
					}
				}
				return $returnArray;
			} else {
				throw new Exception("You cannot get the state of a lobby you are not part of");
			}
		} else {
			throw new Exception("You are trying to get the state of a non-existant lobby");
		}
	}

	public function setGameOptions($option, $value) {
		if ($this->checkLobbyExists()) {
			if ($this->checkPlayerInLobby()) {
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

	public function startGame() {
		if ($this->checkLobbyExists()) {
			if ($this->checkPlayerInLobby()) {
				if ($this->checkPlayerIsGameMaster()) {
					if (isset($this->lobby["gameOptions"]["imageURL"])) {
						switch ($this->lobby["gameState"]) {
							case 'setup':
							case 'finished':
								$gameUUID = uniqid();
								$this->game = new Game($gameUUID);

								$this->game->startGame($this->lobby);

								$this->lobby["gameID"] = $gameUUID;
								$this->lobby["gameState"] = "running";
								break;
							
							case 'running':
								throw new Exception("A game is currently running, please end the game before starting a new one");						
								break;

							default:
								throw new Exception("Serious: The game state is unknown");
								break;
						}				
					} else {
						throw new Exception("You must set an image url");
					}
				} else {
					throw new Exception("You must be the Game Master to start a game");					
				}
			}else {
				throw new Exception("You cannot start a game if you are not in the lobby");				
			}
		} else {
			throw new Exception("That lobby does not exist");
			
		}
	}
	
	public function endGame(){
		if ($this->checkLobbyExists()) {
			if ($this->checkPlayerInLobby()) {
				if (isset($this->game)) {
					switch ($this->lobby["gameState"]) {
						case 'finished':
							if ($this->checkPlayerIsGameMaster()) {
								//end game
								$this->lobby["gameState"]="finished";
								$this->game->endGame();
								return true;
							} else {
								//check time
								if (time() >= $this->game["timeEnd"]) {
									$this->lobby["gameState"]="finished";
									$this->game->endGame();
									return true;
								}
								return false;
							}
							break;

						case 'setup':
							throw new Exception("You cannot end a game that hasn't started");
							break;

						case 'finished':
							throw new Exception("This game has already finished");
							break;
							
						default:
							throw new Exception("Serious: Game State unknown");
							break;
					}
				} else {
					throw new Exception("There is no game currently running in this lobby");					
				}
			} else {
				throw new Exception("You must be in the lobby to end the game");
			}
		} else {
			throw new Exception("This lobby does not exist");
		}
	}

	function __destruct(){
		$this->lobby["players"][$this->player->getUUID()]["lastSeen"] = time();
		unset($this->player);

		if (isset($this->game)) {
			unset($this->game);
		}

		if ($this->checkLobbyExists()) {
			file_put_contents("../../store/lobby/".$this->uuid.".json", json_encode($this->lobby));
		}
	}
}




?>