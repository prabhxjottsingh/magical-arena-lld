import { Dice } from "./dice";
import { PlayerData } from "./player-data";

export class MagicalArena {
    private _player1: PlayerData;
    private _player2: PlayerData;
    private _attackingDie: Dice;
    private _defendingDie: Dice;
    /**
     * Constructs a new MagicalArena instance.
     * @param player1 - The data of the first player.
     * @param player2 - The data of the second player.
     */
    constructor(player1: PlayerData, player2: PlayerData) {
        this._player1 = player1;
        this._player2 = player2;
        this._attackingDie = new Dice();
        this._defendingDie = new Dice();
    }

    /**
     * Starts the match between two players in the magical arena.
     * The match continues until one of the players is defeated.
     */
    startMatch(): void {
        // Continue the match until one of the players is defeated
        while (this._player1.isAlive() && this._player2.isAlive()) {
            // Determine which player attacks and which one defends based on health comparison
            const [attackingPlayer, defendingPlayer] = this._player1.playerHealth > this._player2.playerHealth
                ? [this._player2, this._player1]  // If player 2 has lower health, player 1 attacks
                : [this._player1, this._player2]; // Otherwise, player 2 attacks

            // Perform the attack between the two players
            this.performAttack(attackingPlayer, defendingPlayer);
        }
        // Once the match is over, show the winning player
        this.showWinningPlayer();
    }

    /**
     * Performs an attack between the attacking player and the defending player.
     * @param attackingPlayer - The player initiating the attack.
     * @param defendingPlayer - The player defending against the attack.
     */
    performAttack(attackingPlayer: PlayerData, defendingPlayer: PlayerData): void {
        // Roll dice to determine attack and defense outcomes
        const attackingDieOutcome = this._attackingDie.roll();
        const defendingDieOutcome = this._defendingDie.roll();

        // Calculate attacking and defending powers
        const attackingPower = attackingPlayer.attack * attackingDieOutcome;
        const defendingPower = defendingPlayer.strength * defendingDieOutcome;

        console.log(`${attackingPlayer.playerInfo.playerName} attacks with a power of ${attackingPower}.`);
        console.log(`${defendingPlayer.playerInfo.playerName} defends with a power of ${defendingPower}.`)
        console.log(`Current health of ${defendingPlayer.playerInfo.playerName}: ${defendingPlayer.playerHealth}`)

        // Reduce the defending player's health based on the attack
        defendingPlayer.reduceHealth(attackingPower, defendingPower);

        console.log(`Health of ${defendingPlayer.playerInfo.playerName} after the attack: ${defendingPlayer.playerHealth}\n`);
    }


    /**
     * Shows the winning player of the match.
     */
    showWinningPlayer(): void {
        // Determine the winning player
        const winningPlayer = this._player1.isAlive() ? this._player1 : this._player2;

        // Display the winning player's name and remaining health
        console.log(`The winning player is ${winningPlayer.playerInfo.playerName} with ${winningPlayer.playerHealth} health remaining.`);
    }
}