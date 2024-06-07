import { Player } from "../player";
import { PlayerData } from "../player-data";

export class InitiateArenaBattleRequest {
    player1: PlayerData;
    player2: PlayerData;
    constructor(reqJson: any) {
        this.player1 = new PlayerData(new Player(reqJson.player1._playerInfo._playerName), reqJson.player1._health, reqJson.player1._strength, reqJson.player1._attack);
        this.player2 = new PlayerData(new Player(reqJson.player2._playerInfo._playerName), reqJson.player2._health, reqJson.player2._strength, reqJson.player2._attack);
    }
}