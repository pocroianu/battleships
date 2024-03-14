import {AbstractProxy} from "../../abstractClasses/AbstractProxy";
import {Grid} from "./Grid";
import {GameSettings} from "../staticInformation/GameSettings";

/**
 *
 */
export class GridProxy extends AbstractProxy {

    public grids: Array<Grid>;

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
     * @param grids
     */
    public setData(grids: Array<Grid>): void {
        this.grids = grids;
    }

    /**
     *
     * @param player
     */
    public getGrid(player: string): Grid {
        if (player == GameSettings.PlayerOne) {
            return this.grids[0];
        } else if (player == GameSettings.PlayerTwo) {
            return this.grids[1];
        }
    }
}