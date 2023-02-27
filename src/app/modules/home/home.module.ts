import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../core/shared/shared.module';
import { PruebahomeComponent } from './pruebahome/pruebahome.component';

@NgModule({
  declarations: [HomeComponent, PruebahomeComponent],
  imports: [CommonModule, SharedModule],
  exports: [],
})
export class HomeModule {}
