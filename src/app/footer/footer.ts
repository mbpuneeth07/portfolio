import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  email = 'mbpuneethkumar@gmail.com';
  linkedin = 'https://www.linkedin.com/in/m-b-puneethkumar';
  year = new Date().getFullYear();
}
