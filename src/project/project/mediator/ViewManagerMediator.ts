import 'pixi.js'
import {AbstractMediator} from "../../abstractClasses/AbstractMediator";

/**
 *
 */
export class ViewManagerMediator extends AbstractMediator {
    /**
     *
     * @param mediatorName
     * @param viewComponent
     */
    constructor(mediatorName?: string, viewComponent?: any) {
        super(mediatorName, viewComponent);


        console.log('   # ' + this.getMediatorName() + ' created');
    }

    /**
     * The notification that the ViewManagerMediator is interested in.
     */
    public listNotificationInterests(): string [] {
        return [];
    }

}