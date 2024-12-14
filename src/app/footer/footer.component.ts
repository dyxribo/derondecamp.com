import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterHandlerDirective } from '../footer-handler.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  hostDirectives: [FooterHandlerDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
