export class Car {
    public id: number;
    public mark: string;
    public model: string;
    public year: string;
    public maxSpeed: number;
    public isAutomatic: boolean;
    public engine: string;
    public numberOfDoors: number;

    constructor(car) {
        this.id = car.id;
        this.model = car.model;
        this.mark = car.mark;
        this.year = car.year;
        this.maxSpeed = car.maxSpeed;
        this.isAutomatic = car.isAutomatic;
        this.engine = car.engine;
        this.numberOfDoors = car.numberOfDoors;
    }
}