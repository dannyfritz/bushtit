import * as PIXI from "pixi.js";

export class Renderer {
    private app: PIXI.Application;
    constructor() {
        this.app = new PIXI.Application({
            height: 144,
            width: 160,
            view: document.querySelector("#canvas") as HTMLCanvasElement,
        });
    }
    render(container: PIXI.Container) {
        this.app.renderer.clear(); 
        this.app.stage.removeChildren()
        this.app.stage.addChild(container);
        this.app.render();
    }
}