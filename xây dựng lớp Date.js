class MyData {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    get Day() {
        return `Ngày${this.day}`;
    }
    get Month() {
        return ` Tháng ${this.month}`;
    }
    get Year() {
        return ` Năm ${this.year}`;
    }
    set Day(day) {
        this.day = day;
    }
    set Month(month) {
        this.month = month;
    }
    set Year(year) {
        this.year = year;
    }
    
    setDatetoString() {
        return (`${this.day}/` + `${this.month}/` + `${this.year}`).toString();
    }
}
let data = new MyData(2, 2, 2007);
// let day = data.Day;
// let month = data.Month;
// let year = data.Year;
// // alert(day + month + year);
// data.Day = 10;
// data.Month = 10;
// data.Year = 2019;
// alert(data.Day + data.Month + data.Year);

alert(data.setDatetoString());