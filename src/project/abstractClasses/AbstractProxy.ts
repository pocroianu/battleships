/**
 *
 */
export class AbstractProxy extends puremvc.Proxy {
    /**
     *
     * @param proxyName
     * @param data
     */
    constructor(proxyName?: string, data?: any) {
        super(proxyName, data);
    }

    /**
     *
     */
    public getProxyName(): string {
        return super.getProxyName();
    }

    /**
     *
     * @param data
     */
    public setData(data: any): void {
        super.setData(data);
    }

    /**
     *
     */
    public getData(): any {
        super.getData();
    }

    /**
     *
     */
    public onRegister(): void {
        super.onRegister();
    }

    /**
     *
     */
    public onRemove(): void {

    }
}