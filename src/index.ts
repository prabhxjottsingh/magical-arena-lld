import { constants } from "./constants";
import { BadRequestError } from "./errors/bad-request-error";
import { BattleHandler } from "./handler/battle-handler";
import { ApiResponse } from "./modals/api-response";
import { MagicalArena } from "./modals/magical-arena";
import { Player } from "./modals/player";
import { PlayerData } from "./modals/player-data";
import { InitiateArenaBattleRequest } from "./modals/requests/initiate-arena-battle-request";

let battleHandler = new BattleHandler();


const successResponse = (jsonResponse: any): ApiResponse => {
    const response: ApiResponse = {
        body: "",
        statusCode: 0
    };
    if (!jsonResponse) {
        jsonResponse = constants.SUCCESS.MESSAGE;
    }
    response.body = jsonResponse;
    response.statusCode = constants.SUCCESS.STATUS_CODE;
    return response;
};

const errorResponse = (error: any): ApiResponse => {
    const response: ApiResponse = {
        body: constants.ERRORS.INTERNAL_SERVER_ERROR.MESSAGE,
        statusCode: constants.ERRORS.INTERNAL_SERVER_ERROR.STATUS_CODE
    };
    if (!error) {
        response.body = JSON.stringify(constants.ERRORS.INTERNAL_SERVER_ERROR.MESSAGE);
        response.statusCode = constants.ERRORS.INTERNAL_SERVER_ERROR.STATUS_CODE;
    } else if (error instanceof BadRequestError) {
        response.statusCode = constants.ERRORS.BAD_REQUEST.STATUS_CODE;
        response.body = constants.ERRORS.BAD_REQUEST.MESSAGE;
    }
    return response;
};

export const initiateArenaBattle = async (reqJson: string): Promise<ApiResponse> => {
    try {
        const startBattleReq = new InitiateArenaBattleRequest(JSON.parse(reqJson));
        battleHandler.initiateBattle(startBattleReq);
        return successResponse(null);
    } catch (error) {
        return errorResponse(error);
    }

};