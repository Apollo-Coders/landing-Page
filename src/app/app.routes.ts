import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home' },
];
