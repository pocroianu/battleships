import {BattleShipFacade, FacadeInformation} from "../facade/BattleShipFacade";
import 'pixi.js'
import {AbstractMediator} from "../../abstractClasses/AbstractMediator";

/**
 * The button's mediator.
 */
export class ButtonViewMediator extends AbstractMediator {
    public name: String = 'ButtonViewMediator';

    /**
     *
     * @param key
     * @param viewComponent
     */
    constructor(key: string, viewComponent: puremvc.View = null) {
        super(name, viewComponent);

        let containersList: Array<PIXI.Container> = [];
        containersList.push(super.getViewComponent().getUIContainer());
        BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList,3);

        console.log('   # '+this.name+' created');
    }

    /**
     * The notification that the ViewMediator is interested in.
     */
    public listNotificationInterests(): string[] {
        return [];
    }

    /**
     *  This is where the notifications are handled.
     * @param notification
     */
    public handleNotification(notification: puremvc.Notification): void {
        let name: String = notification.name;
    }
}