import { Component } from '@angular/core';
import { RevealDirective } from '../directives/reveal.directive';

interface Certificate {
  name: string;
  status: 'completed' | 'in-progress';
  statusLabel: string;
  icon: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class EducationComponent {
  degree = 'Bachelor of Engineering, Computer Science';
  institution = 'Vidyavardhaka College of Engineering';
  period = '01/2020 – 07/2024';
  location = 'Mysuru, India';

  certificates: Certificate[] = [
    { name: 'AWS Certified Solutions Architect – Associate', status: 'in-progress', statusLabel: 'In Progress · Oct 2026', icon: '☁' },
    { name: 'Architecting with Google Compute Engine', status: 'completed', statusLabel: 'Completed', icon: '✓'  },
    { name: 'Google Cloud Career Readiness – Data Analyst Track', status: 'completed', statusLabel: 'Completed', icon: '✓' },
  ];
}
