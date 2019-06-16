import * as PIXI from "pixi.js";

export interface Renderable {
    getRenderable(): PIXI.Container;
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
