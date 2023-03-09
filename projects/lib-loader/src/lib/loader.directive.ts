import { Directive, ElementRef } from '@angular/core';
import { LoaderService } from './loader.service';

@Directive({
  selector: '[lib-loader-disable]'
})
export class LoaderDirective {
  constructor(
    private loaderService: LoaderService, private el: ElementRef
  ) {
    this.loaderService.isLoading$.subscribe((isLoading) => {
      if (isLoading) {
        this.el.nativeElement.classList.add('lib-loader-disable-class');
        this.disableInteractiveElements(true);
      } else {
        this.el.nativeElement.classList.remove('lib-loader-disable-class');
        this.disableInteractiveElements(false);
      }
    });
  }

  private disableInteractiveElements(disabled: boolean): void {
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    interactiveElements.forEach((element: HTMLInputElement | HTMLButtonElement | HTMLSelectElement | HTMLTextAreaElement) => {
      element.disabled = disabled;
    });
  }
}
