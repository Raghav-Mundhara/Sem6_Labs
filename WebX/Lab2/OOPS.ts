interface details{
    model: string;
    brand : string;
    price: number;
    numberPlate: string;
    manufacture_year: number;
    broken: boolean;
    summary(): string;
}

class Vehicle implements details{
    private owner: string;
    public color: string;
    public no_of_wheels: number;
    constructor(public model: string, public brand: string, public price: number, public numberPlate: string, public manufacture_year: number, public broken: boolean, owner: string , color: string,no_of_wheels: number){
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
    summary(): string {
        return `The model of the vehicle is: ${this.model} , brand is: ${this.brand} , price is: ${this.price} , number plate is: ${this.numberPlate} , manufacture year is: ${this.manufacture_year} , broken is: ${this.broken} , owner is: ${this.owner}`;
    }
}

class Car extends Vehicle{
    constructor(public model: string, public brand: string, public price: number, public numberPlate: string, public manufacture_year: number, public broken: boolean, owner: string , color: string,no_of_wheels: number){
        super(model, brand, price, numberPlate, manufacture_year, broken, owner, color, no_of_wheels);
    }

    // summary(): string {
    //     return `The model of the car is: ${this.model} , brand is: ${this.brand} , price is: ${this.price} , number plate is: ${this.numberPlate} , manufacture year is: ${this.manufacture_year} , broken is: ${this.broken} , owner is: ${this.owner}`;
    // }
}

class Bike extends Vehicle{
    constructor(public model: string, public brand: string, public price: number, public numberPlate: string, public manufacture_year: number, public broken: boolean, owner: string , color: string,no_of_wheels: number){
        super(model, brand, price, numberPlate, manufacture_year, broken, owner, color, no_of_wheels);
    }
    summary(): string {
        return `The model of the bike is: ${this.model} , brand is: ${this.brand} , price is: ${this.price} , number plate is: ${this.numberPlate} , manufacture year is: ${this.manufacture_year} , broken is: ${this.broken}`;
    }
}

var car= new Car("A4", "Audi", 7000000, "MH 01 1234", 2019, false, "Rahul", "Black", 4);
var bike= new Bike("GSA1250", "BMW", 150000, "MH 01 1234", 2020, false, "Raj", "Blue", 2);
console.log(car.summary());
console.log(bike.summary());

var vehicle = new Vehicle("A4", "Audi", 7000000, "MH 01 1234", 2019, false, "Harsh", "Black", 4);
console.log(vehicle.summary());


// console.log(car.owner);
// console.log(bike.owner);
// console.log(vehicle.owner);

