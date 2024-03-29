import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeviceFormFactor } from '../app.component';
import { Observable } from 'rxjs';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  constructor() {

  }

  ngOnInit() {
    
  }
}
