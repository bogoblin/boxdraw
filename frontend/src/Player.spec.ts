import {Player} from "./Player";
import * as assert from "assert";

describe('Unpacks expected player data', () => {
    const tp = {
        name: "Ben",
        isGameMaster: false,
        isYou: true
    };
    const player = new Player(tp);
    it('should return player name', () => {
        assert.strictEqual(player.name, "Ben");
    });
    it('should return correct booleans', () => {
        assert.strictEqual(player.isGameMaster, false);
        assert.strictEqual(player.isYou, true);
    })
})
