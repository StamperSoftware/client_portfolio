import { Component } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faBriefcase, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        FaIconComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  protected readonly faBriefcase = faBriefcase;
  protected readonly faLocationDot = faLocationDot;
  protected readonly faPhone = faPhone;
  protected readonly faEnvelope = faEnvelope;
}
