import {ControllerManager} from "../controller/ControllerManager";

/**
 *
 */
export class Square {
    public hit: string = ControllerManager.HitText;
    public miss: string = ControllerManager.MissText;
    public squareState: string = ControllerManager.DefaultStateText;
    public containsShip: string = ControllerManager.ShipOnSquare;

    /**
     *
     */
    constructor() {
    }

    /**
     * Print if it's a hit or a miss.
     */
    public printSquareState(): string {
        return this.squareState;
    }

    /**
     *
     */
    public squareHit(): void {
        this.squareState = this.hit;
    }

    /**
     *
     */
    public checkIfItIsAHit(): boolean {
        return this.squareState == this.containsShip;
    }

    /**
     *
     */
    public squareMiss(): void {
        this.squareState = this.miss;
    }

    /**
     * If a ship's part is on this square.
     */
    public shipOnSquare(): void {
        this.squareState = this.containsShip;
    }
}