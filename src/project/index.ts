import {BattleShipFacade} from './project/facade/BattleShipFacade'
import {GameSettings} from "./project/staticInformation/GameSettings";

new class Main {
    public myFacade: BattleShipFacade;

    constructor() {
        this.myFacade = BattleShipFacade.getInstance(GameSettings.BattleShipFacadeKey);
    };
};