import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouteViewComponent } from './route-view/route-view.component';
import { Observable, map } from 'rxjs';
import { match } from 'assert';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-root',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, LayoutModule, NavbarComponent, FooterComponent, RouteViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'derondecamp.com';
  screen_status!:Widescreen;
  
  constructor(private visual_breakpoint_observer:BreakpointObserver, public platform:Platform) {
    this.visual_breakpoint_observer = visual_breakpoint_observer;
    
  }

  ngOnInit():void {
    if (this.visual_breakpoint_observer.isMatched(Breakpoints.Handset)) {
      console.log("the window is less than 600px.")
    }

    this.screen_status = {is_widescreen: this.visual_breakpoint_observer.observe('(min-width: 600px)').pipe(map(({matches}) => matches))};
  }
}

export interface Widescreen {
  is_widescreen: Observable<boolean>;
}
