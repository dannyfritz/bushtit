import { MinigameEngine, Minigame, Input, Difficulty, RenderDescriptor } from "../minigameEngine/interface";
import * as _ from "lodash";

export class BasicMinigameEngine implements MinigameEngine {
    private currentMinigame: Minigame | null = null;
    private time: number = 5;
    private difficulty: Difficulty = Difficulty.EASY;
    constructor(
        private minigames: Minigame[]
    ) {}
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
    }
    onFinish() {
    }
    onMinigameStart() {
    }
    onMinigameEnd() {
    }
    getRenderDescriptors(): RenderDescriptor[] {
        const renderDescriptors: Array<RenderDescriptor> = [];
        if (this.currentMinigame !== null) {
            renderDescriptors.push(...this.currentMinigame.getRenderDescriptors());
        }
        return renderDescriptors;
    }
    private getNewMinigame(time: number, difficulty: Difficulty): Minigame {
        const minigame = _.sample(this.minigames)!;
        minigame.onStart(time, difficulty);
        return minigame;
    }
}
