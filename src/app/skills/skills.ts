import { Component } from '@angular/core';
import { RevealDirective } from '../directives/reveal.directive';

interface SkillGroup {
  label: string;
  icon: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  skillGroups: SkillGroup[] = [
    { icon: '🖥',  label: 'Frontend',      items: ['Angular', 'HTML', 'CSS', 'SCSS'] },
    { icon: '⚙',  label: 'Backend',        items: ['Node.js', 'Express.js', 'NestJS'] },
    { icon: '☁',  label: 'Cloud & Infra',  items: ['AWS MediaConvert', 'AWS MediaLive', 'Lambda', 'S3', 'SQS', 'SNS', 'CloudFront', 'EC2', 'CloudFormation', 'CloudWatch', 'GCP Cloud Functions', 'Firebase'] },
    { icon: '🗄',  label: 'Database',       items: ['Firebase Firestore', 'SQL'] },
    { icon: '🔧',  label: 'Tools',          items: ['Git', 'Linux', 'Apache Kafka', 'FFmpeg'] },
  ];
}
