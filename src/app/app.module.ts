import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { CarsService } from './shared/services/cars.service';
import { AppComponent } from './app.component';
import { CarsComponent } from './car/components/cars/cars.component';
import { LayoutComponent } from './car/components/layout/layout.component';
import { CarFormComponent } from './car/components/cars/car-form/car-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        CarsComponent,
        LayoutComponent,
        CarFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        CarsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
