import { vec2, vec4 } from "gl-matrix";

export interface Renderable {
    getRenderDescriptors(): Array<RenderDescriptor>;
}

export interface Audible<S> {
    getAudioDescriptors(): Array<S>;
}

export interface Input {
    up: boolean;
    down: boolean;
    left: boolean;
    right: boolean;
    aButton: boolean;
    bButton: boolean;
    cButton: boolean;
}

export interface Updateable {
    update(dt: number, input: Input): void;
}

export interface MinigameEngine extends Renderable, Updateable {
    onStart(): void;
    onFinish(): void;
    onMinigameStart(): void;
    onMinigameEnd(): void;
}

export enum MinigameStatus {
    IN_PROGRESS, LOSE, WIN
}

export enum Difficulty {
    EASY, MEDIUM, HARD, INSANE
}

export interface Minigame extends Renderable, Updateable {
    onStart(time: number, difficulty: Difficulty): void;
    onFinish(): void;
    getStatus(): MinigameStatus;
}

interface RenderDescriptorBase {
    type: RenderDescriptorType;
    position: vec2;
    color: vec4;
}

export enum RenderDescriptorType {
    CIRCLE = "circle",
    RECTANGLE = "rectangle",
}

interface Circle extends RenderDescriptorBase {
    type: RenderDescriptorType.CIRCLE;
    radius: number;
}

interface Rectangle extends RenderDescriptorBase {
    type: RenderDescriptorType.RECTANGLE;
    width: number;
    height: number;
}

export type RenderDescriptor = Rectangle | Circle;