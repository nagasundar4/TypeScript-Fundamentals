interface Point {
  x: number;
  y: number;
}

// let drawPoint = (x, y, a, b,c, d, e,) => {
//     //....
// }

// let drawPoint = (point: {x: number, y: number}) => {
//     //...
// }

let drawPoint = (point: Point) => {
  //...
};

let getDistance = (pointA: Point, pointB: Point) => {
  //...
};

drawPoint({
  x: 1,
  y: 2,
});
