import { Component } from '@angular/core';
import { RevealDirective } from '../directives/reveal.directive';

interface Project {
  name: string;
  techStack: string;
  description: string;
  tags: string[];
  icon: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Kafka Metrics Analyzer',
      techStack: 'Apache Kafka · Node.js · TypeScript · AWS EC2',
      description: 'Real-time metrics processing application using Kafka for event streaming, deployed on AWS EC2 with high-throughput consumer groups and monitoring dashboards.',
      tags: ['Kafka', 'Node.js', 'TypeScript', 'AWS EC2'],
      icon: '⚡'
    },
    {
      name: 'Jira Clone with RBAC & Auth',
      techStack: 'NestJS · TypeScript · Express.js · SQL',
      description: 'Full-stack project management tool with role-based access control, JWT authentication, ticket workflows, sprint planning, and team collaboration features.',
      tags: ['NestJS', 'TypeScript', 'Express.js', 'SQL'],
      icon: '🗂'
    }
  ];
}
