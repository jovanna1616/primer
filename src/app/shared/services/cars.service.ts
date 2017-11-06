import { Injectable } from '@angular/core';
import { Car } from './../models/car.model';

@Injectable()
export class CarsService {

    private cars: Car[] = [];
    private idCount = 1;

    constructor() {
    this.addCar({
        id: this.idCount,
        mark: 'Fica',
        model: '750',
        year: '1990',
        maxSpeed: 90,
        isAutomatic: false,
        engine: 'diesel',
        numberOfDoors: 3
    });
    this.addCar({
        id: this.idCount,
        mark: 'Jugo',
        model: '45',
        year: '1989',
        maxSpeed: 80,
        isAutomatic: false,
        engine: 'gas',
        numberOfDoors: 5
    });
    }

    public getCars() {
        return this.cars;
    }

    public addCar(car: Car) {
        this.cars.push(new Car({
            id: this.idCount,
            ...car
        }));

        this.idCount = this.idCount++;
    }

    public getById(id: number) {
        let car;
        this.cars.forEach((c) => {
            if (c.id === id) {
            car = c;
            }
        });
        return car;
    }

    public editCar(car) {
        this.cars.splice(this.cars.indexOf(car), 1, car);
    }
}