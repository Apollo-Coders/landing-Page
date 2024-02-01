import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { ParagraphComponent } from './paragraph/paragraph.component';

interface Team {
  nome: string;
  url_linkedin: string;
  url_github: string;
  email: string;
  image_src: string;
}
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [HeaderComponent, CommonModule, ParagraphComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  team: Team[] = [
    {
      nome: 'Brenda Aniceto',
      url_linkedin: 'https://www.linkedin.com/in/brendaanicetobueno',
      url_github: 'https://github.com/buen0-o5',
      email: 'brendabuenobrito@gmail.com',
      image_src: 'assets/images/brenda.jpg',
    },{
      nome: 'Caio César',
      url_linkedin: 'https://www.linkedin.com/in/caiocesarsouza/',
      url_github: 'https://github.com/caiohxp',
      email: 'caiohxp228@gmail.com',
      image_src: 'assets/images/caio.jpg',
    },{
      nome: 'Carla Morais',
      url_linkedin: 'https://www.linkedin.com/in/carla-batista-dev',
      url_github: 'https://github.com/CarlaDudaMorais',
      email: 'batista.eduardacontato@gmail.com',
      image_src: 'assets/images/carla.jpg',
    },{
      nome: 'Cleber Valerio',
      url_linkedin: 'https://www.linkedin.com/in/cleber-valerio/',
      url_github: 'https://github.com/clebervalerio',
      email: '',
      image_src: 'assets/images/valerio.jpg',
    },{
      nome: 'Daiane Bolzan',
      url_linkedin: 'https://www.linkedin.com/in/daiane-deponti-bolzan/',
      url_github: 'https://github.com/Daaaiii',
      email: 'brenda@yahoo.com.br',
      image_src: 'assets/images/daiane.jpg',
    },{
      nome: 'Guilherme Duarte',
      url_linkedin: 'https://www.linkedin.com/in/guilduarte07/',
      url_github: 'https://github.com/GuiDuarte07',
      email: 'guilhduart.abr@gmail.com',
      image_src: 'assets/images/guilherme.jpg',
    },{
      nome: 'Luiz Carneiro',
      url_linkedin: '',
      url_github: 'https://github.com/luizcarneiro90',
      email: 'luizcarneiro90@gmail.com',
      image_src: 'assets/images/luiz.jpg',
    },
    {
      nome: 'Lucas Vinicius',
      url_linkedin: 'https://www.linkedin.com/in/lucas-vin%C3%ADcius/',
      url_github: 'https://github.com/LucasViniciuus',
      email: 'lucas.vinicius03@outlook.com',
      image_src: 'assets/images/lucas.jpg',
    },
    {
      nome: 'Luiza Ferreira',
      url_linkedin: 'https://www.linkedin.com/in/luizaferreirafonseca/',
      url_github: 'https://github.com/luizaferreirafonseca',
      email: 'luiza.ferreira.fonseca@gmail.com',
      image_src: 'assets/images/luiza.jpg',
    },{
      nome: 'Michele Tenorio',
      url_linkedin: 'https://www.linkedin.com/in/michele-da-silva-tenorio-cruz-de-oliveira-856579b7/',
      url_github: 'https://github.com/MicheleTenorio',
      email: 'michelesilva3@hotmail.com',
      image_src: 'assets/images/michele.jpg',
    },{
      nome: 'Vítor Moraes',
      url_linkedin: 'https://www.linkedin.com/in/v%C3%ADtor-moraes-b43b05268/',
      url_github: 'https://github.com/vitorpatrickmoraes',
      email: '',
      image_src: 'assets/images/vitor.jpg',
    },{
      nome: 'Yasmin Gomes',
      url_linkedin: 'https://www.linkedin.com/in/yasmin-gomes-176153175/',
      url_github: 'https://github.com/YasminGomes97',
      email: 'yasmin.viieira16@gmail.com',
      image_src: 'assets/images/yasmin.jpg',
    },
  ];
}
