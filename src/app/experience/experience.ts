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
        'Engineered an automated media conversion pipeline (Angular → GCP Cloud Functions → AWS MediaConvert) with real-time status sync via Firebase Firestore and output storage in S3.',
        'Implemented SRT-based live stream ingestion using AWS MediaLive, designing a scheduler-driven FSM to manage stack lifecycle from creation to teardown.',
        'Developed a POC AI video clipper using GPT-4o-mini for match-segment detection and FFmpeg for clip extraction, with S3 + CloudFront-based delivery and auto-thumbnails.',
        'Designed an on-demand image transformation pipeline on AWS (CloudFront → Lambda@Edge → SQS → Lambda → S3) with caching for repeat requests.',
        'Built a bulk video upload system with Excel-based validation, resolving concurrent job race conditions via idempotency keys.',
      ]
    }
  ];
}
