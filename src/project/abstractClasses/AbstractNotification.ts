/**
 *
 */
export class AbstractNotification extends puremvc.Notification {
    /**
     *
     * @param name
     * @param body
     * @param type
     */
    constructor(name: string, body: string, type?: string) {
        super(name, body, type);
    }

    /**
     *
     */
    public getName(): string {
        return super.getName();
    }

    /**
     *
     * @param body
     */
    public setBody(body: any): void {
        super.setBody(body);
    }

    /**
     *
     */
    public getBody(): any {
        return super.getBody();
    }

    /**
     *
     * @param type
     */
    public setType(type: string): void {
        super.setType(type);
    }

    /**
     *
     */
    public getType(): string {
        return super.getType();
    }

    /**
     *
     */
    public toString(): string {
        return super.toString();
    }

}

