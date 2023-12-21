var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    return Point;
}());
// let point: Point = new Point();
var point = new Point(1, 2);
point.draw();
// tsc Objects.ts &&  node Objects.js
