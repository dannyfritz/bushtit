import { Minigame, Difficulty, MinigameStatus, Input, RenderDescriptor, RenderDescriptorType } from "../../minigameEngine/interface";
import { vec2, vec4 } from "gl-matrix";

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
    getRenderDescriptors(): Array<RenderDescriptor> {
        return [
            {
                type: RenderDescriptorType.RECTANGLE,
                color: vec4.fromValues(1, 0, 0, 1),
                position: vec2.fromValues(5, 5),
                width: 20,
                height: 40,
            },
            {
                type: RenderDescriptorType.CIRCLE,
                color: vec4.fromValues(0, 1, 0, 0.5),
                position: vec2.fromValues(50, 5),
                radius: 20
            },
        ];
    }
    update(dt: number, input: Input): void {
    }
}