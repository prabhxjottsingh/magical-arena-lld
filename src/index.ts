import { constants } from "./constants";
import { BattleHandler } from "./handler/battle-handler";
import { MagicalArena } from "./modals/magical-arena";
import { Player } from "./modals/player";
import { PlayerData } from "./modals/player-data";
import { InitiateArenaBattleRequest } from "./modals/requests/initiate-arena-battle-request";

let battleHandler = new BattleHandler();

const successResponse = (jsonResponse: any) => {
    const response = {
        body: "",
        statusCode: 0
    };
    if (!jsonResponse) {
        jsonResponse = constants.SUCCESS_REPONSE;
    }
    response.body = jsonResponse;
    response.statusCode = 200;
};

const errorResponse = (error: any) => {
    const response = {
        body: "",
        statusCode: 0
    };
    if (!error) {
        error = constants.ERROR_REPONSE;
    }
    response.body = error;
    response.statusCode = 500;
}

export const initiateArenaBattle = async (reqJson: string) => {
    try {
        const startBattleReq = new InitiateArenaBattleRequest(JSON.parse(reqJson));
        battleHandler.initiateBattle(startBattleReq);
        successResponse(null);
    } catch (error) {
        console.error("Error in initiating the ArenaBattle: ", error);
        errorResponse(error);
    }

};

const reqJson: InitiateArenaBattleRequest = {
    player1: new PlayerData(new Player("Alice"), 100, 10, 10),
    player2: new PlayerData(new Player("Bob"), 100, 10, 10)
};

initiateArenaBattle(JSON.stringify(reqJson));