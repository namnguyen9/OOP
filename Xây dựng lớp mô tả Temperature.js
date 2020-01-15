class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get CtoF() {
        return (this.celsius * 1.8) + 32;
    }
    get CtoK() {
        return (this.celsius + 273.15);
    }
}
let c = new Temperature(25);
alert(c.CtoF);
alert(c.CtoK);