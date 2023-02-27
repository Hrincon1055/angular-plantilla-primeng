import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SharedModule } from '../core/shared/shared.module';

@NgModule({
  declarations: [AdminLayoutComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [AdminLayoutComponent],
})
export class LayoutsModule {}
