import { Component } from '@angular/core';
import { Car } from '../../../../shared/models/car.model';
import { CarsService } from '../../../../shared/services/cars.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-car-form',
    templateUrl: './car-form.component.html',
})
export class CarFormComponent {

    private car: Car;
    public years = [];
    newTaskForm: FormGroup;
    newTaskFormOne: FormGroup;

    constructor(private carsService: CarsService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.car = new Car({});
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.car = carsService.getById(+params['id']);
            }
        });
        this.years = Array(27).fill(1).map((x, i) => 1991 + i);
        this.newTaskForm = new FormGroup({
            speed: new FormControl(
                this.car.maxSpeed,
                this.validateMaxSpeed()
            )
        });
        this.newTaskFormOne = new FormGroup({
            doors: new FormControl(
                this.car.numberOfDoors,
                this.validateNumberOfDoors()
            )
        });

    }

    submit() {
        if (this.car.id) {
            this.carsService.editCar(this.car);
        } else {
            this.carsService.addCar(this.car);
        }

        this.router.navigate(['/cars']);
    }
    showCar() {
        alert(`
            Mark: ${this.car.mark},
            Model: ${this.car.model},
            Engine: ${this.car.engine},
            Year: ${this.car.year},
            Number of doors: ${this.car.numberOfDoors},
            Max speed: ${this.car.maxSpeed},
            Type of engine: ${this.car.isAutomatic},
        `);
    }
    validateMaxSpeed() {

        return (c: FormControl) => {
            return c.value > 20 && c.value < 300 ? null : {
                validateMaxSpeed: {
                    valid: false
                }
            };
        };
    }

    validateNumberOfDoors() {
        return (c: FormControl) => {
            return c.value > 2 && c.value < 5 ? null : {
                validateNumberOfDoors: {
                    valid: false
                }
            };
        };
    }

}
