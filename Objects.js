var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    return Point;
}());
// let point: Point = new Point();
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
// tsc Objects.ts &&  node Objects.js
