import { MagicalArena } from "./modals/magical-arena";
import { Player } from "./modals/player";
import { PlayerData } from "./modals/player-data";

const alice = new PlayerData(new Player('Alice'), 50, 5, 10)
const bob = new PlayerData(new Player('Bob'), 100, 10, 5)
const magiclaArean = new MagicalArena(alice, bob);
magiclaArean.startMatch();