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
    { icon: '💬',  label: 'Languages',      items: ['TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS/SCSS'] },
    { icon: '🖥',  label: 'Frontend',       items: ['Angular', 'React.js'] },
    { icon: '⚙',  label: 'Backend',         items: ['Node.js', 'Express.js', 'NestJS', 'REST API Development', 'WebSockets', 'RBAC'] },
    { icon: '☁',  label: 'Cloud & Infra',   items: ['AWS Lambda', 'Lambda@Edge', 'S3', 'SQS', 'SNS', 'CloudFront', 'EC2', 'RDS', 'IAM', 'MediaConvert', 'MediaLive', 'CloudFormation', 'CloudWatch', 'GCP Cloud Functions', 'Firebase'] },
    { icon: '🗄',  label: 'Databases',       items: ['Cloud Firestore', 'PostgreSQL', 'MySQL', 'MongoDB'] },
    { icon: '🔧',  label: 'DevOps & Tools',  items: ['Docker', 'DDEV', 'CI/CD (GitHub Actions)', 'Git', 'GitHub', 'Linux', 'Apache Kafka', 'FFmpeg'] },
  ];
}
