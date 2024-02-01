import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';


@Component({
    selector: 'app-portfolio',
    standalone: true,
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.css',
    imports: [HeaderComponent]
})
export class PortfolioComponent {

}
