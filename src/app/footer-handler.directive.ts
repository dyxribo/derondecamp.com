import { Directive, ElementRef, Renderer2, HostListener, AfterViewInit,Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[appFooterHandler]',
  standalone: true
})
export class FooterHandlerDirective implements AfterViewInit {

  constructor(
    private footer_element:ElementRef,
    private renderer:Renderer2,
    private router: Router,
    @Inject(PLATFORM_ID) private platform_id:Object
  ) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platform_id)) {
      this.adjust_footer();

      // Listen for route changes and adjust the footer
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.adjust_footer();
      });
    }
  }

  @HostListener('window:resize', ['$event'])
  on_window_resize():void {
    if (isPlatformBrowser(this.platform_id)) {
      this.adjust_footer();
    }
  }

  private adjust_footer():void {
    const footer_native_element = this.footer_element.nativeElement;
    const document_element = this.renderer.selectRootElement('html', true);

    if (document_element.scrollHeight > window.innerHeight) {
      this.renderer.setStyle(footer_native_element, 'position', 'inherit');
      console.log("content is bigger");
    } else {
      this.renderer.setStyle(footer_native_element, 'position', 'absolute');
      this.renderer.setStyle(footer_native_element, 'width', '100vw');
      this.renderer.setStyle(footer_native_element, 'bottom', '0');
      console.log("content is smaller");
    }
  }
}
