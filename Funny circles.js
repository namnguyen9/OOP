 //  Vẽ một hình tròn đơn giản với kích thước cố định
        // class Circle {
        //     constructor(x, y, radius) {
        //         this.x = x;
        //         this.y = y;
        //         this.radius = radius;

        //     }
        // }
        // function createCircle() {
        //     let ctx = document.getElementById("Mycanvas").getContext("2d");
        //     let circle = new Circle(500, 500, 80);
        //     ctx.beginPath();
        //     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        //     ctx.fill();
        // }
        // createCircle()
        // Vẽ hình tròn với bán kính ngẫu nhiên
        // class Circle {
        //     constructor(x, y, radius) {
        //         this.x = x;
        //         this.y = y;
        //         this.radius = radius;
        //     }
        // }
        // function  createCircle() {
        //     let ctx = document.getElementById("Mycanvas").getContext("2d");
        //     let radius = Math.floor(Math.random()*80);
        //     let circle = new Circle(500,500,radius);
        //     ctx.beginPath();
        //     ctx.arc(circle.x,circle.y,circle.radius,0,2*Math.PI);
        //     ctx.fill();
        // }
        // // createCircle();
        // Vẽ hình tròn với màu ngẫu nhiên
        // class Circle {
        //     constructor(x, y, radius) {
        //         this.x = x;
        //         this.y = y;
        //         this.radius = radius;
        //     }
        // }
        // function getRandomHex() {
        //     return Math.floor(Math.random() * 255);
        // }
        // function getRandomColor() {
        //     let red = getRandomHex();
        //     let green = getRandomHex();
        //     let blue = getRandomHex();
        //     return "rgb(" + red + "," + green + "," + blue + ")";
        // }   
        // function createCircle() {
        //     let ctx = document.getElementById("Mycanvas").getContext("2d");
        //     let radius = Math.floor(Math.random()*80);
        //     let color = getRandomColor();
        //     let circle = new Circle(500,500,radius);
        //     ctx.beginPath();
        //     ctx.arc(circle.x,circle.y,circle.radius,0,2*Math.PI);
        //     ctx.fillStyle = color;
        //     ctx.fill();
        // }
        // createCircle();
        // Vẽ được hình tròn với vị trí ngẫu nhiên
        // class Circle {
        //     constructor(x, y, radius) {
        //         this.x = x;
        //         this.y = y;
        //         this.radius = radius;
        //     }
        // }
        // function getRamdomHex() {
        //     return Math.floor(Math.random() * 255);
        // }
        // function getRandomColor() {
        //     let red = getRamdomHex();
        //     let green = getRamdomHex();
        //     let blue = getRamdomHex();
        //     return "rgb(" + red + "," + green + "," + blue + ")";
        // }
        // function createCircle() {
        //     let ctx = document.getElementById("Mycanvas").getContext("2d");
        //     let radius = Math.floor(Math.random()*80);
        //     let color =  getRandomColor();
        //     let x = Math.random()*window.innerWidth;
        //     let y = Math.random()*window.innerHeight;
        //     let circle = new Circle(x,y,radius);
        //     ctx.beginPath();
        //     ctx.arc(circle.x,circle.y,circle.radius,0,2*Math.PI);
        //     ctx.fillStyle = color;
        //     ctx.fill();
        // }
        // createCircle();
        // Vẽ được 2 và nhiều hình tròn
        class Circle {
            constructor(x, y, radius) {
                this.x = x;
                this.y = y;
                this.radius = radius;
            }
        }
        function getRandomHex() {
            return Math.floor(Math.random() * 255);
        }
        function getRandomColor() {
            let red = getRandomHex();
            let green = getRandomHex();
            let blue = getRandomHex();
            return "rgb(" + red + "," + green + "," + blue + ")";
        }
        function createCircle() {
            let ctx = document.getElementById("Mycanvas").getContext("2d");
            let radius = Math.floor(Math.random() * 80);
            let color = getRandomColor();
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            let circle = new Circle(x, y, radius);
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
            ctx.fillStyle = color;
            ctx.fill();
        }
        function createMultipleCircle() {
            for (let i = 0; i < 100; i++) {
                createCircle()
            }
        }
        createMultipleCircle() 