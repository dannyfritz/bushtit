import { RenderDescriptor, RenderDescriptorType } from "../minigameEngine/interface";
import * as PIXI from "pixi.js";
import { vec4 } from "gl-matrix";

function vec4ToColor(v: vec4): [number, number] {
    return [
        ((v[0] << 16) + (v[1] << 8) + (v[2])) * 255,
        v[3]
    ];
}

export class Renderer {
    private app: PIXI.Application;
    constructor() {
        this.app = new PIXI.Application({
            height: 144,
            width: 160,
            view: document.querySelector("#canvas") as HTMLCanvasElement,
        });
    }
    render(descriptors: Array<RenderDescriptor>) {
        this.app.renderer.clear(); 
        this.app.stage.removeChildren()
        const container = new PIXI.Container();
        const graphics = new PIXI.Graphics();
        const m = new PIXI.Matrix()
        descriptors.forEach(descriptor => {
            switch (descriptor.type) {
                case RenderDescriptorType.RECTANGLE:
                    graphics.beginFill(...vec4ToColor(descriptor.color));
                    graphics.drawRect(descriptor.position[0], descriptor.position[1], descriptor.width, descriptor.height)
                    graphics.endFill();
                    break;
                case RenderDescriptorType.CIRCLE:
                    graphics.beginFill(...vec4ToColor(descriptor.color));
                    graphics.drawCircle(descriptor.position[0], descriptor.position[1], descriptor.radius)
                    graphics.endFill();
                    break;
            }
        })
        container.addChild(graphics);
        this.app.stage.addChild(container);
        this.app.render();
    }
}