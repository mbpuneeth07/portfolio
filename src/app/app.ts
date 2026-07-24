import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';
import { HeroComponent } from './hero/hero';
import { ExperienceComponent } from './experience/experience';
import { ProjectsComponent } from './projects/projects';
import { SkillsComponent } from './skills/skills';
import { EducationComponent } from './education/education';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}

