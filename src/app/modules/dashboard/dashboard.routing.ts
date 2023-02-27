import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from '../../layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminLayoutComponent,
    loadChildren: () =>
      import('./childDashboard-router.module').then(
        (m) => m.ChildDashboardRoutesModule
      ),
  },
];
@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class DashboardRoutingModule {}
