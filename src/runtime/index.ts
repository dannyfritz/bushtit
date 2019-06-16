import { BasicMinigameEngine } from "../basicMinigameEngine";
import { minigames } from "../minigames";
import { Renderer } from "../rendererPixi";
import * as _ from "lodash";

const minigameEngine = new BasicMinigameEngine(minigames);
const renderer = new Renderer();

const input = {
    up: false,
    down: false,
    left: false,
    right: false,
    aButton: false,
    bButton: false,
    cButton: false,
}

document.addEventListener('keydown', function (e) {
    switch (e.code) {
        case "ArrowUp":
            input.up = true;
        case "ArrowDown":
            input.down = true;
        case "ArrowLeft":
            input.left = true;
        case "ArrowRight":
            input.right = true;
        case "KeyZ":
            input.aButton = true;
        case "KeyX":
            input.bButton = true;
        case "KeyC":
            input.cButton = true;
    }
});

document.addEventListener('keyup', function (e) {
    switch (e.code) {
        case "ArrowUp":
            input.up = false;
        case "ArrowDown":
            input.down = false;
        case "ArrowLeft":
            input.left = false;
        case "ArrowRight":
            input.right = false;
        case "KeyZ":
            input.aButton = false;
        case "KeyX":
            input.bButton = false;
        case "KeyC":
            input.cButton = false;
    }
});

let lastTime = 0;
function run(time: number) {
    const dt = time - lastTime;
    lastTime = time;
    minigameEngine.update(dt, _.clone(input));
    renderer.render(minigameEngine.getRenderable());
    requestAnimationFrame(run)
}

requestAnimationFrame(run)