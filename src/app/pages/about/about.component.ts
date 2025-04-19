import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { ItalicDirective } from '../../services/json-parser/to-italic/ConvertToItalic';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, RouterModule, ItalicDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private router: Router)
  {

  }

  redirectTo() : void{
    this.router.navigateByUrl('/home');
  }
}
