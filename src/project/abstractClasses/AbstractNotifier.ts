/**
 * Extend this.
 */
import {AbstractFacade} from "./AbstractFacade";

/**
 *
 */
export class AbstractNotifier extends puremvc.Notifier {

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