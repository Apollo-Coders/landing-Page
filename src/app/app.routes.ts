import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'aboutus', component: AboutUsComponent}
];
