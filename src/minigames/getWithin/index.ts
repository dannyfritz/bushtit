import { Minigame, Difficulty, MinigameStatus, Input } from "../../minigameEngine/interface";
import * as PIXI from "pixi.js";

export default class GetWithinMinigame implements Minigame {
    private time: number;
    private difficulty: Difficulty;
    constructor() {}
    onStart(time: number, difficulty: Difficulty): void {
        this.time = time;
        this.difficulty = difficulty;
    }
    onFinish(): void {
    }
    getStatus(): MinigameStatus {
        return MinigameStatus.IN_PROGRESS;
    }
    getRenderable(): PIXI.Container {
        const container = new PIXI.Container();
        const graphics = new PIXI.Graphics();
        graphics.beginFill(0x00FF00, 0.5)
        graphics.drawCircle(50, 60, 20)
        graphics.endFill()
        container.addChild(graphics);
        return container;
    }
    update(dt: number, input: Input): void {
    }
}