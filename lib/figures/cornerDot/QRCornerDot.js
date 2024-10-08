import cornerDotTypes from "../../constants/cornerDotTypes.js";
export default class QRCornerDot {
    constructor({ svg, type }) {
        this._svg = svg;
        this._type = type;
    }
    draw(x, y, size, rotation) {
        const type = this._type;
        let drawFunction;
        switch (type) {
            case cornerDotTypes.square:
                drawFunction = this._drawSquare;
                break;
            case cornerDotTypes.dot:
            default:
                drawFunction = this._drawDot;
        }
        drawFunction.call(this, { x, y, size, rotation });
    }
    _rotateFigure({ x, y, size, rotation = 0, draw }) {
        const cx = x + size / 2;
        const cy = y + size / 2;
        draw();
        this._element?.setAttribute("transform", `rotate(${(180 * rotation) / Math.PI},${cx},${cy})`);
    }
    _basicDot(args) {
        const { size, x, y } = args;
        this._rotateFigure({
            ...args,
            draw: () => {
                this._element = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                this._element.setAttribute("cx", String(x + size / 2));
                this._element.setAttribute("cy", String(y + size / 2));
                this._element.setAttribute("r", String(size / 2));
            }
        });
    }
    _basicSquare(args) {
        const { size, x, y } = args;
        this._rotateFigure({
            ...args,
            draw: () => {
                this._element = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                this._element.setAttribute("x", String(x));
                this._element.setAttribute("y", String(y));
                this._element.setAttribute("width", String(size));
                this._element.setAttribute("height", String(size));
            }
        });
    }
    _drawDot({ x, y, size, rotation }) {
        this._basicDot({ x, y, size, rotation });
    }
    _drawSquare({ x, y, size, rotation }) {
        this._basicSquare({ x, y, size, rotation });
    }
}
//# sourceMappingURL=QRCornerDot.js.map