import 'pixi.js';
import {AbstractNotification} from "./AbstractNotification";
import {AbstractNotifier} from "./AbstractNotifier";
import {AbstractFacade} from "./AbstractFacade";

/**
 *  Extend this class.
 */
export class AbstractCommand extends puremvc.SimpleCommand implements puremvc.ICommand, AbstractNotifier {
    /**
     *
     * @param notification
     */
    public execute(notification: AbstractNotification): void {
        super.execute(notification);
    }

    /**
     *
     * @param key
     */
    public initializeNotifier(key: string): void {
        super.initializeNotifier(key);
    }


    /**
     *
     * @param name
     * @param body
     * @param type
     */
    public sendNotification(name: string, body?: any, type?: string): void {

        let facade: any = AbstractFacade.getInstance(this.multitonKey);
        facade.sendNotification(name, body, type);
    };
}