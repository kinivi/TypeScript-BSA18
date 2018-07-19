
import { IFighter } from './fighter';
export interface IFighter {
    readonly name: string;
    readonly health: number;
    readonly power: number;
    setDamage: (damage: number) => void;
    hit: (enemy: IFighter, point: number) => void;
}

export default class Fighter implements IFighter {

    name: string;
    health: number;
    power: number;

    constructor(name = "Fighter", health = 100, power = 5) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    setDamage(damage: number) {
        this.health = this.health - damage;
        console.log(`${this.name} health: ${this.health}`);
    }

    hit(enemy: IFighter, point: number) {
        let damage = point * this.power;
        enemy.setDamage(damage);
    }

    knockout() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Time is out");
                resolve();
            }, 500);
        });
    }
}