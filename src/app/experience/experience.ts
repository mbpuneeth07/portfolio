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
        'Designed a virtual playlist trimming system enabling arbitrary start/end ranges selection on live HLS streams, generated proxy manifests with synthetic segment names mapped via a JSON index, resolved at request-time by a CloudFront origin request Lambda that returns signed URLs using HMAC to the original segments reducing the execution latency and memory and cache management by almost 70% from original flow of CloudFront signing mechanism to render the playlist in real time.',
        'Implemented SRT-based live stream ingestion with a scheduler-driven FSM for stack lifecycle management, reducing stream startup/ingestion latency by almost 50% compared to the previous RTMP protocol/method.',
        'Built a POC AI-powered video clipper (GPT-4o-mini + FFmpeg) automating match-segment detection and clip generation for MMA broadcasts, eliminating manual clipping work previously done by the IMMAF production team.',
        'Designed an on-demand image transformation pipeline on AWS (CloudFront → Lambda@Edge → SQS → Lambda → S3) with caching for repeat requests',
        'Resolved race conditions in concurrent bulk video upload jobs by implementing idempotency keys, eliminating duplicate job execution and reducing failed/duplicate uploads by 20-30%'
      ]
    }
  ];
}
