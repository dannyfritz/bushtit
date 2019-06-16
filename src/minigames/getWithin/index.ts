import { Minigame, Difficulty, MinigameStatus, Input } from "../../minigameEngine/interface";
import * as PIXI from "pixi.js";
import * as SAT from "sat";

export default class GetWithinMinigame implements Minigame {
    private location: SAT.Vector = new SAT.Vector(0, 0);
    constructor() {}
    onStart(time: number, difficulty: Difficulty): void {
    }
    onFinish(): void {
    }
    getStatus(): MinigameStatus {
        return MinigameStatus.IN_PROGRESS;
    }
    update(dt: number, input: Input): void {
        if (input.up) {
            this.location.y -= 50 * dt;
        }
        if (input.down) {
            this.location.y += 50 * dt;
        }
        if (input.left) {
            this.location.x -= 50 * dt;
        }
        if (input.right) {
            this.location.x += 50 * dt;
        }
    }
    getRenderable(): PIXI.Container {
        const container = new PIXI.Container();
        const graphics = new PIXI.Graphics();
        graphics.beginFill(0x00FF00, 0.5)
        graphics.drawCircle(Math.round(this.location.x), (Math.round(this.location.y)), 20)
        graphics.endFill()
        container.addChild(graphics);
        return container;
    }
}