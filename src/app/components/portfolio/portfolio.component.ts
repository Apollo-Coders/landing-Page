import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ParagraphComponent } from '../about-us/paragraph/paragraph.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [HeaderComponent, ParagraphComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
