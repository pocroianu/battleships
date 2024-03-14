import {AbstractProxy} from "../../abstractClasses/AbstractProxy";
import {Player} from "./Player";
import {GameSettings} from "../staticInformation/GameSettings";

/**
 *
 */
export class PlayerProxy extends AbstractProxy {
    public players: Array<Player> = [];

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
     * @param players
     */
    public setData(players: Array<Player>): void {
        this.players = players;
    }

    /**
     *
     * @param player
     */
    public getPlayer(player: string): Player {
        if (player == GameSettings.PlayerOne) {
            return this.players[0];
        } else if (player == GameSettings.PlayerTwo) {
            return this.players[1];
        }
    }
}