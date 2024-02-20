import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Widescreen } from '../app.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  constructor() {

  }

  ngOnInit() {
    
  }
}
