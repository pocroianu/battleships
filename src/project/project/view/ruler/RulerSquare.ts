import {AbstractSimpleView} from "../../../abstractClasses/AbstractSimpleView";

/**
 * Has the responsibility to create a single square and inside it to put the coresponding letter
 */
export class RulerSquare extends AbstractSimpleView {

    /**
     *
     * @param xPosition
     * @param yPosition
     * @param squareWidth
     * @param borderColor
     * @param textColor
     * @param type
     * @param asciiCode
     */
    constructor(xPosition: number, yPosition: number, squareWidth: number, borderColor: number, textColor: number, type: string, asciiCode: number) {
        super();
        this.createRulerSquare(borderColor, xPosition, yPosition, squareWidth, type, asciiCode, textColor);
    }

    /**
     *
     * @param borderColor
     * @param xPosition
     * @param yPosition
     * @param squareWidth
     * @param type
     * @param asciiCode
     * @param textColor
     */
    private createRulerSquare(borderColor: number, xPosition: number, yPosition: number, squareWidth: number, type: string, asciiCode: number, textColor: number) {
        let graphics = new PIXI.Graphics();
        graphics.lineStyle(8, borderColor);
        graphics.beginFill(0xffffff);
        graphics.drawRect(xPosition, yPosition, squareWidth, squareWidth);
        graphics.endFill();

        let text;
        if (type === 'LETTER') {
            text = new PIXI.Text(String.fromCharCode(asciiCode), {fill: textColor});
            text.anchor.set(0.5);
            text.position.set(xPosition + squareWidth / 2, yPosition + squareWidth / 2);
        } else if (type === 'NUMBER') {
            text = new PIXI.Text(asciiCode.toString(), {fill: textColor});
            text.anchor.set(0.5);
            text.position.set(xPosition + squareWidth / 2, yPosition + squareWidth / 2);
        }

        this._container.addChild(graphics, text);
    }
}