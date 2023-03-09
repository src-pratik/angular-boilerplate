import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../lib/component/loader.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderService } from './loader.service';
import { LoaderInterceptor } from './loader.interceptor';
import { LoaderDirective } from './loader.directive';

@NgModule({
  declarations: [
    LoaderComponent,
    LoaderDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
    LoaderService
  ],
  exports: [
    LoaderComponent,
    LoaderDirective
  ]
})
export class LoaderModule { }
