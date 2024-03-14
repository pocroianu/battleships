import 'pixi.js'
import {BattleShipFacade} from "../facade/BattleShipFacade";
import {AbstractMediator} from "../../abstractClasses/AbstractMediator";
import {ViewManager} from "../view/mainView/ViewManager";
import {GameSettings} from "../staticInformation/GameSettings";
import {Notifications} from "../staticInformation/Notifications";

/**
 *  TextViewMediator
 */
export class TextViewMediator extends AbstractMediator {
    public name: String = 'TextViewMediator';

    /**
     *
     * @param mediatorName
     * @param viewComponent
     */
    constructor(mediatorName: string, viewComponent: any) {
        super(mediatorName, viewComponent);


        let containersList: Array<PIXI.Container> = [];
        containersList.push(super.getViewComponent().getText());
        BattleShipFacade.getInstance(GameSettings.BattleShipFacadeKey)
            .addContainersToView(containersList, ViewManager.GameInfoContainer);
        console.log('   # ' + this.name + ' created');
    }


    /**
     * The notification that the ViewManagerMediator is interested in.
     */
    public listNotificationInterests(): string[] {
        return [Notifications.UPDATE_THE_TEXT,
            ViewManager.GamePlayStateText];
    }

    /**
     *
     * @param text
     */
    public addTextToTheView(text: string) {
        super.getViewComponent().addText(text);
    }

    /**
     *  This is where the notifications are handled.
     * @param notification
     */
    public handleNotification(notification: puremvc.Notification): void {

        switch (notification.getName()) {
            case Notifications.UPDATE_THE_TEXT:
                let player: string = notification.getType();
                switch (player) {
                    case GameSettings.PlayerOne:
                        this.addTextToTheView(notification.getBody() + ' \nfor Player' + player);
                        break;

                    case GameSettings.PlayerTwo:
                        this.addTextToTheView(notification.getBody() + ' \nfor Player' + player);
                        break;
                }
                break;
            case ViewManager.GamePlayStateText:
                super.getViewComponent().showGamePlayStateText();
                break;


        }
    }
}