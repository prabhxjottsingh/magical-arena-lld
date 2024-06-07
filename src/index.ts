import { BattleHandler } from "./handler/battle-handler";
import { MagicalArena } from "./modals/magical-arena";
import { Player } from "./modals/player";
import { PlayerData } from "./modals/player-data";
import { InitiateArenaBattleRequest } from "./modals/requests/initiate-arena-battle-request";

let battleHandler = new BattleHandler();

export const initiateArenaBattle = async (reqJson: string) => {
    try {
        const startBattleReq = new InitiateArenaBattleRequest(JSON.parse(reqJson));
        battleHandler.initiateBattle(startBattleReq);
    } catch (error) {
        console.error("Error in initiating the ArenaBattle: ", error);
        throw error;
    }

};

const reqJson: InitiateArenaBattleRequest = {
    player1: new PlayerData(new Player("Alice"), 100, 10, 10),
    player2: new PlayerData(new Player("Bob"), 100, 10, 10)
};

initiateArenaBattle(JSON.stringify(reqJson));