import { Component } from '@angular/core';
import { ParagraphComponent } from "../paragraph/paragraph.component";
import { TeamComponent } from "../team/team.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [ParagraphComponent, TeamComponent, HeaderComponent, FooterComponent]
})
export class AboutComponent {

}
