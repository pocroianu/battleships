import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {Notifications} from "../staticInformation/Notifications";

/**
 *
 */
export class StartUpCommand extends AbstractCommand {
    /**
     *
     * @param notification
     */
    public execute(notification: AbstractNotification) {
        this.sendNotification(Notifications.CREATE_GRID);
    }
}