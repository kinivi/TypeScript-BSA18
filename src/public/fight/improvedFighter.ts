import Fighter from "./fighter";

export default class ImprovedFighter extends Fighter {
    doubleHit(enemy: Fighter, point: number) : void {
        super.hit(enemy, point * 2);
    }
}
