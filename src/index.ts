import { MagicalArena } from "./modals/magical-arena";
import { Player } from "./modals/player";
import { PlayerData } from "./modals/player-data";

// Create player data for Alice and Bob
const alice = new PlayerData(new Player('Alice'), 50, 5, 10); // Player with name Alice, health 50, strength 5, attack 10
const bob = new PlayerData(new Player('Bob'), 100, 10, 5);   // Player with name Bob, health 100, strength 10, attack 5

// Create a magical arena with Alice and Bob
const magicalArena = new MagicalArena(alice, bob);

// Start the match in the magical arena
magicalArena.startMatch();

// Note: Since the `startMatch` method contains the logic to continue the match until one of the players is defeated,
//       it will run until one of the players' health drops to zero or below, determining the winner of the match.