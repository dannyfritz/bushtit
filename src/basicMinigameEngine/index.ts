import { MinigameEngine, Minigame, Input, Difficulty } from "../minigameEngine/interface";
import * as PIXI from "pixi.js";
import * as _ from "lodash";

export class BasicMinigameEngine implements MinigameEngine {
    private currentMinigame: Minigame | null = null;
    private time: number = 6;
    private difficulty: Difficulty = Difficulty.EASY;
    constructor(
        private minigames: Minigame[]
    ) { }
    onStart() {
        if (this.minigames.length === 0) {
            throw new Error("minigames cannot be empty!");
        }
    }
    update(dt: number, input: Input) {
        if (this.currentMinigame === null) {
            this.currentMinigame = this.getNewMinigame(this.time, this.difficulty)
        }
        this.currentMinigame!.update(dt, input);
        this.time -= dt;
    }
    onFinish() {
    }
    onMinigameStart() {
    }
    onMinigameEnd() {
    }
    getRenderable(): PIXI.Container {
        const container = new PIXI.Container();
        if (this.currentMinigame !== null) {
            container.addChild(this.currentMinigame.getRenderable());
        }
        const basicText = new PIXI.Text(
            `${Math.round(Math.max(0, this.time))}`,
            { fontFamily: 'monospace', fontSize: 12, fill: 0xff1010 }
        );
        basicText.x = 2;
        basicText.y = 144 - 14;
        container.addChild(basicText);
        return container;
    }
    private getNewMinigame(time: number, difficulty: Difficulty): Minigame {
        const minigame = _.sample(this.minigames)!;
        minigame.onStart(time, difficulty);
        return minigame;
    }
}
