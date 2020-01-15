class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get Radius() {
        return this.radius;
    }
    get Area() {
        return (Math.PI * this.radius * this.radius);
    }
}
let circle = new Circle(2);

alert(`radius =  ${circle.Radius}    ` + `area = ${circle.Area}`);