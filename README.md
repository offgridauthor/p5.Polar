# p5.Polar
**The work still in progress**

p5.Polar is a JavaScript library that extend [p5.js](https://p5js.org/) standard drawing functions with versions using polar coordinates. The library converts polar coordinate to cartesian coordinate, and abstracts the mathematics required for making many types of geometric patterns.

![alt text](https://i.imgur.com/693CMSV.png "Polar.ellipses example") 
![alt text](https://imgur.com/x2NNaN0.png "Geometric pattern example")

### Example
- Regular Triangle

``` JavaScript
function draw() {
    polarTriangle(0, 100, 0); // pass angle, radius and distance to polar system
}
```
![alt text](https://i.imgur.com/ZIl3qQ4.png "Polar.regularTriangle")

- Multiple Regular Triangle

``` JavaScript
function draw() {
   polarTriangles(2, 100, 0); // pass number of triangles, radius and distance to polar system
}
```
![alt text](https://i.imgur.com/YzoN9OM.png "Advanced Polar.regularTriangle")

- Ellipse

``` JavaScript
function draw() {
  polarEllipse(0, 150, 150, 0); // pass angle, width, height, and distance to polar system
}
```
![alt text](https://i.imgur.com/0ot3y1B.png "Polar.ellipse")

- Multiple Ellipse

``` JavaScript
function draw() {
  polarEllipses(6, 100, 100, 50); // pass number of ellipse, width, height, and distance to polar system
}
```
![alt text](https://i.imgur.com/g9yuIyV.png "Advanced Polar.ellipse")

- Line

``` JavaScript
function draw() {
  polarLine(0, 100); // pass angle and radius to polar system
}
```
![alt text](https://i.imgur.com/wWzEtwW.png "Polar.line")

- Multiple Line

``` JavaScript
function draw() {
  polarLines(3, 100); // pass number of lines and radius to polar system
}
```
![alt text](https://i.imgur.com/VQfvhwN.png "Advanced Polar.line")

- Regular Hexagon

``` JavaScript
function draw() {
  polarHexagon(0, 125, 0); // pass angle, radius and distance to polar system
}
```
![alt text](https://i.imgur.com/qyohW6H.png "Polar.regularHexagon")

- Multiple Regular Hexagon

``` JavaScript
function draw() {
  polarHexagons(6, 50, 50); // pass number of hexagons, radius and distance to polar system
}
```
![alt text](https://i.imgur.com/lgOgB4t.png "Advanced Polar.regularHexagon")
