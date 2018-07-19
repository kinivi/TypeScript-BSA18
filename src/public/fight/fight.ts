import Fighter from "./fighter";
import ImprovedFighter from './improvedFighter';

export default class Fight {
    constructor() {
        this.initializeFight();
    }

    private initializeFight() {
        // create two instances
        let terminator = new ImprovedFighter("Terminator-T1000", 800, 45);
        let ninja = new Fighter("Ninja", 500, 25);

        // call fight function
        startFight(ninja, terminator, [1, 4, 2, 3, 2]);
    }
}


//using ...rest for using other parameters of fight in future, that can be submitted to the function
export async function startFight(fighter: Fighter, improvedFighter: ImprovedFighter, points: number[]) {
    for (let i = 0; i < points.length; i++) {
        //Fighter hit enemy
        fighter.hit(improvedFighter, points[i]);

        //Checking if improvedFighter is knockout
        if (improvedFighter.health <= 0) {
            console.log(`${improvedFighter.name} is knockout!`);

            //waiting resolving a promise
            await fighter.knockout();

            //Log who is winner
            console.log(`${fighter.name} is Winner!!!!`);
            return;
        }

        //ImprovedFighter hit enemy
        improvedFighter.hit(fighter, points[i]);

        //Checking if improvedFighter is knockout
        if (fighter.health <= 0) {
            console.log(`${fighter.name} is knockout!`);

            //waiting resolving a promise
            await improvedFighter.knockout();

            //Log who is winner
            console.log(`${improvedFighter.name} is Winner!!!!`);
            return;
        }
    }

    //No winner - draw
    console.log("Draw!!!!");
    return;
}