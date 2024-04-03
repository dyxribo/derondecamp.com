import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouteViewComponent } from './route-view/route-view.component';

/*
import { Observable, map } from 'rxjs';
import { BreakpointObserver, BreakpointState, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { match } from 'assert';
import { Platform } from '@angular/cdk/platform';
*/


@Component({
  selector: 'app-root',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, NavbarComponent, FooterComponent, RouteViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  /*
  readonly TABLET_PORTRAIT:number = 0;
  readonly TABLET_LANDSCAPE:number = 1;
  readonly HANDSET_PORTRAIT:number = 2;
  readonly HANDSET_LANDSCAPE:number = 3;
  readonly WEB:number = 4;
  */
  
  title = 'derondecamp.com';
  
  /*
  device_orientation!:number;

  constructor(private visual_breakpoint_observer:BreakpointObserver, public platform:Platform) {
    this.visual_breakpoint_observer = visual_breakpoint_observer;

    
  }

  ngOnInit():void {
    
    this.visual_breakpoint_observer.observe([Breakpoints.TabletPortrait, Breakpoints.TabletLandscape, Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape, Breakpoints.Web]).subscribe(matches => {
      const breakpoint_states:{[key:string] : boolean} = matches.breakpoints;

      if (breakpoint_states[Breakpoints.WebLandscape]) {
        console.log('device is in desktop mode.');
        this.device_orientation = this.WEB;
      } else if (breakpoint_states[Breakpoints.TabletPortrait]) {
        console.log('device is in tablet portrait mode.');
        this.device_orientation = this.TABLET_PORTRAIT;
      } else if (breakpoint_states[Breakpoints.TabletLandscape]) {
        console.log('device is in tablet landscape mode.');
        this.device_orientation = this.TABLET_LANDSCAPE;
      } else if (breakpoint_states[Breakpoints.HandsetPortrait]) {
        console.log('device is in handset portrait mode.');
        this.device_orientation = this.HANDSET_PORTRAIT;
      } else if (breakpoint_states[Breakpoints.HandsetLandscape]) {
        console.log('device is in handset landscape mode.');
        this.device_orientation = this.HANDSET_LANDSCAPE;
      } 
    });
  }
}

export interface DeviceFormFactor {
  tablet_portrait:boolean;
  tablet_landscape:boolean; 
  handset_portrait:boolean;
  handset_landscape:boolean;
  web:boolean;*/
}
