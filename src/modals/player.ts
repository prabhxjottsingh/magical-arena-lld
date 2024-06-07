import { BadRequestError } from "../errors/bad-request-error";

export class Player {
    private _playerName: string;

    /**
     * Constructs a new Player instance.
     * @param playerName - The name of the player.
     * @throws Will throw an error if playerName is an empty string.
     */
    constructor(playerName: string) {
        if (!playerName || playerName.trim() === "") {
            throw new BadRequestError('Player name must be a non-empty string.');
        }
        this._playerName = playerName.trim();
    }

    /**
     * Gets the player's name.
     * @returns The player's name.
     */
    get playerName(): string {
        return this._playerName;
    }
}
