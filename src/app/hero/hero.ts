import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  name = 'M B Puneethkumar';
  email = 'mbpuneethkumar@gmail.com';
  phone = '9480758970';
  location = 'Mysuru, India';
  linkedin = 'https://www.linkedin.com/in/m-b-puneethkumar';

  roles = ['Software Developer', 'Full-Stack Developer'];
  currentRoleIndex = 0;
  displayedRole = '';
  private interval: any;
  private charIndex = 0;
  private deleting = false;
  private pauseCount = 0;

  summary = `Software Developer with 2 years of experience building scalable web applications using Angular, Node.js and Firebase. Hands-on with GCP and AWS cloud platforms.`;

  scrollToExperience(event: Event) {
    event.preventDefault();
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  ngOnInit() {
    this.typeRole();
  }

  typeRole() {
    this.interval = setInterval(() => {
      const target = this.roles[this.currentRoleIndex];

      if (this.pauseCount > 0) {
        this.pauseCount--;
        return;
      }

      if (!this.deleting) {
        this.displayedRole = target.slice(0, ++this.charIndex);
        if (this.charIndex === target.length) {
          this.deleting = true;
          this.pauseCount = 28;
        }
      } else {
        this.displayedRole = target.slice(0, --this.charIndex);
        if (this.charIndex === 0) {
          this.deleting = false;
          this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
          this.pauseCount = 6;
        }
      }
    }, 68);
  }

  ngOnDestroy() { clearInterval(this.interval); }
}
