import { BadRequestError } from "../errors/bad-request-error";
import { Player } from "./player";

export class PlayerData {
    playerInfo: Player;
    private _health: number;
    private _strength: number;
    private _attack: number;

    /**
     * Constructs a new PlayerData instance.
     * @param playerInfo - Player object containing player information.
     * @param health - Initial health value of the player.
     * @param strength - Initial strength value of the player.
     * @param attack - Initial attack value of the player.
     * @throws Will throw an error if health, strength, or attack values are negative.
     */
    constructor(playerInfo: Player, health: number, strength: number, attack: number) {
        if (health < 0 || strength < 0 || attack < 0) {
            throw new BadRequestError('Health, strength, and attack values must be non-negative.');
        }

        this.playerInfo = playerInfo;
        this._health = health;
        this._strength = strength;
        this._attack = attack;
    }

    /**
     * Gets the current health of the player.
     * @returns The current health value.
     */
    get playerHealth(): number {
        return this._health;
    }

    /**
     * Gets the current strength of the player.
     * @returns The current strength value.
     */
    get strength(): number {
        return this._strength;
    }

    /**
     * Gets the current attack value of the player.
     * @returns The current attack value.
     */
    get attack(): number {
        return this._attack;
    }

}
