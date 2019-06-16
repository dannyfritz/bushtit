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
            break;
        case "ArrowDown":
            input.down = true;
            break;
        case "ArrowLeft":
            input.left = true;
            break;
        case "ArrowRight":
            input.right = true;
            break;
        case "KeyZ":
            input.aButton = true;
            break;
        case "KeyX":
            input.bButton = true;
            break;
        case "KeyC":
            input.cButton = true;
            break;
    }
});

document.addEventListener('keyup', function (e) {
    switch (e.code) {
        case "ArrowUp":
            input.up = false;
            break;
        case "ArrowDown":
            input.down = false;
            break;
        case "ArrowLeft":
            input.left = false;
            break;
        case "ArrowRight":
            input.right = false;
            break;
        case "KeyZ":
            input.aButton = false;
            break;
        case "KeyX":
            input.bButton = false;
            break;
        case "KeyC":
            input.cButton = false;
            break;
    }
});

let lastTime = 0;
function run(time: number) {
    const dt = (time - lastTime) / 1000;
    lastTime = time;
    minigameEngine.update(dt, _.clone(input));
    renderer.render(minigameEngine.getRenderable());
    requestAnimationFrame(run)
}

requestAnimationFrame(run)