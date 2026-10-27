import { Component } from '@angular/core';
import { RevealDirective } from '../directives/reveal.directive';

interface JobEntry {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent {
  jobs: JobEntry[] = [
    {
      role: 'Software Developer',
      company: 'NCompass Techstudio Pvt Ltd',
      period: '07/2024 – Present',
      location: 'Chennai, India',
      bullets: [
        `Designed a virtual playlist with trimming system for live HLS streams using synthetic-segment proxy manifests
          resolved via a CloudFront origin-request Lambda with HMAC signed URLs, cutting execution latency, memory, and
          cache overhead by ∼70% vs. native CloudFront signing.`,
        `Implemented SRT-based live stream ingestion with a scheduler-driven FSM for stack lifecycle management on MMA
          live streams broadcast across 50+ countries, reducing startup/ingestion latency by almost 50% vs. RTMP.`,
        `Built an AI-powered video clipper (GPT-4o-mini + FFmpeg) automating match-segment detection and clip generation,
          used on 70+ MMA broadcast videos and eliminating 100% of manual clipping effort for the IMMAF team.`,
        `Designed an on-demandimagetransformation pipeline on AWS (CloudFront → Lambda@Edge → SQS→Lambda
          →S3) with caching.`,
        `Resolved race conditions in concurrent bulk video upload jobs by implementing idempotency keys, eliminating
          duplicate job execution and reducing failed/duplicate uploads by 20–30%.`,
        `Probation (first 3 months):  Built and shipped 5 full-stack applications (Jira clone, Instagram clone, blog, email verification, OS metrics analyser)
          with authentication and CRUD using Node.js, NestJS, TypeScript and MySQL, deployed on AWS EC2 + RDS.`
      ]
    }
  ];
}
