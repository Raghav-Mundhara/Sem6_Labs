var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(model, brand, price, numberPlate, manufacture_year, broken, owner, color, no_of_wheels) {
        this.model = model;
        this.brand = brand;
        this.price = price;
        this.numberPlate = numberPlate;
        this.manufacture_year = manufacture_year;
        this.broken = broken;
        this.owner = owner;
        this.model = model;
        this.brand = brand;
        this.price = price;
        this.numberPlate = numberPlate;
        this.manufacture_year = manufacture_year;
        this.broken = broken;
        this.color = color;
        this.no_of_wheels = no_of_wheels;
    }
    Vehicle.prototype.summary = function () {
        return "The model of the vehicle is: ".concat(this.model, " , brand is: ").concat(this.brand, " , price is: ").concat(this.price, " , number plate is: ").concat(this.numberPlate, " , manufacture year is: ").concat(this.manufacture_year, " , broken is: ").concat(this.broken, " , owner is: ").concat(this.owner);
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(model, brand, price, numberPlate, manufacture_year, broken, owner, color, no_of_wheels) {
        var _this = _super.call(this, model, brand, price, numberPlate, manufacture_year, broken, owner, color, no_of_wheels) || this;
        _this.model = model;
        _this.brand = brand;
        _this.price = price;
        _this.numberPlate = numberPlate;
        _this.manufacture_year = manufacture_year;
        _this.broken = broken;
        return _this;
    }
    return Car;
}(Vehicle));
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(model, brand, price, numberPlate, manufacture_year, broken, owner, color, no_of_wheels) {
        var _this = _super.call(this, model, brand, price, numberPlate, manufacture_year, broken, owner, color, no_of_wheels) || this;
        _this.model = model;
        _this.brand = brand;
        _this.price = price;
        _this.numberPlate = numberPlate;
        _this.manufacture_year = manufacture_year;
        _this.broken = broken;
        return _this;
    }
    Bike.prototype.summary = function () {
        return "The model of the bike is: ".concat(this.model, " , brand is: ").concat(this.brand, " , price is: ").concat(this.price, " , number plate is: ").concat(this.numberPlate, " , manufacture year is: ").concat(this.manufacture_year, " , broken is: ").concat(this.broken);
    };
    return Bike;
}(Vehicle));
var car = new Car("A4", "Audi", 7000000, "MH 01 1234", 2019, false, "Rahul", "Black", 4);
var bike = new Bike("GSA1250", "BMW", 150000, "MH 01 1234", 2020, false, "Raj", "Blue", 2);
console.log(car.summary());
console.log(bike.summary());
var vehicle = new Vehicle("A4", "Audi", 7000000, "MH 01 1234", 2019, false, "Harsh", "Black", 4);
console.log(vehicle.summary());
// console.log(car.owner);
// console.log(bike.owner);
// console.log(vehicle.owner);
