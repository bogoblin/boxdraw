<?php
/**
 * 
 */
class Game {
	private $uuid;
	private $game;
	private $player;

	function __construct($gameUUID){
		$this->player = new Player();

		$this->uuid = $gameUUID;

		if (file_exists("../../store/game/$gameUUID.json")) {
			$this->game = json_decode(file_get_contents('../../store/game/'.$this->uuid.".json"), true);
		}
	}

	private function checkGameExists()	{
		if (isset($this->game)) {
			return true;
		} else {
			return false;
		}
	}

	private function checkPlayerInGame() {
		foreach ($this->game["players"] as $playerUUID => $playerInfo) {
			if ($this->player->getUUID() == $playerUUID) {
				return true;
			}
		}
		return false;
	}


	public function startGame($lobbyState) {
		if ($this->checkGameExists()) {
			throw new Exception("Game already exists");
		} else {
			$this->game = array("id"=>$this->uuid, "timeCreation"=>time(), "timeEnd"=>time()+$lobbyState["gameOptions"]["gameTime"], "gameOptions"=>$lobbyState["gameOptions"]);

			shuffle($lobbyState["players"]);
		}
	}

	public function getState() {
		$returnArray = $this->game;
		$returnArray["timeRemaining"] = $returnArray["timeEnd"]-time();
		return $returnArray;
	}


	public function addTime($time) {
		$this->game["timeEnd"] += $time;
	}
	
	public function uploadSection() {}
	public function getSection() {}
	public function endGame() {
		$this->game["timeEnd"] = time();
		$this->game->assembleImage();
	}

	public function assembleImage(){}

	function __destruct(){
		unset($this->player);
		if (isset($this->game)) {
			file_put_contents("../../store/game/".$this->uuid.".json", json_encode($this->game));
		}
	}
}
?>