import { initiateArenaBattle } from "..";
import { constants } from "../constants";
import { ApiResponse } from "../modals/api-response";
import { Player } from "../modals/player";
import { PlayerData } from "../modals/player-data";
import { InitiateArenaBattleRequest } from "../modals/requests/initiate-arena-battle-request";


describe('initiateArenaBattle', () => {
    it('should initiate a battle successfully', async () => {
        const reqJson: InitiateArenaBattleRequest = {
            player1: new PlayerData(new Player("Alice"), 10, 10, 10),
            player2: new PlayerData(new Player("Bob"), 100, 10, 10)
        };

        const response: ApiResponse = await initiateArenaBattle(JSON.stringify(reqJson));
        expect(response.statusCode).toBe(constants.SUCCESS.STATUS_CODE);
        expect(response.body).toBe(constants.SUCCESS.MESSAGE);
    });

    it('should initiate a battle successfully', async () => {
        const reqJson: InitiateArenaBattleRequest = {
            player1: new PlayerData(new Player("Corey"), 1000, 40, 20),
            player2: new PlayerData(new Player("Wheat"), 100, 50, 10)
        };

        const response: ApiResponse = await initiateArenaBattle(JSON.stringify(reqJson));
        expect(response.statusCode).toBe(constants.SUCCESS.STATUS_CODE);
        expect(response.body).toBe(constants.SUCCESS.MESSAGE);
    });

    it('should return error response on failure', async () => {
        const invalidReqJson = "{ invalid json }";

        const response: ApiResponse = await initiateArenaBattle(invalidReqJson);
        expect(response.statusCode).toBe(constants.ERRORS.INTERNAL_SERVER_ERROR.STATUS_CODE);
        expect(response.body).toBe(constants.ERRORS.INTERNAL_SERVER_ERROR.MESSAGE);
    });
});
