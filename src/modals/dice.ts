export class Dice {
    constructor() { }
    roll(): number {
        return Math.floor(Math.random() * 6) + 1;
    }
}