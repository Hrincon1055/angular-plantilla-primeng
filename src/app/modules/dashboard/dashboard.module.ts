import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../../core/shared/shared.module';
import { PruebaunoComponent } from './pruebauno/pruebauno.component';

@NgModule({
  declarations: [DashboardComponent, PruebaunoComponent],
  imports: [CommonModule, SharedModule],
  exports: [],
})
export class DashboardModule {}
