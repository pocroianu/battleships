import {AbstractController} from "../../abstractClasses/AbstractController";

/**
 * The BattleShip controller.
 */
export class ControllerManager extends AbstractController {
    public static HitText: string = 'Hit';
    public static MissText: string = 'Miss';
    public static DefaultStateText: string = 'Non';
    public static ShipOnSquare: string = 'Shp';


    /**
     *
     * @param key
     */
    constructor(key: string) {
        super(key);
        console.log('ControllerManager created');
    }

    /**
     *
     * @param key
     */
    static getInstance(key: string): ControllerManager {
        if (!puremvc.Controller.instanceMap[key])
            puremvc.Controller.instanceMap[key] = new ControllerManager(key);

        return puremvc.Controller.instanceMap[key] as ControllerManager;
    }
}