import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { HeaderComponent } from './header/header.component';
=======
>>>>>>> c4c3f55ce62c6a2830fd107cb5f2e454d302b976

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, RouterOutlet, HeaderComponent, HomeComponent],
=======
  imports: [CommonModule, RouterOutlet, HomeComponent],
>>>>>>> c4c3f55ce62c6a2830fd107cb5f2e454d302b976
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'landing_page_angular';
}
