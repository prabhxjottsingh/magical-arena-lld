import { MagicalArena } from "../modals/magical-arena";
import { InitiateArenaBattleRequest } from "../modals/requests/initiate-arena-battle-request";

export class BattleHandler {
    constructor() { }
    public async initiateBattle(reqJson: InitiateArenaBattleRequest): Promise<void> {
        // Create a magical arena with player1 and player2
        const magicalArena = new MagicalArena(reqJson.player1, reqJson.player2);

        // Start the match in the magical arena
        magicalArena.startMatch();

        // Note: Since the `startMatch` method contains the logic to continue the match until one of the players is defeated,
        //       it will run until one of the players' health drops to zero or below, determining the winner of the match.
    }
}