import {AbstractSimpleView} from "../../../abstractClasses/AbstractSimpleView";
import {SquareView} from "./SquareView";
import {BattleShipFacade} from '../../facade/BattleShipFacade'
import {RulerView} from "../ruler/RulerView";
import 'pixi.js'
import {Notifications} from "../../staticInformation/Notifications";
import {MediatorInformation} from "../../staticInformation/MediatorInformation";
import {GameSettings} from "../../staticInformation/GameSettings";

/**
 * Creates the grid.
 */
export class GridView extends AbstractSimpleView {
    private GridSquares: SquareView[][];
    public name = 'GridView';
    private maxShipsOnThisGrid: number = GameSettings.MaximumNumberOfShipsOnAGrid;
    private currentNumberOfShips: number = 0;
    private readonly _player: string;

    /**
     *
     * @param player
     */
    constructor(player: string) {
        super();
        this.name = this.name.concat(player);
        this._player = player;
        this.checkPlayer();
        console.log('   # ' + this.name + ' created');
    }

    /**
     *
     * @param position
     * @param shipInfo
     * @param player
     */
    public fillGridWithBattleShip(position: Array<number>, shipInfo: string, player: string): void {

        let gridDimensions: PIXI.Rectangle = this.getUIContainer().getBounds();
        let xPosition: number = position[0];
        let yPosition: number = position[1];
        let newShipInfo: any = shipInfo.split(',');
        let squareWidth: number = GameSettings.SquareWidth * GameSettings.GridScale;

        if (player == this._player) {

            if ((xPosition > gridDimensions.x) && (xPosition < gridDimensions.x + gridDimensions.width)) {
                if ((yPosition > gridDimensions.y) && (yPosition < gridDimensions.y + gridDimensions.height)) {
                    for (let i: number = 0; i < GameSettings.NumberOfSquaresVertically; i++) {
                        for (let j: number = 0; j < GameSettings.NumberOfSquaresHorizontally; j++) {
                            let squareXPosition: number = this.GridSquares[i][j].getPosition()[0];
                            let squareYPosition: number = this.GridSquares[i][j].getPosition()[1];


                            if ((xPosition >= squareXPosition && xPosition < squareXPosition + squareWidth) &&
                                (yPosition >= squareYPosition && yPosition < squareYPosition + squareWidth)) {

                                if (newShipInfo[0] == GameSettings.ShipHorizontalType) {
                                    let numberOfSquares: number = Math.round(position[2] / GameSettings.SquareWidth);

                                    if (this.currentNumberOfShips < this.maxShipsOnThisGrid) {
                                        for (let x: number = j; x < j + numberOfSquares; x++) {
                                            this.GridSquares[i][x].fillSquare();
                                        }
                                        this.notifyTheGridController(i, j, numberOfSquares, GameSettings.ShipHorizontalType);
                                        this.currentNumberOfShips++;
                                        this.notifyThatPlayerFinishedPlacingTheShips();
                                    }
                                } else if (newShipInfo[0] == GameSettings.ShipVerticalType) {
                                    let numberOfSquares: number = Math.round(position[3] / GameSettings.SquareWidth);

                                    if (this.currentNumberOfShips < this.maxShipsOnThisGrid) {
                                        for (let x: number = i; x < i + numberOfSquares; x++) {
                                            this.GridSquares[x][j].fillSquare();
                                        }
                                        this.notifyTheGridController(i, j, numberOfSquares, GameSettings.ShipVerticalType);
                                        this.currentNumberOfShips++;
                                        this.notifyThatPlayerFinishedPlacingTheShips();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    /**
     * Returns this grid's container.
     */
    public getUIContainer(): PIXI.Container {
        this._container.pivot.x = this._container.width / 2;
        this._container.pivot.y = this._container.height / 2;
        return super.getUIContainer();
    }

    /**
     * This is used to hide the ships that can be dragged and dropped.
     */
    public hideTheShips(): void {

        for (let i = 0; i < GameSettings.NumberOfSquaresHorizontally; i++) {
            for (let j = 0; j < GameSettings.NumberOfSquaresVertically; j++) {
                this.GridSquares[i][j].hideTheShipPart();
            }
        }
    }

    /**
     * Search for a Square in this Grid.
     * @param squareView
     */
    public hasSquare(squareView: SquareView): boolean {
        for (let i: number = 0; i < GameSettings.NumberOfSquaresVertically; i++) {
            for (let j: number = 0; j < GameSettings.NumberOfSquaresHorizontally; j++) {
                if (this.GridSquares[i][j] === squareView)
                    return true;
            }
        }
        return false;
    }

    /**
     *
     * @param gridXPosition
     * @param gridYPosition
     * @param squareWidth
     * @param numberOfSquaresVertically
     * @param numberOfSquaresHorizontally
     * @param gridBorderColor
     * @param gridSquareFillColor
     */
    private createBoard(gridXPosition: number, gridYPosition: number, squareWidth: number,
                        numberOfSquaresVertically: number, numberOfSquaresHorizontally: number, gridBorderColor: number, gridSquareFillColor: number): void {
        let newXPosition: number,
            newYPosition: number = gridYPosition,
            square: SquareView, key: number = 0;

        this.GridSquares = [];
        for (let i: number = 0; i < numberOfSquaresVertically; i++) {
            this.GridSquares[i] = [];
            newXPosition = gridXPosition;

            for (let j: number = 0; j < numberOfSquaresHorizontally; j++) {
                key++;
                square = new SquareView(newXPosition + j * squareWidth,
                    newYPosition, squareWidth, gridBorderColor, gridSquareFillColor, j, i);
                this.GridSquares[i][j] = square;
            }
            newYPosition += squareWidth;
        }

        for (let i: number = 0; i < numberOfSquaresVertically; i++)
            for (let j: number = 0; j < numberOfSquaresHorizontally; j++)
                this._container.addChild(this.GridSquares[i][j].getUIContainer());
        console.log('   # GridSquares created');
    }

    /**
     *
     * @param xPosition
     * @param yPosition
     * @param numberOfSquaresVertically
     * @param numberOfSquaresHorizontally
     * @param squareWidth
     * @param gridBorderColor
     * @param rulerTextColor
     */
    private createRuler(xPosition: number, yPosition: number, numberOfSquaresVertically: number,
                        numberOfSquaresHorizontally: number, squareWidth: number, gridBorderColor: number, rulerTextColor: number) {
        let rulerView: RulerView = new RulerView(xPosition, yPosition, numberOfSquaresVertically,
            numberOfSquaresHorizontally, squareWidth, gridBorderColor, rulerTextColor);

        this._container.addChild(rulerView.getUIContainer());
    }

    /**
     *
     */
    private checkPlayer() {
        switch (this._player) {
            case GameSettings.PlayerOne:
                this.createBoard(GameSettings.Grid1XPosition, GameSettings.Grid1YPosition, GameSettings.SquareWidth,
                    GameSettings.NumberOfSquaresVertically, GameSettings.NumberOfSquaresHorizontally, GameSettings.Grid1BorderColor, GameSettings.GridSquareFillColor);
                this.createRuler(GameSettings.Grid1XPosition, GameSettings.Grid1YPosition, GameSettings.NumberOfSquaresVertically,
                    GameSettings.NumberOfSquaresHorizontally, GameSettings.SquareWidth, GameSettings.Grid1BorderColor, GameSettings.RulerTextColor);
                break;

            case GameSettings.PlayerTwo:
                this.createBoard(GameSettings.Grid2XPosition, GameSettings.Grid2YPosition, GameSettings.SquareWidth,
                    GameSettings.NumberOfSquaresVertically, GameSettings.NumberOfSquaresHorizontally, GameSettings.Grid2BorderColor, GameSettings.GridSquareFillColor);
                this.createRuler(GameSettings.Grid2XPosition, GameSettings.Grid2YPosition, GameSettings.NumberOfSquaresVertically,
                    GameSettings.NumberOfSquaresHorizontally, GameSettings.SquareWidth, GameSettings.Grid2BorderColor, GameSettings.RulerTextColor);
                break;
        }
    }

    /**
     *
     */
    private notifyThatPlayerFinishedPlacingTheShips() {
        if (this.currentNumberOfShips === this.maxShipsOnThisGrid) {
            let facade = BattleShipFacade.getInstance(GameSettings.BattleShipFacadeKey);
            facade.sendNotification(Notifications.UPDATE_THE_TEXT, MediatorInformation.MaximumNumberOfShipReached, this._player);
            facade.sendNotification(Notifications.PLAYER_FINISHED_PLACING_THE_SHIPS, this._player);
        }
    }

    /**
     * If a player missed,the controller notifies the View to show the miss on the grid.
     */
    public updateTheViewWithAHit(squarePosition: Array<number>): void {
        let i: number = squarePosition[0], j: number = squarePosition[1];
        this.GridSquares[i][j].hit();
    }

    /**
     * If a player hits,the controller notifies the View to show the miss on the grid.
     * @param squarePosition
     */
    public updateTheViewWithAMiss(squarePosition: Array<number>): void {
        let i: number = squarePosition[0], j: number = squarePosition[1];
        this.GridSquares[i][j].miss();
    }

    /**
     *
     * @param i
     * @param j
     * @param numberOfSquares
     * @param shipType
     */
    private notifyTheGridController(i: number, j: number, numberOfSquares: number, shipType: GameSettings): void {
        let facade: any = BattleShipFacade.getInstance(GameSettings.BattleShipFacadeKey);
        facade.sendNotification(Notifications.SHIP_POSITION_INFO, [[i, j, numberOfSquares], this._player], shipType);
    }
}