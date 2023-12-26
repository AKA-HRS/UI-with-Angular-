import { Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { DiteComponent } from './dite/dite.component';
import { FastingComponent } from './fasting/fasting.component';

export const routes: Routes = [
    {
        path:'activities',
        component:ActivitiesComponent
    },
    {
        path:'dite',
        component:DiteComponent
    },
    {
        path:'fasting',
        component:FastingComponent
    }
];
