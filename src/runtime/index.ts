import { BasicMinigameEngine } from "../basicMinigameEngine";
import { minigames } from "../minigames";
import { Renderer } from "../rendererPixi"

const minigameEngine = new BasicMinigameEngine(minigames);
const renderer = new Renderer();

let lastTime = 0;
function run (time: number) {
    const input = {
        up: false,
        down: false,
        left: false,
        right: true,
        aButton: false,
        bButton: false,
        cButton: false,
    }
    const dt = time - lastTime;
    lastTime = time;
    minigameEngine.update(dt, input);
    const renderDescriptors = minigameEngine.getRenderDescriptors();
    renderer.render(renderDescriptors);
    requestAnimationFrame(run)
}

requestAnimationFrame(run)