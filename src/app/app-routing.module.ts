import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './car/components/cars/cars.component';
import { CarFormComponent } from './car/components/cars/car-form/car-form.component';

const appRoutes: Routes = [
    {
         path: '',
         redirectTo: '/cars',
         pathMatch: 'full'
    },
    {
        path: 'add',
        component: CarFormComponent
    },
    {
         path: 'cars',
         component: CarsComponent
    },
    {
        path: 'edit/:id',
        component: CarFormComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})export class AppRoutingModule {}