/**
 *  Extend this class.
 */
export class AbstractController extends puremvc.Controller implements puremvc.IController {
    public name: string = 'Controller';
    private multitonkey: string;

    /**
     *
     * @param key
     */
    constructor(key: string) {
        super(key);
        this.multitonkey = key
    }

    /**
     * Execute a registered command based on the received notification.
     * @param notification
     */
    public executeCommand(notification: puremvc.INotification): void {
        super.executeCommand(notification);
    }

    /**
     * Register a command to this controller.
     * @param notificationName
     * @param commandClassRef
     */
    public registerCommand(notificationName: string, commandClassRef: Function): void {
        super.registerCommand(notificationName, commandClassRef);
    }

    /**
     * Verifies if this controller has registered a command.
     * @param notificationName
     */
    public hasCommand(notificationName: string): boolean {
        return super.hasCommand(notificationName);
    }

    /**
     * Remove a command from this controller.
     * @param notificationName
     */
    public removeCommand(notificationName: string): void {
        super.removeCommand(notificationName);
    }
}