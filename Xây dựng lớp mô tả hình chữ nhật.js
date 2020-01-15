class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get Area() {
        return "Diện tích =" + this.width * this.height;
    }
    get perimeter() {
        return "Chu Vi = " + (this.width + this.height) * 2;
    }
    draw() {
        let ctx = document.getElementById("Mycanvas").getContext("2d");
        let color = getRamdomHex();
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, this.width, this.height);
    }
}
function getRamdomHex() {
    let tmp = "0123456789ABCDEF"
    return `#${tmp.charAt(Math.round(Math.random() * 16))}${tmp.charAt(Math.round(Math.random() * 16))}${tmp.charAt(Math.round(Math.random() * 16))}${tmp.charAt(Math.round(Math.random() * 16))}${tmp.charAt(Math.round(Math.random() * 16))}${tmp.charAt(Math.round(Math.random() * 16))}`;

}
// function getRandomColor() {
//     let red = getRamdomHex();
//     let blue = getRamdomHex();
//     let green = getRamdomHex();
//     return "rgb(" + red + "," + blue + "," + green + ")";
// }
function main() {
    let width = Math.floor(Math.random() * 500);
    let height = Math.floor(Math.random() * 500);
    let draw1 = new Rectangle(width, height);
    draw1.draw();
    alert(draw1.Area);
    alert(draw1.perimeter);
}
main();