import { Dice } from "./dice";
import { PlayerData } from "./player-data";

export class MagicalArena {
    private _player1: PlayerData;
    private _player2: PlayerData;
    private _dice: Dice;
    /**
     * Constructs a new MagicalArena instance.
     * @param player1 - The data of the first player.
     * @param player2 - The data of the second player.
     */
    constructor(player1: PlayerData, player2: PlayerData) {
        this._player1 = player1;
        this._player2 = player2;
        this._dice = new Dice();
    }
}