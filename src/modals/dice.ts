export class Dice {
    constructor() { }
    /**
     * Rolls the dice and returns a random number between 1 and 6.
     * @returns A random number between 1 and 6 representing the result of the dice roll.
     */
    roll(): number {
        // Generate a random number between 1 and 6
        return Math.floor(Math.random() * 6) + 1;
    }
}